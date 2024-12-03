export default function Form({ addItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addItem(formData.get("todo"));
    e.target.reset();
    e.target.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Add New Todo" name="todo" />
      <button className="primary" type="submit">
        Add
      </button>
    </form>
  );
}
