import Base from "../BasePage/Base";


export default function Others()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-100 ">
                    <div className="flex p-3 text-4xl h-16">Other Utilities</div>
                    <div className="flex p-3 prr">
                        <p>
                            Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
                            The custom utilities below were created to extend this theme past the<br></br>
                            default utility classes built into Bootstrap's framework.
                        </p>
                    </div>
                </div> 
                <div className="divider"></div> 
                <div className="grid h-full bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid flex-grow bg-base-300 hhh ">
                            <div class="divide-y">
                                <div className="h-32 mt-1.5 bg-base-100 ">
                                    <div className="GF ">Overflow Hidden Utilty</div>
                                    <p className="p-5">Use <span className="pr">.o-hidden </span>to set the overflow property of any element to hidden.</p>
                                </div>
                                <div className="h-48 mt-1.5 bg-base-100">
                                    <div className="GF">Progress Small Utility</div>
                                    <div>
                                        <div> Normal Progress Bar</div>
                                        <div className=" ">    
                                            <progress className="progress progress-info h-4 w-56" value={80} max="100"></progress>
                                        </div>
                                        <div>Small Progress Bar</div>
                                        <div className=" ">
                                            <progress className="progress progress-info w-56" value={80} max="100"></progress>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-40 mt-1.5 bg-base-100">
                                    <div className="GF">Dropdown - No Arrow</div>
                                    <div className="dropdown dropdown-bottom bg-accent border-2">
                                        <label tabIndex={0} className="btn m-1">Dropdown</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><button>Action</button></li>
                                            <li><button>Another Action</button></li>
                                        </ul>
                                    </div>
                                    <div>
                                        Add the <span className="pr">.no-arrow </span>class alongside the <span className="pr">.dropdown</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-full flex-grow ">
                            <div className="GF">Rotation Utilities</div>
                            <div className="bg-base-100 h-80">
                                <div className="h-36"></div>
                                <div className="divider"></div>
                                <div className="h-36"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}