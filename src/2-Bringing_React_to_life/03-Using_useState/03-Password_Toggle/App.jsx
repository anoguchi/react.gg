import "./App.css";
import React from "react";

function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = React.useState("");
  const [isInputValueVisible, setIsInputValueVisible] = React.useState(false);
  const thresholdMet = inputValue.length >= minimum;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thresholdMet) {
      alert("Password submitted");
    } else {
      alert("You need a longer password");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="limited-text-input">Password:</label>
          <span className={thresholdMet ? "no-error" : "error"}>
            {inputValue.length}
          </span>
        </div>
        <div>
          <input
            placeholder="Enter a password"
            type={isInputValueVisible ? "text" : "password"}
            id="limited-text-input"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="button" onClick={handleToggleVisibility}>
            {isInputValueVisible ? "🙊" : "🙈"}
          </button>
        </div>

        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default PasswordInput;
