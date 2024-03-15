import React from "react";
import { useReducer } from "react";

const initState = {
  data: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
      break;

    case "FETCH_DATA_SUCCESS":
      return { data: action.payload, loading: false };
      break;

    case "DELETED_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
        loading: false,
      };
      break;

    case "ADD_NEW_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
      break;

    default:
      break;
  }
};

const useReducer_02 = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleFetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  // ---- Handle Remove Data---
  const handleRemoveData = (id) => {
    dispatch({ type: "DELETED_DATA", payload: id });
  };

  const addData = (newData) => {
    dispatch({ type: "ADD_NEW_DATA", payload: newData });
  };

  return (
    <div>
      <button onClick={() => handleFetchData()}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      <ul>
        {state.data.map((e) => (
          <li key={e.id} style={{ listStyle: "none" }}>
            {e.title}{" "}
            <button onClick={() => handleRemoveData(e.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addData({
            id: Date.now(),
            title: e.target.title.value,
          });
        }}
      >
        <input type="text" name="title" placeholder="Add new Item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default useReducer_02;
