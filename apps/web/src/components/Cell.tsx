import type { Cell as CellType } from '../game/gameLogic';

type CellProps = {
  cell: CellType;
  onClick: () => void;
  onRightClick: () => void;
};

function Cell({ cell, onClick, onRightClick }: CellProps) {
  const baseStyle = 'w-8 h-8 flex items-center justify-center border text-sm font-bold select-none';

  const hiddenStyle = 'bg-gray-500 hover:bg-gray-400 cursor-pointer';
  const revealedStyle = 'bg-gray-300 cursor-default';

  let content: string | null = null;
  let textStyle = '';

  if (cell.revealed) {
    if (cell.hasMine) {
      content = '💣';
    } else if (cell.adjacentMines > 0) {
      content = cell.adjacentMines.toString();
      textStyle = 'text-[#f283aa]';
    }
  } else if (cell.flagged) {
    content = '🚩';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
      disabled={cell.revealed}
      className={`${baseStyle} ${cell.revealed ? revealedStyle : hiddenStyle}`}
    >
      <span className={textStyle}>{content}</span>
    </button>
  );
}

export default Cell;
