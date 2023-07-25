import Base from "../BasePage/Base";


export default function Buttons()
{
    return(
        <Base>
            <div className="flex flex-col w-full btn-div lg:flex-row">
                <div className="grid flex-grow h-full w-48 rounded-box ">
                    <div className="flex flex-col w-full bg-base-300">
                        <div className="grid h-80 rounded-box bg-base-100">
                            <div className="flex text-2xl bg-base-200 h-12 p-2">Circle Buttons</div>
                            <span className="flex">
                                Use Font Awesome Icons (included with this theme package) along with the <br></br>
                                circle buttons as shown in the examples below!
                            </span>
                            <div>
                                <div>
                                    <span className="flex">.btn-circle</span>
                                </div>
                                <div className="flex">
                                    <button className="btn btn-circle btn-outline btn-sm m-1">
                                        <img src="https://img.icons8.com/?size=1x&id=7SyEUiVpRjrt&format=png" className="h-7 w-7"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-sm m-1 bg-neutral">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.7c_mMpjqwdlTr_uf2Y01TQHaHa&pid=Api&P=0&h=180" className="h-5 w-5"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-sm m-1">
                                        <img src="https://img.icons8.com/?size=1x&id=80585&format=png" className="h-7 w-7"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-sm m-1 bg-warning">
                                        <img src="https://img.icons8.com/?size=1x&id=EggHJUeUuU6C&format=png" className="h-6 w-6"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-sm m-1">
                                        <img src="https://img.icons8.com/?size=1x&id=5IZaXQn5qF1X&format=png" className="h-7 w-7"></img>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="flex">.btn-circle</span>
                                </div>
                                <div className="flex">
                                    <button className="btn btn-circle btn-outline btn-xs m-1 ">
                                        <img src="https://img.icons8.com/?size=1x&id=7SyEUiVpRjrt&format=png" className="h-5 w-5"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-xs m-1 bg-neutral">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.7c_mMpjqwdlTr_uf2Y01TQHaHa&pid=Api&P=0&h=180" className="h-3 w-3"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-xs m-1">
                                        <img src="https://img.icons8.com/?size=1x&id=80585&format=png" className="h-5 w-5"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-xs m-1 bg-warning">
                                        <img src="https://img.icons8.com/?size=1x&id=EggHJUeUuU6C&format=png" className="h-4 w-4"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-xs m-1">
                                        <img src="https://img.icons8.com/?size=1x&id=5IZaXQn5qF1X&format=png" className="h-5 w-5"></img>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="flex">.btn-circle</span>
                                </div>
                                <div className="flex">
                                    <button className="btn btn-circle btn-outline btn-md m-1 ">
                                        <img src="https://img.icons8.com/?size=1x&id=7SyEUiVpRjrt&format=png" className="h-11 w-11"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-md m-1 bg-neutral">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.7c_mMpjqwdlTr_uf2Y01TQHaHa&pid=Api&P=0&h=180" className="h-8 w-8"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-md m-1 ">
                                        <img src="https://img.icons8.com/?size=1x&id=80585&format=png" className="h-11 w-11"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-md m-1 bg-warning">
                                        <img src="https://img.icons8.com/?size=1x&id=EggHJUeUuU6C&format=png" className="h-9 w-9"></img>
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-md m-1">
                                        <img src="https://img.icons8.com/?size=1x&id=5IZaXQn5qF1X&format=png" className="h-11 w-11"></img>
                                    </button>
                                </div>
                            </div>
                        </div> 
                        <div className="divider"></div> 
                        <div className="grid h-80 bg-base-100 rounded-box ">
                           <div className="flex bg-base-200 p-2 h-12 text-2xl mb-4">Brand Buttons</div>
                           <div>
                                <span className="flex">
                                    Google and Facebook buttons are available featuring each company's<br></br> respective brand color.
                                    They are used on the user login and registration pages.
                                </span>
                                <br></br>
                                <span className="flex">
                                You can create more custom buttons by adding a new color variable in the<br></br>
                                 _variables.scss file and then using the Bootstrap button variant mixin to create <br></br>
                                  a new style, as demonstrated in the _buttons.scss file.
                                </span>
                           </div>
                           <button className="g-btn p-2 m-3">.btn-google</button>
                           
                           <button className="bg-primary dark p-2 m-3">.btn-facebook</button>
                        </div>
                    </div>
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-full w-48 rounded-box ">
                    <div className="flex text-2xl bg-base-200 h-12 p-2">Split Buttons with Icon</div>
                    <div className="bg-base-100">
                        <span className="flex p-2 m-1">
                            Works with any button colors, just use the .btn-icon-split class and the markup <br></br>
                            in the examples below. The examples below also use the .text-white-50 <br></br>
                            helper class on the icons for additional styling, but it is not required.
                        </span>
                        <div>
                            <button className="btn btn-wide flex m-1 w-80 bg-primary dark">Split Button Primary</button>
                            <button className="btn btn-wide flex m-1 w-80 bg-green-500 dark">Split Button Success</button>
                            <button className="btn btn-wide flex m-1 w-80 bg-info dark">Split Button Info</button>
                            <button className="btn btn-wide flex m-1 w-80 bg-warning dark">Split Button warning</button>
                            <button className="btn btn-wide flex m-1 w-80 bg-error dark">Split Button Danger</button>
                            <button className="btn btn-wide flex m-1 w-80 bg-accent dark">Split Button Secondary</button>
                            <button className="btn btn-wide flex m-1 w-80">Split Button Light</button>
                        </div>
                        <span className="flex p-2 m-2 text-xl">
                            Also works with small and large button classes!
                        </span>
                        <div className="flex p-3 m-2">
                            <button className="btn btn-sm w-52 bg-accent-focus dark">Split Button Small</button>
                        </div>
                        <div className="flex p-2 m-2 ">
                        <button className="btn btn-wide w-80 bg-accent-focus dark">Split Button large</button>
                        </div> 
                    </div>
                </div>
            </div>
        </Base>
    )
}