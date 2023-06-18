import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Colors()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-24  bg-base-300 ">
                    content
                </div> 
                <div className="divider"></div> 
                <div className="grid h-full bg-base-300 ">
                    <div class="grid grid-cols-3 divide-x">
                        <div className="innerdiv ">
                            <div className="flex flex-col w-full">
                                <div className="grid h-64  bg-warning">
                                    Custom Text Color Utilities
                                </div> 
                                <div className="divider"></div> 
                                <div className="grid h-32  bg-info ">
                                    Custom Font Size Utilities
                                </div>
                            </div>
                        </div>
                        <div className="innerdiv bg-secondary">
                            Custom Background Gradient Utilities
                        </div>
                        <div className="innerdiv bg-accent">
                            Custom Grayscale Background Utilities
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}