import * as React from "react";
import { edit, trash } from "./icons";

function Composer({ handleAdd }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = formData.get("item");
    handleAdd(newItem);
    e.target.reset();
  }
  return (
    <li>
      <form onSubmit={handleSubmit}>
        <input required name="item" placeholder="Add New" />
        <button className="primary">Add</button>
      </form>
    </li>
  );
}

function ListItem({ item, handleUpdate, handleRemove }) {
  const [isEditing, setisEditing] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = formData.get("item");
    handleUpdate(newItem || item);
    setisEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="item" placeholder={item} />
          <button className="primary">Save</button>
        </form>
      ) : (
        <>
          {item}

          <div className="button-group">
            <button className="primary" onClick={() => setisEditing(true)}>
              {edit}
            </button>
            <button className="primary" onClick={handleRemove}>
              {trash}
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default function ListDemo({ list, updateAt, push, removeAt }) {
  return (
    <ul>
      <Composer handleAdd={(val) => push(val)} />
      {list.map((item, index) => {
        return (
          <ListItem
            key={index}
            item={item}
            handleUpdate={(val) => updateAt(index, val)}
            handleRemove={() => removeAt(index)}
          />
        );
      })}
    </ul>
  );
}
