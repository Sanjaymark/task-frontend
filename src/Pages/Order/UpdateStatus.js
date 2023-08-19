import React, { useState } from "react";
import { updateOrderStatus } from "../../Services/order"; 



export const UpdateOrderStatus = ({ orderId }) => {
    const [newStatus, setNewStatus] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUpdateStatus = async () => {
        const response = await updateOrderStatus(orderId, newStatus);

        if (response.success) {
            setSuccessMessage("Order status updated successfully!");
            setErrorMessage("");
        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="New Status"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
            />
            <button onClick={handleUpdateStatus}>Update Status</button>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};
