import "./App.css";
import Grid from "./components/Grid.tsx";
import React, { useState } from "react";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const isWinner = (square) => {
    const cases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < cases.length; i++) {
      const val = square[cases[i][0]];
      if (val == null) {
        continue;
      }
      let j = 1;
      for (; j < 3; j++) {
        if (square[cases[i][j]] == null || square[cases[i][j]] !== val) {
          break;
        }
      }
      if (j == 3) return val;
    }
    return null;
  };

  const handleClick = (index) => {
    if (square[index] != null) {
      return;
    }
    setSquare((oldValue) => {
      const newArray = [...oldValue];
      newArray[index] = currentTurn;
      const winner = isWinner(newArray);
      if (winner != null) {
        setWinner(winner);
        return newArray;
      }

      currentTurn == "X" ? setCurrentTurn("O") : setCurrentTurn("X");
      return newArray;
    });
  };

  const restartGame = () => {
    setSquare(() => {
      const newArray = Array(9).fill(null);
      return newArray;
    });
    setWinner(null);
    setCurrentTurn("X");
  };

  return (
    <div className="App h-screen w-screen bg-black flex flex-col justify-center place-items-center">
      <p className="text-gray-200 text-4xl pt-2 0 align-middle">
        {winner ? "Winner: " + winner : "Next turn: " + currentTurn}
      </p>
      <Grid squares={square} handleClick={handleClick}></Grid>
      <button
        className="h-8 w-24 bg-yellow-400 font-bold rounded-md mt-8 "
        onClick={() => restartGame()}
      >
        Restart Game
      </button>
    </div>
  );
}

export default App;
