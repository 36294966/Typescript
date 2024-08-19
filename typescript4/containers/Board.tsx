import { useState, useEffect } from "react";
import Square from "../components/Square";

type Player = "X" | "0" | "BOTH" | null;

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "0">(
    Math.round(Math.random() * 1) === 1 ? "X" : "0"
  );
  const [winner, setWinner] = useState<Player>(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "0");
  }

  function setSquareValue(index: number) {
    if (squares[index] || winner) return; // Prevents changing a square if it’s already filled or if there is a winner

    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    } else if (!squares.includes(null)) {
      setWinner("BOTH");
    }
  }, [squares]);

  function calculateWinner(squares: Player[]): Player {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <p>Hey {currentPlayer}, it's your turn!</p>

      {winner && winner !== "BOTH" && <p>Congratulations {winner}!</p>}
      {winner && winner === "BOTH" && <p>Congratulations, you're both winners!</p>}

      <div className="grid">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onClick={() => setSquareValue(i)}
          />
        ))}
      </div>
      <button className="reset" onClick={reset}>RESET</button>
    </div>
  );
}

export default Board;
