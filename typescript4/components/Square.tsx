import React from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
  winner: string | null;
};

function Square({ value, onClick, winner }: SquareProps) {
  
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)}>
        {value}
      </button>
    );
  }

  return (
    <button
      className={`square square_${value.toLowerCase()}`}
      disabled={Boolean(winner)}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
