import React, { createContext, useEffect, useState } from "react";
import Fetch from "./fetch.json";
import B from "./B";

const UserDataContext = createContext();
const Context_API_A = () => {
  const [data, setData] = useState(Fetch);

  console.log(data);
  return (
    <div>
      {data.map((e) => (
        <UserDataContext.Provider
          value={{ login: e.login, key: e.node_id, html_url: e.html_url }}
        >
          <B />
        </UserDataContext.Provider>
      ))}
    </div>
  );
};

export { UserDataContext };
export default Context_API_A;
