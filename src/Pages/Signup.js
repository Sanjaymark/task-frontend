import React, { useState } from "react";
import { handleSignup } from "../Services/auth";
import { useNavigate } from "react-router-dom";

export const Signup = () =>{
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const Navigate = useNavigate();

    const signupUser = async () =>{
        const payload = {name,email,password};

        handleSignup(payload).then((data)=>
        {
            if(data.error)
            {
                SetError(data.error);
                setSuccessMsg("")
            }
            else
            {
                SetError("")
                setSuccessMsg(data.message);
                
                
                setTimeout(() => 
                {
                    Navigate("/user/login");
                }, 3000);
                
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        signupUser();
    };
    return (
    <div>
        <SignupForm
            name={name}
            SetName={SetName}
            email={email}
            SetEmail={SetEmail}
            password={password}
            SetPassword={SetPassword}
            handleSubmit={handleSubmit} 
        />
        {error ? <div className="err-msg">{error}</div> : ""}
        {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
    </div>)
};

function SignupForm({name,SetName,email, SetEmail,password, SetPassword, handleSubmit})
{
    return(
        <div>
        <div className="flex justify-center items-center h-screen m-1 bg-neutral">
    <form className="forms" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-success w-full"
            value={name}
            onChange={(e) => SetName(e.target.value)}
        />
        <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-success w-full"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-success w-full"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
        />
        <button className="btn btn-outline btn-info w-full" type="submit">
            Signup
        </button>
    </form>
</div>
</div>
    )
}