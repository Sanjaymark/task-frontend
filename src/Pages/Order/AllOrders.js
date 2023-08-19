import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../../Services/order';
import { Navigationbar } from '../../Components/Navbar';

export function AllOrders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllOrders = async () => {
        setIsLoading(true);

        const response = await getAllOrders();
        console.log(response)

        if (response.success) {
            setOrders(response.orders); // Assuming that `response.orders` is an array
        } else {
            console.error(response.message);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (orders.length === 0) {
        return <div>No orders found</div>;
    }

    return (
        <div>
        <div>
            <Navigationbar/>
        </div>
        <div className='bg-neutral dark m-1'  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: '100vh' }}>
            <span className='text-4xl m-4'>Details of Orders</span>
            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid white', padding: '8px' }}>Order Date</th>
                        <th style={{ border: '1px solid white', padding: '8px' }}>Status</th>
                        <th style={{ border: '1px solid white', padding: '8px' }}>Product Name</th>
                        <th style={{ border: '1px solid white', padding: '8px' }}>Quantity</th>
                        <th style={{ border: '1px solid white', padding: '8px' }}>Order Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td style={{ border: '1px solid white', padding: '8px' }}>{new Date(order.orderDate).toLocaleString()}</td>
                            <td style={{ border: '1px solid white', padding: '8px' }}>{order.status}</td>
                            <td style={{ border: '1px solid white', padding: '8px' }}>
                                {order.items.map(item => (
                                    <div key={item.product._id}>
                                        <p>{item.product.name}</p>
                                    </div>
                                ))}
                            </td>
                            <td style={{ border: '1px solid white', padding: '8px' }}>
                                {order.items.map(item => (
                                    <div key={item.product._id}>
                                        <p>{item.quantity}</p>
                                    </div>
                                ))}
                            </td>
                            <td style={{ border: '1px solid white', padding: '8px' }}>
                                {order.items.map(item => (
                                    <div key={item.product._id}>
                                        <p>${item.Price}</p>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}
