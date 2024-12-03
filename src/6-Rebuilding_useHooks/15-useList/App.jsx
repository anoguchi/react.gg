import "./App.css";
import useList from "./useList";
import ListDemo from "./ListDemo";

export default function App() {
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
    "First",
    "Second",
    "Third",
  ]);

  return (
    <section>
      <header>
        <h1>UseList</h1>
        <button
          disabled={list.length < 1}
          className="link"
          onClick={() => insertAt(1, "Inserted After First")}
        >
          Insert After First
        </button>
        <button
          disabled={list.length < 2}
          className="link"
          onClick={() => removeAt(1)}
        >
          Remove Second Item
        </button>
        <button className="link" onClick={() => set([1, 2, 3])}>
          set([1, 2, 3])
        </button>
        <button className="link" onClick={() => clear()}>
          Clear
        </button>
      </header>
      <ListDemo
        list={list}
        updateAt={updateAt}
        push={push}
        removeAt={removeAt}
      />
    </section>
  );
}
