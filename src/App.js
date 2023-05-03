import "./App.css";
import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Weather App</h1>
        <Greetings city="Paris" />
      </header>
    </div>
  );
}

export default App;
