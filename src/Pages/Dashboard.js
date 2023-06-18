import Base from "../BasePage/Base";

export default function Dashboard(){
    
    return (
        <Base>
                <div className="flex flex-col w-full ">
                            <div className="grid h-32 bg-green-100  ">
                                <div class="grid grid-flow-col justify-stretch bg-amber-200 ">
                                    <div>01</div>
                                    <div>02</div>
                                    <div>03</div>
                                    <div>04</div>
                                </div>
                            </div>  
                            <div className="grid h-full bg-sky-200  ">
                                <div className="flex w-full">
                                    <div className="grid h-20 flex-grow bg-base-300 h-full">
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="grid h-1/2 bg-secondary ">
                                                content
                                            </div>
                                            <div className="grid h-1/2 bg-green-500 ">
                                                content
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid h-20 flex-grow bg-base-300 h-full">
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="grid h-1/2 bg-secondary ">
                                                content
                                            </div>
                                            <div className="grid h-1/2 bg-green-500 ">
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