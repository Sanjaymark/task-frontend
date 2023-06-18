import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Others()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-300 ">
                    content
                </div> 
                <div className="divider"></div> 
                <div className="grid h-full bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow bg-base-300 ">
                            <div class="divide-y">
                                <div className="h-32 mt-1.5 bg-primary">01</div>
                                <div className="h-32 mt-1.5 bg-warning">02</div>
                                <div className="h-32 mt-1.5 bg-neutral">03</div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-full flex-grow bg-accent ">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}