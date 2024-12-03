import "./App.css";
import useDefault from "./useDefault";

export default function App() {
  const initialState = { name: "Tyler" };
  const defaultState = { name: "Ben" };

  const [user, setUser] = useDefault(initialState, defaultState);

  return (
    <section>
      <h1>useDefault</h1>

      <button
        title="Sets the value to Lynn"
        className="link"
        onClick={() => setUser({ name: "Lynn" })}
      >
        Lynn
      </button>
      <button
        title="Sets the value to Tyler"
        className="link"
        onClick={() => setUser({ name: "Tyler" })}
      >
        Tyler
      </button>
      <button
        title="Sets the value to null causing it to use the default value"
        className="link"
        onClick={() => setUser(null)}
      >
        null
      </button>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
    </section>
  );
}
