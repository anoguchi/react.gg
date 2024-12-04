import "./App.css";
import useWindowScroll from "./useWindowScroll";

export default function App() {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <section>
      <header>
        <h1>useWindowScroll</h1>
        <button className="link" onClick={() => scrollTo(0, 1000)}>
          Scroll To (0, 1000)
        </button>
        <button
          className="link"
          onClick={() => scrollTo({ left: 0, top: 2000, behavior: "smooth" })}
        >
          Scroll To (0, 2000) (Smoothly)
        </button>
        <button
          className="link"
          onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
        >
          Back To The Top
        </button>
      </header>

      {new Array(50).fill().map((_, index) => {
        return <p key={index}>{index}</p>;
      })}
      <aside style={{ position: "fixed", bottom: 0, right: 0 }}>
        Coordinates <span className="x">x: {x}</span>{" "}
        <span className="y">y: {y}</span>{" "}
      </aside>
    </section>
  );
}
