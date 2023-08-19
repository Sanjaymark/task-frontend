import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { placeOrder } from '../../Services/order';

export function OrderDetails() {
    const { productId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        // Fetch order details using the productId
        const fetchOrderDetails = async () => {
            const response = await placeOrder(productId); // Replace with your actual API call
            if (response.success) {
                setOrderDetails(response.order);
            } else {
                console.error(response.message);
            }
        };

        fetchOrderDetails();
    }, [productId]);

    if (!orderDetails) {
        return <div>Loading order details...</div>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            <p>Order Date: {new Date(orderDetails.orderDate).toLocaleString()}</p>
            <p>Status: {orderDetails.status}</p>
            <p>Product Name: {orderDetails.items[0].product.name}</p>
            <p>Quantity: {orderDetails.items[0].quantity}</p>
            <p>Order Price: ${orderDetails.totalAmount}</p>
        </div>
    );
}
