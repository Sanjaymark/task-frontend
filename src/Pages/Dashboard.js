import Base from "../BasePage/Base";

export default function Dashboard(){
    
    return (
        <Base>
                <div className="flex flex-col w-full bg-base-200 ">
                            <div className="grid h-32">
                                <div class="grid grid-flow-col justify-stretch space-x-4 ">
                                    <div className="border-4 border-indigo-200 border-l-indigo-500 " >
                                        <div className="ddiv">
                                            Monthly Earnings
                                            <p>$ 40000</p>
                                        </div> 
                                    </div>
                                    <div className="border-4 border-green-200 border-l-green-500 ">
                                        <div className="ddiv">
                                            Annual Earnings
                                            <p><h1>$ 40000</h1></p>
                                        </div> 
                                    </div>
                                    <div className="border-4 border-yellow-200 border-l-yellow-500 ">
                                        <div className="ddiv">
                                            Tasks
                                            <br></br>
                                            <input type="range" min={0} max="100" value="40" className="range range-xs" /> 
                                        </div>
                                    </div>
                                    <div className="border-4 border-red-200 border-l-red-500 ">
                                        <div className="ddiv">
                                            Pending Requests
                                            <p>18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <div className="grid h-full bg-sky-200  ">
                                <div className="flex w-full">
                                    <div className="grid h-20 flex-grow bg-base-300 h-full">
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="grid h-1/2 bg-secondary ">
                                                <div className="projectsdiv">
                                                    <div>Projects</div>
                                                    <div>
                                                        <ul>
                                                            <li>
                                                                Server Migration
                                                                <input type="range" min={0} max="100" value="20" className="range range-xs" />
                                                            </li>
                                                            <li>
                                                                Sales Tracking
                                                                <input type="range" min={0} max="100" value="40" className="range range-xs" />
                                                            </li>
                                                            <li>
                                                                Customer Database
                                                                <input type="range" min={0} max="100" value="60" className="range range-xs" />
                                                            </li>
                                                            <li>
                                                                Payout Details
                                                                <input type="range" min={0} max="100" value="80" className="range range-xs" />
                                                            </li>
                                                            <li>
                                                                Account Setup
                                                                <input type="range" min={0} max="100" value="100" className="range range-xs" />
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid h-1/2 bg-green-500 ">
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid h-20 flex-grow bg-base-300 h-full">
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="grid h-1/2 bg-secondary ">
                                                Illustrations
                                            </div>
                                            <div className="grid h-1/2 bg-green-500 ">
                                                Development Approach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </Base>
    )
}