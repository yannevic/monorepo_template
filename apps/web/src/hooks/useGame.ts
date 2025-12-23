import { useState, useEffect, useCallback } from 'react';

import {
  createBoard,
  placeMines,
  calculateNumbers,
  revealCell,
  toggleFlag,
  type Cell,
} from '../game/gameLogic';

type Player = {
  id: string;
  name: string;
  score: number;
};

const useGame = (rows: number, cols: number, mines: number) => {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [board, setBoard] = useState<Cell[][]>(() => createBoard(rows, cols));

  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const TURN_TIME = 10;
  const [timeLeft, setTimeLeft] = useState(TURN_TIME);

  const nextTurn = useCallback(() => {
    setCurrentPlayer((prev) => (prev + 1) % players.length);
    setTimeLeft(TURN_TIME);
  }, [players.length]);

  const checkGameOver = (boardState: Cell[][]) =>
    boardState.every((row) => row.every((cell) => cell.hasMine || cell.revealed));

  const startGame = (names: string[]) => {
    setPlayers(
      names.map((name) => ({
        id: crypto.randomUUID(),
        name,
        score: 0,
      }))
    );

    setBoard(createBoard(rows, cols));
    setStarted(true);
    setGameOver(false);
  };

  useEffect(() => {
    if (!started || gameOver || players.length === 0) {
      return undefined;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [started, gameOver, players.length]);

  useEffect(() => {
    if (!started || gameOver) {
      return undefined;
    }

    if (timeLeft <= 0) {
      nextTurn();
    }

    return undefined;
  }, [timeLeft, started, gameOver, nextTurn]);

  const clickCell = (r: number, c: number) => {
    if (!started || gameOver) return;

    const cell = board[r][c];
    if (cell.revealed || cell.flagged) return;

    const isMine = cell.hasMine;
    let newBoard = board;

    const isFirstMove = board.every((row) => row.every((boardCell) => !boardCell.revealed));

    if (isFirstMove) {
      newBoard = placeMines(newBoard, mines, r, c);
      newBoard = calculateNumbers(newBoard);
    }

    const { board: revealedBoard } = revealCell(newBoard, r, c);
    newBoard = revealedBoard;
    setBoard(newBoard);

    if (checkGameOver(newBoard)) {
      setGameOver(true);
      return;
    }

    setPlayers((prev) =>
      prev.map((p, i) => (i === currentPlayer ? { ...p, score: p.score + (isMine ? -5 : 1) } : p))
    );

    nextTurn(); // ✅ UMA única troca
  };

  const rightClickCell = (r: number, c: number) => {
    if (!started || gameOver) return;
    setBoard((prev) => toggleFlag(prev, r, c));
  };

  return {
    board,
    players,
    currentPlayer,
    gameOver,
    timeLeft,
    started,
    startGame,
    clickCell,
    rightClickCell,
  };
};

export default useGame;
