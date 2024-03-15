import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremnets, decrements, incrementByAmount } from "./counterSlice.tsx";
import { RootState } from "../../app/Store.tsx";

export function Couter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incremnets())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={count > 0 ? () => dispatch(decrements()) : alert("Not MOre")}
        >
          Decrement
        </button>
        <br />
        <button
          aria-label="Increments value by 10"
          onClick={
            count > 0
              ? () => dispatch(incrementByAmount(10))
              : alert("Not MOre")
          }
        >
          Increments value by 10
        </button>
      </div>
    </div>
  );
}
