import Base from "../BasePage/Base";


export default function Cards()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-300 ">
                    <div class="grid grid-flow-col justify-stretch">
                        <div className="border-4 border-indigo-200 border-l-indigo-500 " >
                            <div className="ddiv">
                                <p className="me text-xl">Earnings (Monthly)</p>
                                <br></br>
                                <p className="text-2xl font-mono">$ 40000</p>
                            </div> 
                        </div>
                        <div className="border-4 border-green-200 border-l-green-500 ">
                            <div className="ddiv">
                                <p className="ae text-xl">Earnings (Annual)</p>
                                <br></br>
                                <p className="text-2xl font-mono">$ 215000</p>
                            </div> 
                        </div>
                        <div className="border-4 border-yellow-200 border-l-yellow-500 ">
                            <div className="ddiv">
                                <p className="text-2xl task">Tasks</p>
                                <br></br>
                                <input type="range" min={0} max="100" value="40" className="range range-xs" /> 
                            </div>
                        </div>
                        <div className="border-4 border-red-200 border-l-red-500 ">
                            <div className="ddiv">
                                <p className="pr text-xl">Pending Requests</p>
                                <br></br>
                                <p className="text-2xl font-mono">18</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="divider"></div>
                <div className="grid h-full bg-base-300 cardm ">
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow  bg-base-300 ">
                            <div className="flex flex-col w-full border-opacity-50">
                            <div className="grid h-48 bg-base-100">
                                <div className="d">Default Card Example</div>
                                <p className="para">
                                    This card uses Bootstrap's default styling with no utility classes added.<br></br> 
                                    Global styles are the only things modifying the look and feel of this default card example.
                                </p>
                            </div>
        
                            <div className="grid h-64 bg-base-100 mt-8">
                                <div className="d ">Basic Card Example</div>
                                <p className="para2">
                                    The styling for this basic card example is created by using default Bootstrap<br></br>
                                    utility classes. By using utility classes, the style of the card component can be <br></br>
                                    easily modified with no need for any custom CSS!
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 flex-grow  bg-base-300 ">
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="grid h-64 bg-base-100 ">
                                    <div className="d">Dropdown Card Example</div>
                                    <p className="para2">
                                        Dropdown menus can be placed in the card header in order to extend the <br></br>
                                        functionality of a basic card. In this dropdown card example, the Font Awesome <br></br>
                                        vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
                                    </p>
                                </div>
                                
                                <div className="grid h-48 bg-base-100 mt-8 ">
                                    <div className="d">Collapsable Card Example</div>
                                    <p className="para">This is a collapsable card example using Bootstrap's built in collapse,<br></br> 
                                       functionality. Click on the card header to see the card body collapse <br></br>
                                       and expand!
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