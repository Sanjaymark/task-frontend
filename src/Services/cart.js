import { API } from "./api";



//Add to Cart
export async function addToCart(productId, quantity) {
    try {

        const response = await fetch(`${API}/cart/add/${productId}`, {
            method: "POST",
            body: JSON.stringify({ quantity }),
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"), 
            },
            
        });
        const data = await response.json();


        if (response.ok) {
            return {
                success: true,
                message: data.message,
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
            message: "An error occurred while adding product to cart",
        };
    }
}


//Delete from Cart
export async function deleteCartItem(itemId) {
    try {
        const response = await fetch(`${API}/cart/delete/${itemId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"), 
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                message: data.message,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to delete item from cart",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while deleting item from cart",
        };
    }
}



//Get My Cart
export async function myCart() {
    try {
        const authToken = localStorage.getItem("token");

        if (!authToken) {
            return {
                success: false,
                message: "Authentication token missing",
            };
        }

        const response = await fetch(`${API}/cart/user/my-cart`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": authToken,
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                cart: data,
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
            message: "An error occurred while fetching user's cart",
        };
    }
}

