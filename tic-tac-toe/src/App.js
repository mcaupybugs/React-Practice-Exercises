import "./App.css";
import Grid from "./components/Grid.tsx";
import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("Next Player : X");
  const [square, setSquare] = useState(Array(9).fill(null));

  return (
    <div className="App h-screen w-screen bg-black flex flex-col justify-center place-items-center">
      <p className="text-gray-200 text-4xl pt-2 0 align-middle">{status}</p>
      <Grid squares={square}></Grid>
      {console.log(square)}
      <button className="h-8 w-24 bg-yellow-400 font-bold rounded-md mt-8 ">
        Start Game
      </button>
    </div>
  );
}

export default App;
