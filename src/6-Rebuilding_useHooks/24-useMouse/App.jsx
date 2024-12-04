import "./App.css";
import useMouse from "./useMouse";
import Demo from "./Demo";

export default function App() {
  const [mouse, ref] = useMouse();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  const isIntersecting = xIntersecting && yIntersecting;

  return (
    <section>
      <h1>useMouse</h1>
      <article
        ref={ref}
        style={{ width: "300px", height: "300px" }}
        className={isIntersecting ? "active" : ""}
      >
        Use a ref to add coords relative to the element
      </article>
      <Demo {...mouse} />
    </section>
  );
}
