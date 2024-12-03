import "./App.css";
import useObjectState from "./useObjectState";

const initialState = {
  team: "Utah Jazz",
  wins: 2138,
  losses: 1789,
  championships: 0,
};

export default function App() {
  const [state, setState] = useObjectState(initialState);

  const handleAddWin = () => {
    setState({
      wins: state.wins + 1,
    });
  };

  const handleAddLoss = () => {
    setState({
      losses: state.losses + 1,
    });
  };

  const handleAddChampionship = () => {
    setState({
      championships: state.championships + 1,
    });
  };

  const handleReset = () => {
    setState(initialState);
  };

  return (
    <section>
      <h1>useObjectState</h1>

      <button className="link" onClick={handleAddWin}>
        Add Win
      </button>
      <button className="link" onClick={handleAddLoss}>
        Add Loss
      </button>
      <button className="link" onClick={handleAddChampionship}>
        Add Championship
      </button>
      <button className="link" onClick={handleReset}>
        Reset
      </button>

      <article>
        <table>
          <thead>
            <tr>
              {Object.keys(state).map((key) => {
                return <th key={key}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(state).map((key) => {
                return <td key={key}>{`${state[key]}`}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
