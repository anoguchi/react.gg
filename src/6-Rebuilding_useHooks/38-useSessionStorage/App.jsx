import "./App.css";
import useSessionStorage from "./useSessionStorage";
import { cart } from "./icons";

export default function App() {
  const [count, setCount] = useSessionStorage("woot", 0);

  return (
    <section>
      <h1>useSessionStorage</h1>

      <div>
        <button className="link" onClick={() => setCount(0)}>
          Clear Cart
        </button>
        <button
          className="link"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload Window
        </button>
        <button
          className="link"
          onClick={() => {
            window.sessionStorage.clear();
            window.location.reload();
          }}
        >
          Clear Session
        </button>
      </div>

      <button className="primary" onClick={() => setCount(count + 1)}>
        <span>{cart}</span> Add To Cart
      </button>

      <button className="cart">
        <span>{cart}</span>{" "}
        <span
          key={count}
          className={`cart-count ${count > 0 ? "animate" : ""}`}
        >
          {count}
        </span>
      </button>
    </section>
  );
}
