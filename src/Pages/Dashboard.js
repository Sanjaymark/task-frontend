import React from "react";
import { Navigationbar } from "../Components/Navbar";
import { ProductsList } from "./Product/GetAllProducts";


export const Dashboard = () =>{
    return <div>
        <Navigationbar/>
        <ProductsList/>
    </div>
};