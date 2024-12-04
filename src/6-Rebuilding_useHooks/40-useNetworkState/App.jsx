import "./App.css";
import useNetworkState from "./useNetworkState";

export default function App() {
  const network = useNetworkState();

  return (
    <section>
      <h1>useNetworkState</h1>

      <table>
        <tbody>
          {Object.keys(network).map((key) => {
            return (
              <tr key={key} className={key}>
                <th>{key}</th>
                <td>{`${network[key]}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
