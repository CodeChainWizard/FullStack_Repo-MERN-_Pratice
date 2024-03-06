import React, { useEffect, useState } from "react";

const UseEffecr_state = () => {
  const [cliked, setClicked] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(cliked);
    return () => {
      console.log("Clean");
    };
  }, [cliked, count]);

  return (
    <div>
      <button onClick={() => setClicked("Like")}>Like</button>
      <button onClick={() => setClicked("CodeChianWizard")}>
        {" "}
        CodeChianWizard
      </button>
      <h1>{cliked}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increments</button>
    </div>
  );
};

export default UseEffecr_state;
