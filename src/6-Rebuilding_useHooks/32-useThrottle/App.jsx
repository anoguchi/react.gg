import "./App.css";
import useOrientation from "./useOrientation";

export default function App() {
  const orientation = useOrientation();

  return (
    <section>
      <h1>useOrientation</h1>

      <article
        style={{ "--angle": `${orientation.angle}deg` }}
        className={orientation.type.toLocaleLowerCase()}
      />
      <div>
        <table>
          <tbody>
            {Object.keys(orientation).map((key) => {
              return (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{orientation[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
