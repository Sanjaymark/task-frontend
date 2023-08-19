import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../Services/product";
import { Link, useNavigate } from "react-router-dom";

export const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await getAllProducts();

        if (response.success) {
            setProducts(response.products);
            setErrorMessage("");
        } else {
            setProducts([]);
            setErrorMessage(response.message);
        }
    };

    return (
        <div className="bg-neutral m-1">
            <span className="text-4xl dark">Products</span>
            <div className="card-container">
                {products.length > 0 ? (
                    <div className="flex flex-wrap justify-center">
                        {products.map(product => (
                            <div key={product._id} className="card w-96 bg-success dark shadow-xl m-4">
                                <figure className="px-10 pt-10">
                                    <img src={product.imageURL} alt={product.name} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>Category: {product.category}</p>
                                    <p>Price: ${product.price}</p>
                                    <div className="card-actions flex justify-between p-4">
                                    <Link to={`/products/${product._id}`} className="btn btn-primary">View</Link>
                                        <button className="btn btn-secondary" onClick={() => Navigate(`/cart/add/${product._id}`)}>Buy</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<p>{errorMessage}</p>
                )}
            </div>
        </div>
    );
};
