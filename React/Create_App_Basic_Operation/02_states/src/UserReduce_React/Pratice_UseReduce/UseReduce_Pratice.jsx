import React, { useEffect, useReducer, useState } from "react";

const initValue = {
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

    case "FETCH_DATA_REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id != action.payload),
      };
      break;

    case "FETCH_DATA_NEW_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
      break;
    default:
      return { ...state };
  }
};

const UseReduce_Pratice = () => {
  const [state, dispatch] = useReducer(reducer, initValue);

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    async function FecthUserProfile() {
      dispatch({ type: "FETCH_DATA_START" });
      try {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    FecthUserProfile();
  }, []);

  const handleRemoveProfile = (id) => {
    dispatch({ type: "FETCH_DATA_REMOVE", payload: id });
  };

  const handleAddData = (name, url) => {
    dispatch({ type: "FETCH_DATA_NEW_DATA", payload: { name, url } });
  };

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      <ul>
        {state.data.map((e) => (
          <>
            <a href={e.html_url}>
              <li style={{ listStyle: "none" }}>{e.login}</li>{" "}
            </a>
            <button onClick={() => handleRemoveProfile(e.id)}>Remove</button>
          </>
        ))}
      </ul>
      <form action="" onSubmit={((e) => e.preventDefault(), handleAddData({}))}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          name="url"
          placeholder="Enter Html_Url"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button type="submit" onClick={(e) => handleAddData(e.preventDefault)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default UseReduce_Pratice;
