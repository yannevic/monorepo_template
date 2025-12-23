import type { Cell as CellType } from '../game/gameLogic';
import Cell from './Cell';

type BoardProps = {
  board: CellType[][];
  onCellClick: (row: number, col: number) => void;
  onCellRightClick: (row: number, col: number) => void;
};

function Board({ board, onCellClick, onCellRightClick }: BoardProps) {
  const columns = board[0]?.length ?? 0;

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${columns}, 2rem)` }}>
      {board.map((row, r) =>
        row.map((cell, c) => (
          <Cell
            key={cell.id}
            cell={cell}
            onClick={() => onCellClick(r, c)}
            onRightClick={() => onCellRightClick(r, c)}
          />
        ))
      )}
    </div>
  );
}

export default Board;
