import { useState } from 'react';
import Board from './components/Board';
import useGame from './hooks/useGame';

type PlayerInput = {
  id: string;
  name: string;
};

function App() {
  const ROWS = 16;
  const COLS = 16;
  const MINES = 40;

  const {
    board,
    players,
    currentPlayer,
    gameOver,
    timeLeft,
    started,
    startGame,
    clickCell,
    rightClickCell,
  } = useGame(ROWS, COLS, MINES);

  const [playersInput, setPlayersInput] = useState<PlayerInput[]>([
    { id: crypto.randomUUID(), name: '' },
    { id: crypto.randomUUID(), name: '' },
  ]);

  if (!started) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">Minesweeper Coop</h1>

        <div className="flex flex-col gap-3">
          {playersInput.map((player) => (
            <input
              key={player.id}
              value={player.name}
              onChange={(e) =>
                setPlayersInput((prev) =>
                  prev.map((p) => (p.id === player.id ? { ...p, name: e.target.value } : p))
                )
              }
              placeholder="Nome do jogador"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-600"
            />
          ))}
        </div>

        <button
          type="button"
          disabled={playersInput.some((p) => !p.name.trim())}
          onClick={() => startGame(playersInput.map((p) => p.name))}
          className="px-6 py-2 bg-green-600 rounded font-bold disabled:opacity-50"
        >
          Iniciar Jogo
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Minesweeper Coop</h1>

      <div className="flex items-center gap-6">
        <div className="text-lg font-bold">{players[currentPlayer].name}</div>
        <div className="text-2xl font-mono text-red-400">⏱ {timeLeft}s</div>
      </div>

      <div className="flex gap-6">
        {players.map((player) => (
          <div
            key={player.id}
            className={`px-4 py-2 rounded ${
              player.id === players[currentPlayer].id ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            {player.name}: {player.score}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="text-xl font-bold text-green-400">
          Partida encerrada — não há mais pontos possíveis
        </div>
      )}

      <Board board={board} onCellClick={clickCell} onCellRightClick={rightClickCell} />
    </div>
  );
}

export default App;
