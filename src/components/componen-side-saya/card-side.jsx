import { useState } from 'react';
import { FaUser } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import CardProfile from '../componen-profile/card-profile';
import Pesanansaya from '../Pesanan saya/Pesanan-saya';
import { MdClass } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";


const CardSideSaya = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [judul, setJudul] = useState('Profile');
    const [subjudul, setSubjudul] = useState('Ubah Data Diri');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <>
                        <CardProfile/>
                        {/* <Link to="/profile" className="flex items-center space-x-2 gap-3">/profile</Link> */}
                    </>
                ); 
            case 'kelas':
                return <div>Konten Kelas Saya</div>; 
            case 'pesanan':
                return (
                    <>
                        <Pesanansaya/>
                        {/* <Link to="/my-classes" className="flex items-center space-x-2 gap-3">/my-classes</Link> */}
                    </>
                ); 
            default:
                return null;
        }
    };

    const handleTabClick = (tab, judulBaru, subjudulBaru) => {
        setActiveTab(tab);
        setJudul(judulBaru);
        setSubjudul(subjudulBaru);
    };

    return (
        <div className='w-full mx-auto md:flex my-10'>
            <div className=" w-full  md:w-1/5">
                <div className='w-full '>
                    <h1 className='font-bold w-full text-left ml-6'>{judul}</h1>
                    <p className='text-left ml-6'>{subjudul}</p>
                    <div className='bg-white m-4 md:ml-4 p-5 rounded-lg shadow-lg'>
                        <div className={`w-full pl-3 pr-auto py-3 my-3 rounded-lg ${activeTab === 'profile' ? 'bg-orange-100' : 'bg-white'}`}>
                            <button
                                className="flex items-center space-x-2 gap-3"
                                onClick={() => handleTabClick('profile', 'Profile Saya', 'Ubah Data Diri')}
                            >
                                <FaUser className="text-orange-400" />
                                <span className="text-orange-400">Profile Saya</span>
                            </button>
                        </div>
                        <div className={`w-full pl-4 pr-auto py-3 my-3 rounded-lg ${activeTab === 'kelas' ? 'bg-orange-100' : 'bg-white'}`}>
                            <button
                                className="flex items-center space-x-2 gap-3"
                                onClick={() => handleTabClick('kelas', 'Kelas Saya', 'Lihat Daftar Kelas')}
                            >
                                <MdClass className="text-orange-400" />
                                <span className="text-orange-400">Kelas Saya</span>
                            </button>
                        </div>
                        <div className={`w-full pl-3 pr-auto py-3 my-3 rounded-lg ${activeTab === 'pesanan' ? 'bg-orange-100' : 'bg-white'}`}>
                            <button
                                className="flex items-center space-x-2 gap-3"
                                onClick={() => handleTabClick('pesanan', 'Pesanan Saya', 'Lihat Riwayat Pesanan')}
                            >
                                <FaCartShopping className="text-orange-400" />
                                <span className="text-orange-400">Pesanan Saya</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-4/5  p-3'>
                {renderContent()}
            </div>
        </div>
    );
};

export default CardSideSaya;

// import {  Routes, Route, useNavigate } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
// import { MdClass } from "react-icons/md";
// import { FaCartShopping } from "react-icons/fa6";
// import CardProfile from '../componen-profile/card-profile';
// // import Pesanansaya from '../Pesanan saya/Pesanan-saya';

// import Pesanansaya from '../Pesanan saya/Pesanan-saya';  // Komponen Kelas Saya

// const CardSideSaya = () => {
//     const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi programatik

//     const handleTabClick = (tab) => {
//         navigate(tab); // Pindah ke path tab yang dipilih
//     };

//     return (
//         <Router>
//             <div className='w-full mx-auto md:flex my-10'>
//                 {/* Card Side Saya (tetap ada di sisi kiri) */}
//                 <div className="w-full md:w-1/5">
//                     <div className='w-full'>
//                         <h1 className='font-bold w-full text-left ml-6'>Profile Saya</h1>
//                         <p className='text-left ml-6'>Ubah Data Diri</p>
//                         <div className='bg-white m-4 md:ml-4 p-5 rounded-lg shadow-lg'>
//                             <div className='w-full pl-3 pr-auto py-3 my-3 rounded-lg'>
//                                 <button
//                                     className="flex items-center space-x-2 gap-3"
//                                     onClick={() => handleTabClick('/profile')}
//                                 >
//                                     <FaUser className="text-orange-400" />
//                                     <span className="text-orange-400">Profile Saya</span>
//                                 </button>
//                             </div>
//                             <div className='w-full pl-4 pr-auto py-3 my-3 rounded-lg'>
//                                 <button
//                                     className="flex items-center space-x-2 gap-3"
//                                     onClick={() => handleTabClick('/kelas')}
//                                 >
//                                     <MdClass className="text-orange-400" />
//                                     <span className="text-orange-400">Kelas Saya</span>
//                                 </button>
//                             </div>
//                             <div className='w-full pl-3 pr-auto py-3 my-3 rounded-lg'>
//                                 <button
//                                     className="flex items-center space-x-2 gap-3"
//                                     onClick={() => handleTabClick('/pesanan')}
//                                 >
//                                     <FaCartShopping className="text-orange-400" />
//                                     <span className="text-orange-400">Pesanan Saya</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Konten utama (berubah sesuai tab yang dipilih) */}
//                 <div className='w-full md:w-4/5 p-3'>
//                     <Routes>
//                         <Route path="/profile" element={<CardProfile />} />
//                         <Route path="/kelas" element={<CardProfile />} />
//                         <Route path="/pesanan" element={<Pesanansaya />} />
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// };

// export default CardSideSaya;



