import "./App.css";
import useCounter from "./useCounter";

export default function App() {
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 5,
    max: 10,
  });

  return (
    <section>
      <h1>UseCounter</h1>
      <h6>with optional min / max</h6>
      <button disabled={count >= 10} className="link" onClick={increment}>
        Increment
      </button>
      <button disabled={count <= 5} className="link" onClick={decrement}>
        Decrement
      </button>
      <button className="link" onClick={() => set(6)}>
        Set to 6
      </button>
      <button className="link" onClick={reset}>
        Reset
      </button>
      <p>{count}</p>
    </section>
  );
}
