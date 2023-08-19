import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  updateProduct, getProductById } from "../../Services/product";

export const UpdateProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [imageURL, setImageURL] = useState("");
    const Navigate = useNavigate();
    useEffect(() => {
        fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
        const response = await getProductById(id);

        if (response.success) {
            const product = response.product;
            setName(product.name);
            setPrice(product.price);
            setCategory(product.category);
            setImageURL(product.imageURL)
            setSuccessMessage("");
            setErrorMessage("");
        } else {
            setErrorMessage(response.message);
        }
    };

    const handleUpdate = async () => {
        const updatedProduct = { name, price, category, imageURL };
        const response = await updateProduct(id, updatedProduct);

        if (response.success) {
            setSuccessMessage("Product updated successfully!");
            setErrorMessage("");

            Navigate("/")

        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        handleUpdate();
    }

    return (
        <div>
            <h2>Update Product</h2>
            
            <form className="forms" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="input input-bordered input-accent w-full " value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Price" className="input input-bordered input-accent w-full " value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Category" className="input input-bordered input-accent w-full " value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder="ImageURL" className="input input-bordered input-accent w-full " value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                <button className="btn btn-active btn-accent" type="submit">Update Product</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};
