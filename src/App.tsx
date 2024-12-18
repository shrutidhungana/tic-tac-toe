
import { TicTacToe } from './tic-tac-toe'
import "./App.css";
import logo from "./logo.svg";


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Time to Code <span className="small"> with</span>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <TicTacToe />
      </main>
    </div>
  );
}

export default App
