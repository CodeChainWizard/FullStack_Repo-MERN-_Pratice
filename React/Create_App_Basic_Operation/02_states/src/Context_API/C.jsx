import React, { useContext } from "react";
import { UserDataContext } from "./Context_API_A";

const C = () => {
  const useCon = useContext(UserDataContext);
  return (
    <div>
      <ul>
        <a href={useCon.html_url}>
          <li key={useCon.id}>{useCon.login}</li>
        </a>
      </ul>
    </div>
  );
};

export default C;
