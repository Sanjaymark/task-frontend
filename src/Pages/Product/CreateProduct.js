import React, { useState } from "react";
import { createProduct } from "../../Services/product";
import { useNavigate } from "react-router-dom";
import { Navigationbar2 } from "../../Components/Navbar";

export const CreateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    const handleCreateProduct = async () => {
        const newProduct = { name, price, category, imageURL };
        const response = await createProduct(newProduct);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
            setName("");
            setPrice("");
            setCategory("");
            setImageURL("");
            Navigate("/");
        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);

            
        }
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        handleCreateProduct();
    }

    return (
        <div>
            <Navigationbar2/>
        <div className="bg-neutral m-1 h-screen flex justify-center items-center">
            <div>
                <span className="text-4xl dark">Create Product</span>
                <form className="forms " onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="input input-bordered input-accent w-full " value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" placeholder="Price" className="input input-bordered input-accent w-full " value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" placeholder="Category" className="input input-bordered input-accent w-full " value={category} onChange={(e) => setCategory(e.target.value)} />
                    <input type="text" placeholder="ImageURL" className="input input-bordered input-accent w-full " value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                    <button className="btn btn-active btn-accent max-w-md" type="submit">Create Product</button>
                </form>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
        </div>
    );
};
