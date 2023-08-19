import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigationbar = () =>{

    const Navigate = useNavigate();
    return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Inventory</a>
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-success mx-20" onClick={() => Navigate("/")}>Dashboard</button>
        </div>
        <div className="flex-none gap-2">
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1 btn-success">Products</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box ">
              <li><a><button className="btn btn-outline btn-info p-4" onClick={() => Navigate("/products/add")}>Add</button></a></li>
            </ul>
          </div>
        <button className="btn btn-success m-2" onClick={() => Navigate("/order/my-orders")}>Orders</button>
          <button className="btn btn-success m-2" onClick={() => Navigate("/cart/user/my-cart")} >Cart</button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 btn-success ">User</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-neutral rounded-box">
              <li><a><button className="btn btn-outline btn-info" onClick={() => Navigate("/user/signup")}>SignUp</button></a></li>
              <li><a><button className="btn btn-outline btn-info" onClick={() => Navigate("/user/login")}>Login</button></a></li>
            </ul>
          </div>
        </div>
      </div>
      );
}