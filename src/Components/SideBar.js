export default function SideBar(){
    return(
    
            <div className="side-bar-styles p-7">
                <div>
                    <ul className="actions">
                        <li className="rounded-full p-2 hover:bg-sky-700">
                            <button>  Dashboard  </button>
                        </li>
                        <li className="rounded-full p-2 hover:bg-sky-700">
                            <button>  Profile  </button>
                        </li>
                        <li className="rounded-full p-2 hover:bg-sky-700">
                            <button>  Student list  </button>
                        </li>
                        <li className="rounded-full p-2 hover:bg-sky-700">
                            <button>  Interview notes  </button>
                        </li>
                    </ul>
                </div>        
                <div className="logout-btn rounded-full hover:bg-sky-700 p-2" >
                    <button> logout </button>
                </div>
            </div>
    )
}