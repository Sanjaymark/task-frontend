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
              <summary className="m-1 btn bg-base-100">Components</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 ">
                  <li><button onClick={()=>navigate("/buttons")} >  Buttons  </button></li>
                  <li><button onClick={()=>navigate("/cards")} >  Cards  </button></li>
                </ul>
            </details>
            <details className="dropdown  mb-24">
              <summary className="m-1 btn bg-base-100">Utilities</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li><button onClick={()=>navigate("/colors")}>  Colors  </button></li>
                  <li><button onClick={()=>navigate("/borders")}>  Borders  </button></li>
                  <li><button onClick={()=>navigate("/animations")}>  Animations  </button></li>
                  <li><button onClick={()=>navigate("/others")}>  Others  </button></li>
                </ul>
            </details>
            <details className="dropdown dropdown-top mb-12">
              <summary className="m-1 btn bg-base-100">Pages</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li> <a href="https://www.facebook.com/" target="_blank"> Register / Login  </a></li>
                  <li><a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" target="_blank">  Forgot Password  </a></li>
                </ul>
            </details>
        </div>
    )
}