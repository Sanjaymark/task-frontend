import { useNavigate } from "react-router-dom"

export default function SideBar()
{
    const navigate = useNavigate()
    return(
    
           <div className="side-bar-styles p-7">
            <div className=" p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 m-1 btn">
              <button onClick={()=>navigate("/")}>Dashboard</button>
            </div>
            <details className="dropdown mb-12">
              <summary className="m-1 btn">Components</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li><button onClick={()=>navigate("/buttons")} >  Buttons  </button></li>
                  <li><button onClick={()=>navigate("/cards")} >  Cards  </button></li>
                </ul>
            </details>
            <details className="dropdown  mb-24">
              <summary className="m-1 btn">Utilities</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li><button onClick={()=>navigate("/colors")}>  Colors  </button></li>
                  <li><button onClick={()=>navigate("/borders")}>  Borders  </button></li>
                  <li><button onClick={()=>navigate("/animations")}>  Animations  </button></li>
                  <li><button onClick={()=>navigate("/others")}>  Others  </button></li>
                </ul>
            </details>
            <details className="dropdown dropdown-top mb-12">
              <summary className="m-1 btn">Pages</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li><button onClick={()=>navigate("/login")}>  Register / Login  </button></li>
                  <li><button onClick={()=>navigate("/forgot")}>  Forgot Password  </button></li>
                </ul>
            </details>
        </div>
    )
}