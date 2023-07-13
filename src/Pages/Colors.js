import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Colors()
{
    return(
        <Base>
            <div className="flex flex-col w-full bg-base-100">
                <div className="h-22 bg-base-300 ">
                    <h1 className="text-3xl flex">Color Utilities</h1>
                    <div className="parad">
                        <p>
                            Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
                            The custom utilities below were created to extend this theme past the default utility classes built 
                            into Bootstrap's framework.
                        </p>
                    </div>
                    
                </div> 
                <div className="divider"></div> 
                <div className="grid h-full bg-base-100 border-slate-700 ">
                    <div class="grid grid-cols-3 divide-x">
                        <div className="innerdiv ">
                            <div className="flex flex-col bg-base-100 w-full px-4 ">
                                <div className="grid">
                                    <div className="heading">Custom Text Color Utilities</div>
                                </div>
                                <div className=" bg-base-100">
                                    <div className="h-10 bg-neutral-600 dark ">.text-gray-100</div>
                                    <div className="h-10 bg-neutral-600 dark ">.text-gray-200</div>
                                    <div className="h-10 bg-neutral-600 dark ">.text-gray-300</div>
                                    <div className="h-10 bg-neutral-600 dark ">.text-gray-400</div>
                                    <div className="h-10 ss ">.text-gray-500</div>
                                    <div className="h-10 ">.text-gray-600</div>
                                    <div className="h-10 ">.text-gray-700</div>
                                    <div className="h-10 bg-base-200">.text-gray-800</div>
                                    <div className="h-10 bg-base-300 ">.text-gray-900</div>
                                </div>
                            </div>
                        </div>
                        <div className="innerdiv bg-base-100 px-4 ">
                            <div className="heading">Custom Background Gradient Utilities</div>
                            <div className="">
                                <div className="h-16 bg-primary  dark">.bg-gradient-primary</div>
                                <div className="h-16 bg-neutral-content">.bg-gradient-secondary</div>
                                <div className="h-16 bg-success  dark">.bg-gradient-success</div>
                                <div className="h-16 bg-info  dark">.bg-gradient-info</div>
                                <div className="h-16 bg-warning  dark">.bg-gradient-warning</div>
                                <div className="h-16 bg-error  dark">.bg-gradient-danger</div>
                                <div className="h-16 bg-base-100 ">.bg-gradient-light</div>
                                <div className="h-16 bg-neutral  dark">.bg-gradient-dark</div>
                            </div>
                        </div>
                        <div className="innerdiv bg-base-100 px-4 ">
                            <div className="heading">Custom Grayscale Background Utilities</div>
                            <div className="">
                                <div className="h-12 bg-neutral-200">.bg-gray-100</div>
                                <div className="h-12 bg-neutral-200">.bg-gray-200</div>
                                <div className="h-12 bg-neutral-300">.bg-gray-300</div>
                                <div className="h-12 bg-neutral-400 dark">.bg-gray-400</div>
                                <div className="h-12 bg-neutral-500 dark">.bg-gray-500</div>
                                <div className="h-12 bg-neutral-600 dark">.bg-gray-600</div>
                                <div className="h-12 bg-neutral-700 dark">.bg-gray-700</div>
                                <div className="h-12 bg-neutral-800 dark">.bg-gray-800</div>
                                <div className="h-12 bg-neutral-900 dark">.bg-gray-900</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}