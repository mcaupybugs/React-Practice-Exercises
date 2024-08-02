import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List.tsx";

function App() {
  const [done, setDone] = useState(["first task", "secondtask"]);
  const [toBeDone, setToBeDone] = useState(["come on man", "tast2"]);

  const handleDragStart = (event, itemId) => {
    event.dataTransfer.setData("text/plain", itemId);

    console.log(itemId);
  };

  const handleDragDrop = (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    var array = [...done];
    const element = array.splice(itemId, 1);
    console.log(element[0]);
    console.log(array);
    setDone(array);
    console.log(done);
    setToBeDone([...toBeDone, element[0]]);
  };

  return (
    <div className="App">
      <div className="m-12 text-xl font-bold">Tasks</div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col m-12 justify-center">
          <div>Done</div>
          <List
            listArray={done}
            ondragstart={handleDragStart}
            ondragend={handleDragDrop}
          ></List>
        </div>
        <div
          className="flex flex-col m-12 justify-top"
          onDrop={handleDragDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div>To be done</div>
          <List
            listArray={toBeDone}
            ondragstart={handleDragStart}
            ondragend={handleDragDrop}
          ></List>
        </div>
      </div>
    </div>
  );
}

export default App;
