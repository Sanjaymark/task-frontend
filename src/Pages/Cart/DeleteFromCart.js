import React, { useState } from "react";
import { deleteCartItem } from "../../Services/cart"; 

export const DeleteFromCart = ({ itemId }) => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleDeleteFromCart = async () => {
        const response = await deleteCartItem(itemId);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <button onClick={handleDeleteFromCart}>Remove from Cart</button>
            {successMessage && <p className="success-msg">{successMessage}</p>}
            {errorMessage && <p className="err-msg">{errorMessage}</p>}
        </div>
    );
};
