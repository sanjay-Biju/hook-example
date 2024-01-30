import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Haii");

  let onChangeD = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChangeD} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
