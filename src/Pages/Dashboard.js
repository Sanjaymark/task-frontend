import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import StudentCard from "../Components/StudentCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard({student}){
    const navigate = useNavigate()
    return (
        <Base>
        <h1 className="">Welcome to Student App</h1>

        <button 
        className="rounded-full bg-base-200 p-3 m-5"
        onClick={()=>navigate("/student/add")}
        >
            Add More Students</button>
        </Base>
    )
}