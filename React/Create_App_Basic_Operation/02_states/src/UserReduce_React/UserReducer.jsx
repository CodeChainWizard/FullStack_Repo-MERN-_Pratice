import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "incre") {
    return { count: state.count + 1 };
  }
  if (action.type === "decre") {
    if (state.count == 0) {
      throw new Error("No More Reduce");
    } else {
      return { count: state.count - 1 };
    }
  }
};

const UserReducer = () => {
  // --- > Syntax for useReducer
  //   useReducer(reducer, initState);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // reducer function, it is pure Function

  // ------------
  const halndeAdd = () => {
    dispatch({ type: "incre" });
  };
  const halndeRemove = () => {
    dispatch({ type: "decre" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => halndeAdd()}>Add</button>
      <button onClick={() => halndeRemove()}>Remove</button>
    </div>
  );
};

export default UserReducer;
