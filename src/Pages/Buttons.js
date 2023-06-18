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
                            Circle Buttons
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