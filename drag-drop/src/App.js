import { useState } from "react";
import "./App.css";
import List from "./components/List.tsx";

function App() {
  const [done, setDone] = useState([]);

  return (
    <div className="App">
      <div className="m-12 text-xl font-bold">Tasks</div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col m-12 justify-center">
          <div>Done</div>
          <List></List>
        </div>
        <div className="flex flex-col m-12 justify-center">
          <div>To be done</div>
          <List></List>
        </div>
      </div>
    </div>
  );
}

export default App;
