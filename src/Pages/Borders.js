
import Base from "../BasePage/Base";


export default function Borders()
{
    return(
        <Base>
            <div className="flex flex-col w-full">
                <div className="grid h-32 bg-base-100 ">
                    <div className="flex text-2xl">Border Utilities</div>
                    <span className="bp">
                        Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
                        The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's 
                        framework.
                    </span>
                </div> 
                 
                <div className="grid h-full bg-base-300 ">
                    <div className="flex w-full">
                        <div className="grid h-full flex-grow  bg-base-300 ">
                            <div class="divide-y ">
                                <div className="bidiv border-l-8 border-primary ">border-left-primary</div>
                                <div className="bidiv border-l-8 border-secondary">border-left-secondary</div>
                                <div className="bidiv border-l-8 border-green-500">border-left-success</div>
                                <div className="bidiv border-l-8 border-info">border-left-info</div>
                                <div className="bidiv border-l-8 border-warning">border-left-warning</div>
                                <div className="bidiv border-l-8 border-error">border-left-danger</div>
                                <div className="bidiv border-l-8 border-neutral">border-left-dark</div>
                            </div>
                        </div>
                        
                        <div className="grid h-full flex-grow  bg-base-300 ">
                        <div class="divide-y ">
                                <div className="bidiv border-r-8 border-primary">border-right-primary</div>
                                <div className="bidiv border-r-8 border-secondary">border-right-secondary</div>
                                <div className="bidiv border-r-8 border-green-500">border-right-success</div>
                                <div className="bidiv border-r-8 border-info">border-right-info</div>
                                <div className="bidiv border-r-8 border-warning">border-right-warning</div>
                                <div className="bidiv border-r-8 border-error">border-right-danger</div>
                                <div className="bidiv border-r-8 border-neutral">border-right-dark</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}