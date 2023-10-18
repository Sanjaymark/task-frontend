import React, { useState, useEffect } from 'react';
import { myCart } from '../../Services/cart';
import { deleteCartItem } from '../../Services/cart';
import { placeOrder } from '../../Services/order';
import { Navigationbar2 } from '../../Components/Navbar';

export function MyCart() {
    const [cartData, setCartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orderDetails, setOrderDetails] = useState(null);

    const fetchUserCart = async () => {
        setIsLoading(true);

        const response = await myCart();

        if (response.success) {
            setCartData(response.cart);
        } else {
            console.error(response.message);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchUserCart();
    }, []);

    const handleDeleteFromCart = async (itemId) => {
        const response = await deleteCartItem(itemId);

        if (response.success) {
            fetchUserCart();
        } else {
            console.error(response.message);
        }
    };

    const handlePlaceOrder = async (productId) => {
        const response = await placeOrder(productId);

        if (response.success) {
            setOrderDetails(response.order);
        } else {
            console.error(response.message);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!cartData) {
        return <div>Cart not found</div>;
    }

    return (
        <div>
            <Navigationbar2/>
            <div className='bg-neutral m-1' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {cartData.items.map(item => (
                    <div key={item._id} style={{ flex: '0 0 calc(33.33% - 1rem)', margin: '0.5rem' }}>
                        <div className="card w-96 bg-base-100 shadow-xl mb-4">
                            <figure className="px-10 pt-10">
                                <img src={item.product.imageURL} alt={item.product.name} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.product.name}</h2>
                                <p>{/* Add your product description here */}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={() => handlePlaceOrder(item.product._id)}>
                                        Buy Now
                                    </button>
                                    <button className="btn btn-secondary" onClick={() => handleDeleteFromCart(item._id)}>Delete</button>
                                </div>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.Price}</p>
                            </div>
                        </div>
                    </div>
                    
                ))}
                
            </div>
            <span className='text-4xl bg-success h-12 dark'>Total Price: ${cartData.totalPrice}</span>

            {orderDetails && (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2>Order Details</h2>
                        <p>Order Date: {new Date(orderDetails.orderDate).toLocaleString()}</p>
                        <p>Status: {orderDetails.status}</p>
                        <p>Product Name: {orderDetails.items[0].product.name}</p>
                        <p>Quantity: {orderDetails.items[0].quantity}</p>
                        <p>Order Price: ${orderDetails.totalAmount}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
