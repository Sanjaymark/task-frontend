import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Borders()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-300 ">
                    Border Utilities
                </div> 
                <div className="divider"></div> 
                <div className="grid h-full bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow  bg-base-300 ">
                            <div class="divide-y ">
                                <div className="bidiv">01</div>
                                <div className="bidiv">02</div>
                                <div className="bidiv">03</div>
                                <div className="bidiv">04</div>
                                <div className="bidiv">05</div>
                                <div className="bidiv">06</div>
                                <div className="bidiv">07</div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 flex-grow  bg-base-300 ">
                        <div class="divide-y ">
                                <div className="bidiv">01</div>
                                <div className="bidiv">02</div>
                                <div className="bidiv">03</div>
                                <div className="bidiv">04</div>
                                <div className="bidiv">05</div>
                                <div className="bidiv">06</div>
                                <div className="bidiv">07</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}