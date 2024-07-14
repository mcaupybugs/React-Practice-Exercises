import "./App.css";
import Header from "./components/Header.tsx";
import {
  MemoryRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Stopwatch from "./components/Stopwatch.tsx";
import Timer from "./components/Timer.tsx";

function App() {
  return <div className="App">
    <Router>
      <Header></Header>
      <div className="h-24">
        <Routes>
          <Route path="/" exact element={<Stopwatch></Stopwatch>} />
          <Route path="/timer" element={<Timer />}></Route>
        </Routes>
      </div>
    </Router>
  </div>;
}

export default App;
