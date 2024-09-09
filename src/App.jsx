import "./App.css";
import CounterView from "./Features/Counter/CounterView";

const App = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Redux Toolkit</h1>
      <CounterView />
    </div>
  );
};

export default App;
