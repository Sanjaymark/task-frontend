import { useNavigate } from "react-router-dom"

export default function SideBar(){
    const navigate = useNavigate()
    return(
    
           <div className="side-bar-styles mdiv p-7">
            <div>
              <ul className="actions">
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                    onClick={()=>navigate("/")}
                    >Dashboard</button>
                </li>
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                      onClick={()=>navigate("/student/all")}
                    >Users</button>
                </li>
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                     onClick={()=>navigate("/profile/all")}
                     >Profile</button>
                </li>
                
                </ul>
            </div>        
        </div>
    )
}