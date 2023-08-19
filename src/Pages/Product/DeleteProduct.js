import React, { useState } from "react";
import { deleteProduct } from "../../Services/product"; 
import { useNavigate, useParams } from "react-router-dom";

export const DeleteProduct = () => {
    const { id } = useParams();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    const handleDeleteProduct = async () => {
        const response = await deleteProduct(id);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");

            Navigate("/");

        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <button onClick={handleDeleteProduct}>Delete Product</button>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};
