import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { placeOrder } from '../../Services/order'; // Assuming you have the placeOrder function

export function PlaceOrder() {
    const { cartId } = useParams();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

    const handlePlaceOrder = async () => {
        const response = await placeOrder(cartId);

        if (response.success) {
            setOrderSuccess(true);
            setOrderDetails(response.order); // Set the order details in state
        } else {
            setErrorMessage(response.message);
        }
    };

    useEffect(() => {
        if (orderSuccess && orderDetails) {
            
        }
    }, [orderSuccess, orderDetails]);

    return (
        <div>
            <h2>Place Order</h2>
            <button onClick={handlePlaceOrder}>Place Order</button>
            {orderSuccess && (
                <div>
                    <p>Order placed successfully!</p>
                    {/* Display order details here */}
                    {orderDetails && (
                        <div>
                            <p>Order Date: {new Date(orderDetails.orderDate).toLocaleString()}</p>
                            <p>Status: {orderDetails.status}</p>
                            <p>Product Name: {orderDetails.items[0].product.name}</p>
                            <p>Quantity: {orderDetails.items[0].quantity}</p>
                            <p>Order Price: ${orderDetails.totalAmount}</p>
                        </div>
                    )}
                </div>
            )}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}
