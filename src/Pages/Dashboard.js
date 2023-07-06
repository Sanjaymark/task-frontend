import Base from "../BasePage/Base";

export default function Dashboard(){
    
    return (
        <Base>
                <div className="flex flex-col w-full bg-base-200 ">
                            <div className="grid h-32">
                                <div class="grid grid-flow-col justify-stretch space-x-4 ">
                                    <div className="border-4 border-indigo-200 border-l-indigo-500 " >
                                        <div className="ddiv">
                                            <p className="me">Earnings (Monthly)</p>
                                            <p className="text-2xl font-mono">$ 40000</p>
                                        </div> 
                                    </div>
                                    <div className="border-4 border-green-200 border-l-green-500 ">
                                        <div className="ddiv">
                                            <p className="ae">Earnings (Annual)</p>
                                            <p className="text-2xl font-mono">$ 215000</p>
                                        </div> 
                                    </div>
                                    <div className="border-4 border-yellow-200 border-l-yellow-500 ">
                                        <div className="ddiv">
                                            <p className="text-lg task">Tasks</p>
                                            
                                            <input type="range" min={0} max="100" value="40" className="range range-xs" /> 
                                        </div>
                                    </div>
                                    <div className="border-4 border-red-200 border-l-red-500 ">
                                        <div className="ddiv">
                                            <p className="pr">Pending Requests</p>
                                            <p className="text-2xl font-mono">18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <div className="grid h-full bg-sky-200  ">
                                <div className="flex w-full">
                                    <div className="grid h-20 flex-grow bg-base-300 h-full">
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="grid h-1/2">
                                                <div className="projectsdiv m-5">
                                                    <div className="pid">Projects</div>
                                                    <br></br>
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
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" h-1/2 w-full ">
                                                <div className="flex flex-wrap colorsdiv">
                                                    <div className="scard text-xl font-mono bg-primary">
                                                        <h1>Primary</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-success">
                                                        <h1>success</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-info">
                                                        <h1>Info</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-warning">
                                                        <h1>Warning</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-red-600">
                                                        <h1>Danger</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-secondary">
                                                        <h1>secondary</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-base-100">
                                                        <h1>Light</h1>
                                                    </div>
                                                    <div className="scard text-xl font-mono bg-neutral">
                                                        <h1>Dark</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid h-20 flex-grow bg-base-300 h-full">
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="grid h-1/2 bg-base-100 m-5">
                                                <div className="pid">Illustrations</div>
                                                <img className="imageI w-full" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"></img>
                                                <p>
                                                    Add some quality, svg illustrations to your project courtesy of unDraw,<br></br>
                                                    a constantly updated collection of beautiful svg images that you can use <br></br>
                                                    completely free and without attribution!
                                                 </p>
                                            </div>
                                            <div className="grid h-1/2 m-5 bg-base-100">
                                                <div className="pid">Development Approach</div>
                                                <p>
                                                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to<br></br> 
                                                reduce CSS bloat and poor page performance. Custom CSS classes are used to <br></br>
                                                create custom components and custom utility classes.
                                                </p>
                                                <br></br>
                                                <p>
                                                Before working with this theme, you should become familiar with the<br></br>
                                                 Bootstrap framework, especially the utility classes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </Base>
    )
}