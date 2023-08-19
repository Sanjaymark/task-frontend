import { API } from "./api";


//Place A Order
export async function placeOrder(productId) {
    try {
        const response = await fetch(`${API}/order/place-order/${productId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"), 
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                order: data.order,
            };
        } else {
            return {
                success: false,
                message: data.error,
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while placing the order",
        };
    }
}



//Update Order Status
export async function updateOrderStatus(orderId, newStatus) {
    try {
        const response = await fetch(`${API}/order/update-status/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"), 
            },
            body: JSON.stringify({ status: newStatus }),
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                updatedOrder: data.updatedOrder,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to update order status",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while updating the order status",
        };
    }
}



//Get All User Orders
export async function getAllOrders() {
    try {
        const response = await fetch(`${API}/order/my-orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"), 
            },
        });
        const data = await response.json();

        console.log(data);

        if (response.ok) {
            return {
                success: true,
                orders: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to fetch orders",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching orders",
        };
    }
}
