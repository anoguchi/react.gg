import emojis from "./emojis";
import "./App.css";

const selectRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function App() {
  const selected = selectRandomElement(emojis);

  const handleCopy = (e) => {
    if (e.target.innerText !== selected.emoji) {
      alert("Wrong emoji");
    } else if (e.timeStamp > 5000) {
      alert("Too slow. Reset and try again.");
    } else {
      alert("🎉 Winner!");
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <h1>{selected.emoji}</h1>
      <p>copy this emoji</p>
      <ul className="list">
        {emojis.map(({ id, emoji }) => {
          return (
            <li onCopy={handleCopy} key={id}>
              {emoji}
            </li>
          );
        })}
      </ul>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
