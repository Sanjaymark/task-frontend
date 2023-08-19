import { API } from "./api";


//create a Product
export const createProduct = async (productData) => {
    try 
    {
        const response = await fetch(`${API}/products/add`, 
        {
            method: "POST",
            body: JSON.stringify(productData),
            headers: {
                "Content-Type": "application/json",
                "x-auth-token":localStorage.getItem("token"),
            },
           
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, message: data.message };
        } else {
            return { success: false, message: data.error };
        }
    } 
    catch (error) 
    {
        console.error("Error creating product:", error);
        return { success: false, message: "An error occurred while creating the product" };
    }
};


//Delete Product
export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${API}/products/delete/${productId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token":localStorage.getItem("token"),
            },
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, message: data.message };
        } else {
            return { success: false, message: data.error };
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        return { success: false, message: "An error occurred while deleting the product" };
    }
};



export async function getProductById(productId) {
    try {
        const response = await fetch(`${API}/products/${productId}`);
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                product: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to fetch product",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching the product",
        };
    }
}






//Edit a Product
export async function updateProduct(productId, updatedProduct) {
    try {
        const response = await fetch(`${API}/products/edit/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token":localStorage.getItem("token"),
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await response.json();
        
        if (response.ok) {
            return {
                success: true,
                message: "Product updated successfully",
                product: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to update product",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while updating the product",
        };
    }
}


//Get All Products
export async function getAllProducts() {
    try {
        const response = await fetch(`${API}/products/all`);
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                products: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to fetch products",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching products",
        };
    }
}



//Get Products by category
export async function getProductsByCategory(category) 
{
    try {
        const response = await fetch(`${API}/products/category/${category}`);
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                products: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to fetch products by category",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching products by category",
        };
    }
}
