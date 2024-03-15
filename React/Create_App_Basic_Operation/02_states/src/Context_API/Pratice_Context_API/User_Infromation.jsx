import React, { createContext, useEffect, useState } from "react";
import Supptor_File from "./Supptor_File";

const userContext = createContext();

const User_Infromation = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function FetchUserData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res_data = await res.json();
        setUserData(res_data);
      } catch (error) {
        setError(error);
      }
    }
    FetchUserData();
  });
  return (
    <div>
      <ul>
        {userData.map((e) => (
          <userContext.Provider value={{ id: e.id, title: e.title }}>
            <Supptor_File />
          </userContext.Provider>
        ))}
      </ul>
    </div>
  );
};

export { userContext };
export default User_Infromation;
