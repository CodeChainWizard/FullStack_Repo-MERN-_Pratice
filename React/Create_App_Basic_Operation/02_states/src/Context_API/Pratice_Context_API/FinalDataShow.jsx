import React, { useContext } from "react";
import { userContext } from "./User_Infromation";

const FinalDataShow = () => {
  const useContex = useContext(userContext);
  return <div>{useContex.title}</div>;
};

export default FinalDataShow;
