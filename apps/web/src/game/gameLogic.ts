export type Cell = {
  id: string;
  hasMine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacentMines: number;
};

export const createBoard = (rows: number, cols: number): Cell[][] =>
  Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (__, c) => ({
      id: `${r}-${c}`,
      hasMine: false,
      revealed: false,
      flagged: false,
      adjacentMines: 0,
    }))
  );

export const placeMines = (
  board: Cell[][],
  mines: number,
  safeR: number,
  safeC: number
): Cell[][] => {
  const newBoard = structuredClone(board);
  let placed = 0;

  while (placed < mines) {
    const r = Math.floor(Math.random() * newBoard.length);
    const c = Math.floor(Math.random() * newBoard[0].length);

    if (!newBoard[r][c].hasMine && !(r === safeR && c === safeC)) {
      newBoard[r][c].hasMine = true;
      placed += 1;
    }
  }

  return newBoard;
};
export const calculateNumbers = (board: Cell[][]): Cell[][] => {
  const dirs = [-1, 0, 1];
  const newBoard = structuredClone(board);

  for (let r = 0; r < newBoard.length; r += 1) {
    for (let c = 0; c < newBoard[0].length; c += 1) {
      if (!newBoard[r][c].hasMine) {
        let count = 0;

        dirs.forEach((dr) =>
          dirs.forEach((dc) => {
            if (!dr && !dc) return;
            const nr = r + dr;
            const nc = c + dc;

            if (
              nr >= 0 &&
              nr < newBoard.length &&
              nc >= 0 &&
              nc < newBoard[0].length &&
              newBoard[nr][nc].hasMine
            ) {
              count += 1;
            }
          })
        );

        newBoard[r][c].adjacentMines = count;
      }
    }
  }

  return newBoard;
};

export const revealCell = (
  board: Cell[][],
  r: number,
  c: number
): { board: Cell[][]; points: number } => {
  const newBoard = structuredClone(board);
  let points = 0;

  const dfs = (x: number, y: number) => {
    const cell = newBoard[x][y];
    if (cell.revealed || cell.flagged) return;

    cell.revealed = true;

    if (cell.hasMine) {
      points -= 5;
      return;
    }

    points += cell.adjacentMines > 0 ? 2 : 1;

    if (cell.adjacentMines === 0) {
      [-1, 0, 1].forEach((dx) =>
        [-1, 0, 1].forEach((dy) => {
          if (!dx && !dy) return;
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < newBoard.length && ny >= 0 && ny < newBoard[0].length) dfs(nx, ny);
        })
      );
    }
  };

  dfs(r, c);
  return { board: newBoard, points };
};
export const toggleFlag = (board: Cell[][], r: number, c: number): Cell[][] => {
  const newBoard = structuredClone(board);
  const cell = newBoard[r][c];

  if (cell.revealed) return newBoard;

  cell.flagged = !cell.flagged;

  return newBoard;
};
