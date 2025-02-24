import Menukelas from "./menu-kelas";
import Searchkelas from "./Searchkelas";
import Kelascard from "./kelas-card";
import { useEffect,useState } from "react";
import { deleteProduct } from "../../Services/ServicesProduct";
import { updateProduct } from "../../Services/ServicesProduct";
import {useSelector,useDispatch} from 'react-redux';
import { updateProductProgress } from "../../Redux/productbuy";
import {removeProductFromBuy} from '../../Redux/productbuy';
import Alert from "../Alert/Alert";
import { HashLoader } from "react-spinners";


const Kelassaya = ()=>{
    const [productData, setProductData] = useState(null);
    // const [progres, setprogres] = useState(60);
    const [alert,  setAlert] = useState(null);
    const product = useSelector((state) => state.productbuy.productbuy);
    const dispatch = useDispatch();
    console.log(product, "product");
    useEffect(() => {
        if (product && product.length > 0) {
            console.log(product, "data dari Redux");
            setProductData(product); // Menyimpan data ke state
        } else {
            console.log("No product data available");
        }
    }, [product]);
        
    
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
        //         showAlert("Produk berhasil dihapus", "success");
        //         setTimeout(() => {
        //             setProductData(null);
        //         }, 2000); 
        //         // localStorage.removeItem("productbuy");
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
                dispatch(removeProductFromBuy(id)); 
                setProductData((prevData) => prevData.filter((product) => product.id !== id));
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Gagal menghapus produk");
            }
        };        
        const handleUpdate = async (id) => {
            try {
                console.log("Mengupdate produk dengan ID:", id);
                const update = await updateProduct(id);
                console.log(update);
                const newProgress = 100; 
                
                // Dispatch aksi untuk memperbarui progress produk berdasarkan id
                dispatch(updateProductProgress({ id, progress: newProgress }));
        
                console.log("Progress updated for product ID:", id);
                showAlert("Progres berhasil diperbarui", "success");
            } catch (error) {
                console.error("Error updating product:", error);
                alert("Gagal mengupdate produk");
            }
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
                    {productData.map((productData) => (
                        <Kelascard 
                            key={productData.id}
                            id={productData.id}
                            progress={productData.progress}
                            productData={productData} 
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                        
                    ))}
                    
                </div>
            </main>
        </>
    )
};


export default Kelassaya;