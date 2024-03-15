import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "../../hooks/User.jsx";
import { useEffect } from "react";
import { getHomePage } from "../../store/reducers/GetHomePage";

export const Home = () => {
  const dispatch = useAppDispatch();
  const viedo = useAppSelector((state) => state.videoBar.viedos);

  useEffect(() => {
    dispatch(getHomePage(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};
