import './style/app.scss';
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header"> Task board</header>
        <div className="main">
            <Board/>
        </div>
    </div>
  );
}

export default App;
