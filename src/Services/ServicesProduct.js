import axios from "axios";

export const fetchServicesProduct = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

export const fetchServicesProductAdd = async (productData) => {
    try {
        // Menggunakan axios.post untuk mengirim data produk
        const response = await axios.post('https://dummyjson.com/products/add', {
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
        const response = await axios.delete(`https://dummyjson.com/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        return null;
    }
};
