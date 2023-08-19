import React, { useState } from "react";
import { getProductsByCategory } from "../../Services/product"; 

export const ProductsByCategory = () => {
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchProductsByCategory = async () => {
        if (category) {
            const response = await getProductsByCategory(category);

            if (response.success) {
                setProducts(response.products);
                setErrorMessage("");
            } else {
                setProducts([]);
                setErrorMessage(response.message);
            }
        }
    };

    return (
        <div>
            <h2>Products by Category</h2>
            <input
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button onClick={fetchProductsByCategory}>Fetch Products</button>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>{errorMessage || "No products available for this category"}</p>
            )}
        </div>
    );
};
