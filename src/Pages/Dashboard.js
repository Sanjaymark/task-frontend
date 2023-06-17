import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import StudentCard from "../Components/StudentCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard({student}){
    const navigate = useNavigate()
    return (
        <Base>
        <h1 className="">Users Dashboard</h1>

        <button 
        className="rounded-full bg-accent userbutton p-3 m-5"
        onClick={()=>navigate("/student/add")}
        >
            Create User</button>
        </Base>
    )
}