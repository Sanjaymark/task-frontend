import React, { useState, useEffect } from "react";
import { getProductById, deleteProduct } from "../../Services/product";
import { useNavigate, useParams } from "react-router-dom";
import {  Navigationbar2 } from "../../Components/Navbar";

export const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
        const response = await getProductById(id);

        if (response.success) {
            setProduct(response.product);
            setErrorMessage("");
        } else {
            setProduct(null);
            setErrorMessage(response.message);
        }
    };

    const handleDeleteProduct = async () => {
        const response = await deleteProduct(id);

        if (response.success) {
            navigate("/");
        } else {
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <Navigationbar2/>
        <div className="bg-neutral m-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {product ? (
                <div className="card w-96 bg-neutral border-2 border-success dark shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={product.imageURL} alt={product.name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center  text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => navigate(`/products/edit/${id}`)}>Edit</button>
                            <button className="btn btn-secondary" onClick={handleDeleteProduct}>Delete</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
    );
};
