import * as React from "react";

function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}

export default function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = React.useState("");

  const handleUpdateLabel = (e) => setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <li>
      <input
        placeholder="Add a new todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
      />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </li>
  );
}
