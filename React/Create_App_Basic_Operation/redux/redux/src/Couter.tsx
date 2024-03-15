import React, { useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);

  const handleAddBtn = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Not More");
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleAddBtn()}>Add</button>
      <br />
      <br />
      <button onClick={() => handleSubstract()}>Substract</button>
    </div>
  );
};

export default Couter;
