export default function Counter() {
  let count = 0;

  const handleClick = () => count++;

  return <button onClick={handleClick}>{count}</button>;
}
