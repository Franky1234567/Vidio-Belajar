import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { nextStep } from "../../Redux/progresbarslice";
import { CiStickyNote } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
import { CiVideoOn } from "react-icons/ci";
import { TbFileCertificate } from "react-icons/tb";
import Progresbar from "../componen-Metodebayar/ProgresBar";
import { IoIosArrowDown } from "react-icons/io";
import Timer from "./Timer";
import { useNavigate } from "react-router";
import { fetchServicesProductAdd } from "../../Services/ServicesProduct";
import { setProductBuy } from "../../Redux/productbuy";
import Alert from "../Alert/Alert";
const Bayar = () => {
    const [openbank, setopenbank] = useState(false);
    const [alert, setAlert] = useState(null);
    // const [time, settime] = useState(null);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const adminFee = 7; 
    const productPrice = selectedProduct.price; 
    const total = productPrice + adminFee;
    const handlebank = () => {
        setopenbank(!openbank);
    };
    const handlebayarsekarang = async () => {
        try {
            const response = await fetchServicesProductAdd(selectedProduct);
            if (response) {
                dispatch(nextStep());
                setTimeout(() => {
                    Navigate("/berhasil");
                },2000 );
                showAlert("Pembayaran Berhasil", "success");
                const currentDate = new Date();
                const day = currentDate.toLocaleString('id-ID', { weekday: 'long' });
                const date = currentDate.toLocaleDateString('id-ID');
                const hours = currentDate.getHours();
                const minutes = currentDate.getMinutes();
                const seconds = currentDate.getSeconds();
                const formattedTime = `${day}, ${date} ${hours}:${minutes}:${seconds}`;
                dispatch(setProductBuy({ product : selectedProduct, time :formattedTime}));
                console.log(response);
            }else{
                console.log(response);
            }
        } catch (error) {
            console.log(error);
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
            <Timer/>
            <Progresbar/>
            <div className="w-full px-4 py-2  h-auto max-w-[1170px] mx-auto">
                <div className="container w-full flex flex-col justify-evenly mx-auto gap-10 md:flex-row-reverse md:items-right">
                    {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
                    <div className="md:w-1/4 bg-white p-4 shadow-xl rounded-lg h-auto md:h-1/3 border">
                     <h1 className="font-bold text-2xl ">{selectedProduct.title}</h1>
                      <div className="flex md:flex-col lg:flex-row mx-auto justify-between my-4">
                        <p className="text-green-500 font-bold text-xl">Rp {productPrice.toLocaleString()}K</p>
                        <span className="bg-orange-400 text-white text-xs py-1 px-2 my-1 w-auto rounded-lg">
                          Discount 10%
                        </span>
                      </div>
                      <p className="text-blue-600 font-semibold text-xs text-left">
                        Penawaran Spesial Tersisa 2 hari lagi!
                      </p>
                      <p className="text-left text-sm font-medium">
                        Kelas Ini Sudah Termasuk
                      </p>
                      <div className="flex w-full gap-4 md:flex-col lg:flex-row ">
                        <div className="md:text-xs ">
                          <div className="flex h-auto my-auto w-auto gap-2 mx-auto p-1">
                            <CiStickyNote className="my-auto border-0" />
                            <p>Ujian Akhir</p>
                          </div>
                          <div className="flex h-auto my-auto w-auto gap-2 p-1">
                            <LuBookText className="my-auto" />
                            <p>7 document</p>
                          </div>
                          <div className="flex h-auto my-auto w-auto gap-2 p-1 ">
                            <SlNote className="my-auto" />
                            <p>Pretest</p>
                          </div>
                        </div>
                        <div className="md:text-xs ">
                          <div className="flex h-auto my-auto w-auto gap-2 mx-auto p-1 ">
                            <CiVideoOn className="my-auto" />
                            <p>49 Vidio</p>
                          </div>
            
                          <div className="flex h-auto my-auto w-auto gap-2 mx-auto p-1">
                            <TbFileCertificate className="my-auto" />
                            <p>Sertifikat</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4 ">
                     <div className="border bg-white p-5 shadow-lg">
                        <div>
                            <h1 className="text-left text-xl font-bold mb-4">
                                Metode Pembayaran
                            </h1>
                            <div className="border my-5 rounded-lg">
                                <div className="flex items-center justify-between flex-col md:my-6">
                                    <img src="https://logos-download.com/wp-content/uploads/2017/03/BCA_logo_Bank_Central_Asia.png" alt="" className="w-28 mt-6 pb-3"/>
                                    <p className="">Bayar Melalui Virtual Account BCA</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-left text-sm ">11739 081234567890</p>
                                        <p className="text-left text-sm  text-red-600 hover:underline">Salin</p>

                                    </div>
                                </div>
                            </div>
                            <h1 className="text-left text-xl font-bold mb-4 ">Ringkasan Pesanan</h1>
                            <div >
                                <div className="flex justify-between my-3">
                                    <p className="text-left text-lg text-gray-500">{selectedProduct.title}</p>
                                    <p className="text-left text-lg text-gray-500">Rp.{productPrice.toLocaleString("id-ID")}k</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-left text-lg text-gray-500">Biaya Admin</p>
                                    <p className="text-left text-lg text-gray-500">Rp.{adminFee.toLocaleString("id-ID")}k</p>
                                </div>
                                <hr className="my-5"/>
                                <div className="flex justify-between">
                                    <p className="text-left text-lg font-bold">Total</p>
                                    <p className="text-left text-lg font-bold text-green-500">Rp.{total.toLocaleString("id-ID")}k</p>
                                </div>
                                <div className="flex justify-between my-5 flex-col md:flex-row items-center ">
                                    <button type="submit" className="bg-white border border-green-500 hover:bg-green-200 text-green-600 font-bold py-2 px-4 w-full md:w-1/2 rounded-lg my-3 mx-2"> Ganti Metode Pembayaran</button>
                                    <button onClick={handlebayarsekarang} type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full md:w-1/2 rounded-lg my-3 mx-2"> Bayar Sekarang</button>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="border bg-white p-5 shadow-lg my-5">
                            <h1>Tata Cara Ganti Metode Pembayaran</h1>
                            <div onClick={handlebank} className="border p-5 rounded-xl hover:bg-orange-50 shadow-md my-2">
                                <h1 className="text-left flex items-center justify-between my-2">Transfer Bank <span><IoIosArrowDown /></span></h1>
                            </div>
                            {openbank &&
                                <>
                                    <div className="bg-white border rounded-lg shadow-lg p-5 my-2">
                                        <h1 className="text-left font-bold">Atm BCA</h1>
                                        <ul className="list-decimal pl-6 space-y-4 text-left my-5">
                                            <li>
                                                <p>Masukkan kartu ATM dan PIN BCA Anda.</p>
                                            </li>
                                            <li>
                                                <p>Di menu utama, pilih `Transaksi Lainnya`. Pilih `Transfer`. Pilih `Ke BCA Virtual Account`.</p>
                                            </li>
                                            <li>
                                                <p>Masukkan nomor Virtual Account.</p>
                                            </li>
                                            <li>
                                                <p>Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih `Benar`.</p>
                                            </li>
                                            <li>
                                                <p>Cek dan perhatikan konfirmasi pembayaran dari layar ATM. Jika sudah benar pilih `Ya`, atau pilih `Tidak` jika data di layar masih salah.</p>
                                            </li>
                                            <li>
                                                <p>Transaksi Anda sudah selesai. Pilih `Tidak` untuk tidak melanjutkan transaksi lain.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border rounded-lg shadow-lg p-5 my-2">
                                        <h1 className="text-left font-bold">Mobiie Banking BCA</h1>
                                        <ul className="list-decimal pl-6 space-y-4 text-left my-5">
                                            <li>
                                                <p>Buka Aplikasi BCA Mobile.</p>
                                            </li>
                                            <li>
                                                <p>Pilih `m-BCA`, kemudian pilih `m-Transfer`.</p>
                                            </li>
                                            <li>
                                                <p>Pilih `BCA Virtual Account`.</p>
                                            </li>
                                            <li>
                                                <p>Masukkan nomor Virtual Account, lalu pilih `OK`.</p>
                                            </li>
                                            <li>
                                                <p>Klik tombol `Send` yang berada di sudut kanan atas aplikasi untuk melakukan transfer.</p>
                                            </li>
                                            <li>
                                                <p>Klik `OK` untuk melanjutkan pembayaran.</p>
                                            </li>
                                            <li>
                                                <p>Masukkan PIN Anda untuk meng-otorisasi transaksi</p>
                                            </li>
                                            <li>
                                                <p>Transaksi Anda telah selesai</p>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            }
                            <div  className="border p-5 rounded-xl hover:bg-orange-50 shadow-md my-2">
                                <h1 className="text-left flex items-center justify-between my-2">Ewallet<span><IoIosArrowDown /></span></h1>
                            </div>
                            <div  className="border p-5 rounded-xl hover:bg-orange-50 shadow-md my-2">
                                <h1 className="text-left flex items-center justify-between">Visa <span><IoIosArrowDown /></span></h1>
                            </div>
                      </div>
                        
                    </div>
                </div>
            </div>          
        </>
    )
};


export default Bayar;