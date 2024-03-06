import React, { useState } from "react";
import datas from "../datas.json";

const Data = () => {
  const [ndata, setnData] = useState(datas);

  const handleClear = () => {
    setnData([]);
  };

  const removeOneHandle = (id) => {
    setnData(ndata.filter((e) => e.id !== id));
  };

  const updateOneHandle = (id) => {
    setnData(
      ndata.map((item) => {
        if (item.id === id) {
          return { name: "Update" };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {ndata.map((e) => (
          <li
            key={e.id + 1}
            style={{
              listStyle: "none",
              border: "1px solid black",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {e.name}
            <br />
            <button onClick={() => removeOneHandle(e.id)}>Remove</button>
            <button onClick={() => updateOneHandle(e.id)}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleClear()}>Clear</button>
    </div>
  );
};

export default Data;
