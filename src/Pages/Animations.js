import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Animations()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-300 ">
                    <div className="text-4xl flex p-3">Animation Utilities</div>
                    <div className="flex prr p-3">
                        Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
                        The custom utilities below were created to extend this theme past the <br></br>
                        default utility classes built into Bootstrap's framework.
                       
                    </div>
                </div> 
                <div className="divider"></div> 
                <div className="grid hgh bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid h-80 flex-grow  ">
                            <div className="GF">Grow In Animation Utilty</div>
                            <div className="bg-base-100">
                                <div className="flex p-2 pr"> .animated--grow-in</div>
                                <div >
                                    <div className="flex p-2"> Navbar Dropdown Example:</div>
                                    <div className="dropdown dropdown-bottom border-2">
                                        <label tabIndex={0} className="btn m-1">Dropdown</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Action</a></li>
                                            <li><a>Another Action</a></li>
                                        </ul>
                                    </div>
                                    <div className="flex prr p-2">
                                        <p>
                                            Note: This utility animates the CSS transform property, meaning it will<br></br> 
                                            override any existing transforms on an element being animated! In this theme,<br></br>
                                             the grow in animation is only being used on dropdowns within the navbar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-80 flex-grow card ">
                            <div className="GF">Fade In Animation Utilty</div>
                            <div className="bg-base-100">
                                <div className="flex p-2 pr"> .animated--fade-in</div>
                                <div >
                                    <div className="flex p-2"> Navbar Dropdown Example:</div>
                                    <div className="dropdown dropdown-bottom border-2">
                                        <label tabIndex={0} className="btn m-1">Dropdown</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Action</a></li>
                                            <li><a>Another Action</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-bottom flex">
                                        <label tabIndex={0} className="btn m-1 bg-accent">Dropdown</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Action</a></li>
                                            <li><a>Another Action</a></li>
                                        </ul>
                                    </div>

                                    <div className="flex p-2">
                                        <p>
                                            Note: This utility animates the CSS transform property, meaning it will override<br></br>
                                             any existing transforms on an element being animated! In this theme, the grow in <br></br>
                                             animation is only being used on dropdowns within the navbar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}