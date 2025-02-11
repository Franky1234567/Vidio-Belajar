import Menukelas from "./menu-kelas";
import Searchkelas from "./Searchkelas";
import Kelascard from "./kelas-card";
import { useEffect,useState } from "react";
import { deleteProduct } from "../../Services/ServicesProduct";


const Kelassaya = ()=>{
    const [productData, setProductData] = useState(null);
        useEffect(() => {
            const databuy = localStorage.getItem("productbuy");
            if (databuy) {
                try {
                    const parsedData = JSON.parse(databuy);
                    if (parsedData.product) {
                        setProductData(parsedData.product);
                    }
                } catch (error) {
                    console.error("Error parsing product data:", error);
                    alert("Gagal memuat data produk");
                }
            } else {
                console.log("Data di localStorage kosong");
            }
        }, []);
    
        if (!productData) {
            return <p>Produk sedang dimuat...</p>;
        }
    
        const handleDelete = async (id) => {
            try {
                console.log("Menghapus produk dengan ID:", id);
                await deleteProduct(id);
                localStorage.removeItem("productbuy");
                setProductData(null);
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Gagal menghapus produk");
            }
        };
    
    return (
        <>
            <main className="bg-white w-full mx-auto p-5 drop-shadow-lg overflow-hidden">

                <div className="flex justify-between flex-col md:flex-row md:flex-wrap md:items-center">
                    <Menukelas/>
                    <Searchkelas/>
                </div>
                <div>
                    <Kelascard 
                        productData={productData} 
                        onDelete={handleDelete}
                    />
                </div>
            </main>
            
        </>
    )
};


export default Kelassaya;