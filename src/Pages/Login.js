import Base from "../BasePage/Base";


export default function Login()
{
    return(
        <Base>
            <div className="flex w-full">
                <div className="grid h-full flex-grow bg-warning ">
                    Image
                </div>
                <div className="grid h-full flex-grow bg-error ">
                    Login
                </div>
            </div>
        </Base>
    )
}