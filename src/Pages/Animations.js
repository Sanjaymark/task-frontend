import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Animations()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-300 ">
                    Animation Utilities
                </div> 
                <div className="divider"></div> 
                <div className="grid h-full bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid h-80 flex-grow  bg-primary ">
                            content
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-80 flex-grow card bg-secondary">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}