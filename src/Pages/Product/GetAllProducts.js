import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../Services/product";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="flex justify-center mb-4">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleSearch}
            />
        </div>
    );
};

export const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [sortBy, setSortBy] = useState("price"); // Default sorting by price
    const Navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await getAllProducts();

        if (response.success) {
            setProducts(response.products);
            setFilteredProducts(response.products); // Initially, display all products
            setErrorMessage("");
        } else {
            setProducts([]);
            setErrorMessage(response.message);
        }
    };

    const sortAndFilterProducts = (key, searchTerm) => {
        let filtered = products;

        // Apply search
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply sorting
        const sortedProducts = [...filtered].sort((a, b) => {
            if (key === "priceHighToLow") {
                return b.price - a.price; // Sort high to low
            } else if (key === "priceLowToHigh") {
                return a.price - b.price; // Sort low to high
            }
            // Add more cases for other keys if needed

            return 0; // Default case
        });

        setFilteredProducts(sortedProducts);
    };

    return (
        <div className="bg-neutral min-h-screen border-4 border-info">
            <div className="card-container">
                <Search onSearch={(searchTerm) => sortAndFilterProducts(sortBy, searchTerm)} />
                <div className="flex justify-center mb-4">
                    <label></label>
                    <select onChange={(e) => { setSortBy(e.target.value); sortAndFilterProducts(e.target.value); }}>
                        <option value="price">Sort</option>
                        <option value="priceHighToLow">Price High to Low</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                    </select>
                </div>
                {filteredProducts.length > 0 ? (
                    <div className="flex flex-wrap justify-center">
                        {filteredProducts.map(product => (
                            <div key={product._id} className="card card-side bg-neutral border-2 border-info dark w-full sm:w-1/3 shadow-xl m-4">
                                <figure className="w-full sm:w-1/2 h-full">
                                    <img src={product.imageURL} alt={product.name} className="rounded-xl" />
                                </figure>
                                <div className="card-body">
                                    <h1 className="card-title">{product.name}</h1>
                                    <h2>Category: {product.category}</h2>
                                    <h2>Price: Rs.{product.price}/-</h2>
                                    <div className="card-actions justify-center mt-6">
                                        <button className="btn-md btn-secondary" onClick={() => Navigate(`/cart/add/${product._id}`)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>{errorMessage}</p>
                )}
            </div>
        </div>
    );
};
