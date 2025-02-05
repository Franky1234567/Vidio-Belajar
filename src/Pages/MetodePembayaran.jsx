import Bayarmethod from "../components/componen-bayar/componen-bayar";
import Footer from "../components/Footer";

const BayarMetode = () => {
    return (
        <>
            
            <Bayarmethod/>
            <Footer/>

        </>
    )
};


export default BayarMetode;
// src/pages/Bayar.js
// import { useSelector } from 'react-redux';  // Impor useSelector dari react-redux

// const Bayar = () => {
//   const selectedProduct = useSelector((state) => state.product);  // Ambil produk dari Redux

//   if (!selectedProduct) {
//     return <div>Produk tidak ditemukan.</div>;  // Tampilkan pesan jika produk tidak ada
//   }

//   return (
//     <div>
//       <h1>Halaman Bayar</h1>
//       <h2>Produk yang dipilih: {selectedProduct.name}</h2>
//       <p>Deskripsi: {selectedProduct.description}</p>
//       <p>Harga: {selectedProduct.price}</p>
//       {/* Tampilkan informasi lain tentang produk */}
//     </div>
//   );
// };

// export default Bayar;
