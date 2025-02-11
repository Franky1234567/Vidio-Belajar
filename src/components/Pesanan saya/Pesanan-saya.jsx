// import { Link } from "react-router";
// import { CiSearch } from "react-icons/ci";
// import  { useEffect, useState } from 'react';
// import { deleteProduct } from "../../Services/ServicesProduct";

// const Pesanansaya = () => {
//     const [productData, setProductData] = useState(null);
//     const [timebuy, setTimebuy] = useState(null);
    
//     const menupesanan = [
//         { name: "Semua Pesanan", path: "/semua-pesanan" },
//         { name: "Menunggu", path: "/menunggu" },
//         { name: "Berhasil", path: "/Berhasil" },
//         { name: "Gagal", path: "/Gagal" }
//     ];

//     useEffect(() => {
//         const databuy = localStorage.getItem("productbuy");
//         if (databuy) {
//             try {
//                 const parsedData = JSON.parse(databuy);
//                 if (parsedData.product) {
//                     setProductData(parsedData.product); 
//                 }
//                 if (parsedData.time) {
//                     setTimebuy(parsedData.time); 
//                 }
//             } catch (error) {
//                 console.error('Error parsing product data:', error);
//                 alert('Gagal memuat data produk');
//             }
//         } else {
//             console.log('Data di localStorage kosong');
//         }
//     }, []);
//     if (!productData) {
//         return <p>Produk sedang dimuat...</p>;
//     }
//     const { title, price, images, id } = productData;
//     if (!images || images.length === 0) {
//         return <p>Gambar produk tidak tersedia.</p>;
//     }

//     const handledeleteclass =async (id) => {
//         try {
//             console.log('Menghapus produk dengan ID:', id); 
//             const deletedProduct = await deleteProduct(id); 
//             console.log('Produk berhasil dihapus:', deletedProduct);
//             localStorage.removeItem('productbuy'); 
//             setProductData(null); 
//             setTimebuy(null); 
//         } catch (error) {
//             console.error('Error deleting product:', error);
//             alert('Gagal menghapus produk');
//         }
        
//     };
//     return (
//         <>
//             <main className="bg-white w-full mx-auto p-5 drop-shadow-lg overflow-hidden">
//                 <div className="">
//                     <div className=" flex justify-between flex-col md:flex-row md:flex-wrap md:items-center">
//                         <div className="text-left flex items-center h-10">
//                             {menupesanan.map((pesanan,index) =>(
//                                 <Link
//                                     to={pesanan.path}
//                                     key={index}
//                                     className={`mx-4 hover:text-orange-400 ${pesanan.name.slice(0, 3)} 
//                                     ${index < 3 ? 'block md:block' : 'hidden md:block'}`}
//                                 >
//                                 {pesanan.name}
//                                 </Link>
//                             ))}
//                         </div>
//                         <div className="flex items-center border border-gray-300 rounded-xl my-2 h-10">
//                             <input type="text" className="focus:outline-none ml-4 " ></input>
//                             <CiSearch className="mx-2"/>
//                         </div>
//                         <div className="flex items-center border border-gray-300 p-2 rounded-xl my-2">
//                             <select type="select" className="mx-2" >
//                                 <option value="Semua Pesanan">Urutkan</option>
//                             </select>
//                         </div> 
//                     </div>
//                     <div className="border border-gray-300 rounded-lg">
//                         {/* <div> */}
//                             <div className="flex justify-between px-5 flex-col md:flex-row text-left border bg-green-50 text-gray-500">
//                                 <div className="flex gap-2 items-center w-full md:w-2/3 justify-between">
//                                     <h1>No.Invoice : 123456</h1>
//                                     <h1>Waktu Pembayaran : {timebuy}</h1>
//                                 </div>
//                                 <div className="bg-green-100 text-green-600 py-1 px-3 rounded-lg text-sm my-2">
//                                     <button type="button" onClick={() => handledeleteclass(id)} className="items-center">Berhasil</button>
//                                 </div>
//                             </div>
//                         {/* </div> */}
//                         {/* <div> */}
//                             <div className=" flex items-center gap-5 flex-col md:flex-row justify-between p-5">
//                                 <div className="flex items-center ">
//                                     <img src={images[0]} alt={title} className="w-16" />
//                                     <h2 className="font-bold">{title}</h2>
//                                 </div>
//                                 <div className=" border-l-2 items-center p-5  ">
//                                     <p>Harga: </p>
//                                     <p className="font-bold text-lg">Rp.{price}</p>
//                                 </div>
//                             </div>
//                         <div>
//                             <div className=" flex items-center gap-5 flex-col md:flex-row justify-between py-2 px-5 border bg-green-50">
//                                 <h1 className="text-gray-500">Total Pembayaran</h1>
//                                 <h1 className="font-bold text-lg text-green-600">Rp.{price}</h1>
//                             </div>
//                         </div>
//                         {/* </div> */}
//                     </div>
                    
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Pesanansaya;

// pages/Pesanansaya.js
import { useEffect, useState } from "react";
import PesananCard from "./Pesanancard";
import MenuPesanan from "./Menupesanan";
import SearchAndSort from "./SearchAndSort";
import { deleteProduct } from "../../Services/ServicesProduct";

const Pesanansaya = () => {
    const [productData, setProductData] = useState(null);
    const [timebuy, setTimebuy] = useState(null);

    useEffect(() => {
        const databuy = localStorage.getItem("productbuy");
        if (databuy) {
            try {
                const parsedData = JSON.parse(databuy);
                if (parsedData.product) {
                    setProductData(parsedData.product);
                }
                if (parsedData.time) {
                    setTimebuy(parsedData.time);
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

            <PesananCard
                productData={productData}
                onDelete={handleDelete}
                timebuy={timebuy}
            />
        </main>
    );
};

export default Pesanansaya;
