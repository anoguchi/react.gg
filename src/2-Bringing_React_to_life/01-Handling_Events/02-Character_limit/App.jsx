import "./App.css";

export default function App() {
  const handleChange = (event) => {
    if (event.target.value.length > 10) {
      alert("Character limit exceeded");
    }
  };

  return (
    <section>
      <h1>Character Limit</h1>
      <input placeholder="Enter some text" onChange={handleChange} />
    </section>
  );
}
