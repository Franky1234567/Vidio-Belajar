import Menukelas from "./menu-kelas";
import Searchkelas from "./Searchkelas";
import Kelascard from "./kelas-card";
import { useEffect,useState } from "react";
import { deleteProduct } from "../../Services/ServicesProduct";
import { updateProduct } from "../../Services/ServicesProduct";
import Alert from "../Alert/Alert";
import { HashLoader } from "react-spinners";


const Kelassaya = ()=>{
    const [productData, setProductData] = useState(null);
    const [progres, setprogres] = useState(60);
    const [alert,  setAlert] = useState(null);
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
            return (
                <>
                    <HashLoader color="#ffa30d" className="m-auto justify-center" /> ;
                    <p className="text-orange-300">Product Tidak Ditemukan</p>
                </>
            )
        }
    
        // const handleDelete = async (id) => {
        //     try {
        //         console.log("Menghapus produk dengan ID:", id);
        //         await deleteProduct(id);
        //         console.log("Produk berhasil dihapus");
        //         localStorage.removeItem("productbuy");
        //         showAlert("Produk berhasil dihapus", "success");
        //         console.log("Produk berhasil dihapus");
                
        //         setProductData(null);
        //     } catch (error) {
        //         console.error("Error deleting product:", error);
        //         alert("Gagal menghapus produk");
        //     }
        // };
        const handleDelete = async (id) => {
            try {
                console.log("Menghapus produk dengan ID:", id);
                await deleteProduct(id);
                console.log("Produk berhasil dihapus");
                showAlert("Produk berhasil dihapus", "success");
                setTimeout(() => {
                    setProductData(null);
                }, 2000); 
                localStorage.removeItem("productbuy");
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Gagal menghapus produk");
            }
        };
        const handleUpdate = async(id) => {
            try {
                const update = await updateProduct(id);
                console.log(update);
                setprogres(100)
                showAlert("Progres berhasil diperbarui", "success");
            }
                catch(error){
                console.error("Error updating product:", error);
                alert("Gagal menghapus produk");
            };
        };

        const showAlert = (message, type) => {
            setAlert({ message, type });
            setTimeout(() => {
                setAlert(null); 
            }, 3000);
        };
    
    
    return (
        <>
            <main className="bg-white w-full mx-auto p-5 drop-shadow-lg overflow-hidden">
                {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
                <div className="flex justify-between flex-col md:flex-row md:flex-wrap md:items-center">
                    <Menukelas/>
                    <Searchkelas/>
                </div>
                <div>
                    <Kelascard 
                        key={productData.id}
                        id={productData.id}
                        progress={progres}
                        productData={productData} 
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                </div>
            </main>
        </>
    )
};


export default Kelassaya;