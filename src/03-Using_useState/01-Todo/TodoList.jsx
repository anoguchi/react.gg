import * as React from "react";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";
import "./App.css";

export default function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, label: "Learn React", completed: false },
    { id: 2, label: "Learn Next.js", completed: false },
    { id: 3, label: "Learn React Query", completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
