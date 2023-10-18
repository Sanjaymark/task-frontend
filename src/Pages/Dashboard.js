import React from "react";
import { Navigationbar, Navigationbar2 } from "../Components/Navbar";
import { ProductsList } from "./Product/GetAllProducts";

export const Dashboard = () => {
  // Check if a token is present in localStorage
  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? <Navigationbar2 /> : <Navigationbar />}
      <ProductsList />
    </div>
  );
};
