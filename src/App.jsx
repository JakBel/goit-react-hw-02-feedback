import "./App.css";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Statistics good={0} neutral={0} bad={0} total={0} percentage={0} />
      </header>
    </div>
  );
}

export default App;
