import { useEffect, useState } from "react";
import PesananCard from "./Pesanancard";
import MenuPesanan from "./Menupesanan";
import SearchAndSort from "./SearchAndSort";
import { deleteProduct } from "../../Services/ServicesProduct";
import { removeProductFromBuy } from "../../Redux/productbuy";
import {useSelector,useDispatch} from 'react-redux';
import { HashLoader } from "react-spinners";

const Pesanansaya = () => {
    const [productData, setProductData] = useState(null);
    const [timebuy, setTimebuy] = useState(null);
    const product = useSelector((state) => state.productbuy.productbuy);
    const time = useSelector((state) => state.productbuy.time);
    const dispatch = useDispatch();
    console.log(product, "product");
    useEffect(() => {
        if (product && product.length > 0) {
            console.log(product, "data dari Redux");
            setProductData(product); 
        } else {
            console.log("No product data available");
        }
    }, [product]);
    useEffect(() => {
        if (time) {
            setTimebuy(time);
        }
    },[time]);
    

    if (!productData) {
        return (
            <>
                <HashLoader color="#ffa30d" className="m-auto justify-center" /> ;
                <p className="text-orange-300">Product Tidak Ditemukan</p>
            </>
        )
    }

    const handleDelete = async (id) => {
        try {
            console.log("Menghapus produk dengan ID:", id);
            await deleteProduct(id);
            console.log("Produk berhasil dihapus");
            dispatch(removeProductFromBuy(id)); 
            setProductData((prevData) => prevData.filter((product) => product.id !== id));
            setTimebuy(null);
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Gagal menghapus produk");
        }
    };

    return (
        <main className="bg-white w-full mx-auto p-5 drop-shadow-lg overflow-hidden">
            <div className="flex justify-between flex-col md:flex-row md:flex-wrap md:items-center">
                <MenuPesanan />
                <SearchAndSort />
            </div>
            {productData.map((productData) => (
                <div key={productData.id} className="bg-white shadow-md rounded-md p-5 my-5">
                <PesananCard
                    productData={productData}
                    onDelete={handleDelete}
                    timebuy={timebuy}
                />
                </div>
            ))}
        </main>
    );
};

export default Pesanansaya;
