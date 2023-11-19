import React, { useState } from "react";
import { handleLogin } from "../Services/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const Navigate = useNavigate();

    const loginUser = async () => {
        const payload = { name, email, password };

        handleLogin(payload).then((data) => {
            if (data.error) {
                setSuccessMsg(""); // Clear success message
                SetError(data.error);
            } else {
                SetError(""); // Clear error message
                setSuccessMsg(data.message);
                localStorage.setItem("token", data.token);
                
                setTimeout(() => 
                {
                    Navigate("/");
                }, 3000);
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        loginUser();
    };

    return (
        <div className="h-screen">
            <LoginForm
                name={name}
                SetName={SetName}
                email={email}
                SetEmail={SetEmail}
                password={password}
                SetPassword={SetPassword}
                handleSubmit={handleSubmit} // Pass the handleSubmit function to the form
                error={error}
                successMsg={successMsg}
            />
        </div>
    );
};

function LoginForm({ name, SetName, email, SetEmail, password, SetPassword, handleSubmit,error,successMsg }) {
    return (
        <div className="flex justify-center items-center h-full bg-neutral m-1">
    <div className="w-full max-w-md">
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
            <button className="btn-outline btn-info btn w-full" type="submit">
                Login
            </button>
        </form>
                {error && <div className="dark">{error}</div>}
                {successMsg && <div className="dark">{successMsg}</div>}
    </div>
</div>
    );
}
