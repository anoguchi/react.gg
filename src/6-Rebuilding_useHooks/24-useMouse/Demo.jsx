export default function Demo(props) {
  return (
    <dialog
      style={{
        position: "absolute",
        top: `${props.y}px`,
        left: `${props.x}px`,
      }}
    >
      <table>
        <tbody>
          <tr>
            <th className="row-heading" colSpan={2}>
              Mouse Position
            </th>
          </tr>
          <tr>
            <th>x</th>
            <td>{props.x}</td>
          </tr>
          <tr>
            <th>y</th>
            <td>{props.y}</td>
          </tr>
          <tr>
            <th className="row-heading" colSpan={2}>
              Relative To Ref
            </th>
          </tr>
          <tr>
            <th>elementX</th>
            <td>{props.elementX}</td>
          </tr>
          <tr>
            <th>elementY</th>
            <td>{props.elementY.toFixed(0)}</td>
          </tr>
        </tbody>
      </table>
    </dialog>
  );
}
