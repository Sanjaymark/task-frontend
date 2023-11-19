import React, { useState } from "react";
import { addToCart } from "../../Services/cart";
import { useNavigate, useParams } from "react-router-dom";
import {  Navigationbar2 } from "../../Components/Navbar";


export const AddToCart = () => {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    const handleAddToCart = async () => {
        
        const response = await addToCart(productId, quantity);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
           
            setTimeout(() =>{
                Navigate("/cart/user/my-cart")
            }, 3000)

        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }


    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        handleAddToCart();
    };

    return (
        <div>
            <Navigationbar2/>
        <div className="flex justify-center items-center h-screen bg-neutral m-1">
    <div>
        <h2 className="text-center dark text-3xl">Add to Cart</h2>
        <form className="forms" onSubmit={handleSubmit}>
            
            <input
                type="number"
                placeholder="Quantity"
                min={1}
                className="input input-bordered input-accent w-full"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button className="btn btn-outline bg-neutral btn-info w-full" type="submit">
                Add to Cart
            </button>

            <p className="dark text-2xl text-center">Select the Quantity of Product to Add to Your Cart</p>
        </form>
        {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="err-msg">{errorMessage}</p>}
    </div>
</div>
</div>
    );
};
