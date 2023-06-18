import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Cards()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-300 ">
                    <div class="grid grid-flow-col justify-stretch bg-amber-200 ">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                        <div>04</div>
                    </div>
                </div> 
                <div className="divider"></div>
                <div className="grid h-96 bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow  bg-base-300 ">
                            <div className="flex flex-col w-full border-opacity-50">
                            <div className="grid h-40  bg-secondary ">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-40  bg-accent ">
                                content
                            </div>
                        </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 flex-grow  bg-base-300 ">
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="grid h-40  bg-secondary ">
                                    content
                                </div>
                                <div className="divider"></div>
                                <div className="grid h-40  bg-accent ">
                                    content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}