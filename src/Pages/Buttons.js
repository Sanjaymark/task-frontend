import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Buttons()
{
    return(
        <Base>
            <div className="flex w-full">
                <div className="grid h-20 flex-grow  bg-base-300 ">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-64 bg-base-300 ">
                            <p>Circle Buttons</p>
                            <div>
                                <p>Use Font Awesome Icons (included with this theme package) along with the<br></br>
                                    circle buttons as shown in the examples below!</p>
                                <div>
                                    <p className="pp">.btn-circle</p>
                                    <div className="flex">
                                        <button className="btn btn-circle btn-xs btn-outline">F</button>
                                        <button className="btn btn-circle btn-xs btn-outline"></button>
                                        <button className="btn btn-circle btn-xs btn-outline">F</button>
                                        <button className="btn btn-circle btn-xs btn-outline">F</button>
                                        <button className="btn btn-circle btn-xs btn-outline">F</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="grid h-64 bg-base-300 ">
                            Brand Buttons
                        </div>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid h-full flex-grow bg-base-300  place-items-center">
                    Split Buttons
                </div>
            </div>
        </Base>
    )
}