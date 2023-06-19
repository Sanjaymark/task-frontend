import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

export default function Base({children}){
    return (
        <div className="flex w-full">
            <div className="grid flex-grow  bg-green-400 w-1/5 h-screen place-items-center">
                <SideBar/>
            </div>
  
            <div className="grid flex-grow card w-4/5 h-screen ">
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid  h-16 bg-base-300 ">
                        <TopBar/>
                    </div>
                    
                    <div className="grid h-5/6 bg-base-300 h-full">
                        {children} 
                    </div>
                    <br></br>
                    copyright@Sanjay
                </div>
            </div>
        </div>
            
    )
}