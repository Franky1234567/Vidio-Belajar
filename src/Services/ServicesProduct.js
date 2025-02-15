import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const fetchServicesProduct = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

export const fetchServicesProductAdd = async (productData) => {
    try {
        // Menggunakan axios.post untuk mengirim data produk
        const response = await axios.post(`${BASE_URL}/products/add`, {
            title: productData.title,
            description: productData.description,
            price: productData.price,
            category: productData.category,
            image: productData.image 
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        return null;
    }
};

//menhapus product by id
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        return null;
    }
};

//untuk update data ke api
export const updateProduct = async (id) => {
    try {
        const response = await axios.put(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        return null;
    }
};
