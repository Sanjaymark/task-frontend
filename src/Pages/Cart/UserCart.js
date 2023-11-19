import React, { useState, useEffect } from 'react';
import { myCart } from '../../Services/cart';
import { deleteCartItem } from '../../Services/cart';
import { placeOrder } from '../../Services/order';
import { Navigationbar2 } from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';

export function MyCart() {
    const [cartData, setCartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orderDetails, setOrderDetails] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const Navigate = useNavigate();

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
            setSuccessMessage("Order placed successfully!");

            // Redirect to "order/my-orders" after 4 seconds
            setTimeout(() => {
                Navigate('/order/my-orders');
            }, 4000);
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
            <Navigationbar2 />
            <div className="bg-neutral h-screen items-center ">
                <div className='bg-neutral  m-1' style={{ display: 'flex', flexWrap: 'wrap',  }}>
                    {cartData.items.map(item => (
                        <div key={item._id} >
                            <div className="card bg-neutral border-2 border-info dark shadow-xl w-80 m-2">
                                <figure className="h-1/3">
                                    <img src={item.product.imageURL} alt={item.product.name} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.product.name}</h2>
                                    <p>{/* Add your product description here */}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => handlePlaceOrder(item._id)}>
                                            Buy Now
                                        </button>
                                        <button className="btn btn-secondary" onClick={() => handleDeleteFromCart(item._id)}>Delete</button>
                                    </div>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: Rs.{item.Price}/-</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <span className='text-4xl border-2 border-info h-12 dark'>Total cart Price: Rs.{cartData.totalPrice}/-</span>
                <br></br>

                {successMessage && (
                    <div className="success-msg">{successMessage}</div>
                )}

            </div>
        </div>
    );
}
