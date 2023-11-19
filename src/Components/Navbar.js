import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigationbar = () =>{

    const Navigate = useNavigate();
    return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Inventory</a>
          <button className="btn btn-xs sm:btn-sm md:btn-md btn btn-outline btn-info mx-20" onClick={() => Navigate("/")}>Dashboard</button>
        </div>
        <div className="flex-none gap-2">
        <button className="btn btn-outline btn-info m-2" onClick={() => Navigate("/order/my-orders")}>Orders</button>
          <button className="btn btn-outline  btn-info m-2" onClick={() => Navigate("/cart/user/my-cart")} >Cart</button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 btn-outline btn-info ">User</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-neutral rounded-box">
              <li><a><button className="btn btn-outline btn-info" onClick={() => Navigate("/user/signup")}>SignUp</button></a></li>
              <li><a><button className="btn btn-outline btn-info" onClick={() => Navigate("/user/login")}>Login</button></a></li>
            </ul>
          </div>
        </div>
      </div>
      );
}


export const Navigationbar2 = () =>{

  const Navigate = useNavigate();
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Inventory</a>
        <button className="btn btn-xs sm:btn-sm md:btn-md btn btn-outline btn-info mx-20" onClick={() => Navigate("/")}>Dashboard</button>
      </div>
      <div className="flex-none gap-2">
      <button className="btn btn-outline btn-info m-2" onClick={() => Navigate("/order/my-orders")}>Orders</button>
        <button className="btn btn-outline btn-info m-2" onClick={() => Navigate("/cart/user/my-cart")} >Cart</button>
      </div>
    </div>
    );
}