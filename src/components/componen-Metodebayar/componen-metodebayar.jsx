import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiStickyNote } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
import { CiVideoOn } from "react-icons/ci";
import { TbFileCertificate } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import { nextStep } from "../../Redux/progresbarslice";
import Progresbar from "./ProgresBar";


const Bayarmethod = () =>{
    const [open, setopen] = useState(false);
    const [openVisa, setopenVisa] = useState(null);
    const [openewallet, setopenewallet] = useState(false);
    const [selectedbank, setselectedbank] = useState(null);
    const [ewallet, setewallet] =useState(null);
    const [visa, setvisa] = useState(null);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    // const step = useSelector((state) => state.progresbar.step);
    if (!selectedProduct) {
        return <div>Produk tidak ditemukan.</div>; 
    }
    const handletransferbank = () =>{
        setopen(!open);
    };
    const handleEwallet = () =>{
        setopenewallet(!openewallet);
    }

    const handleVisa = () =>{
        setopenVisa(!openVisa);
    }

    const handlechangebank = (BankName) =>{
        if (selectedbank === BankName) {
            setselectedbank(null);
        }
        else{
            setselectedbank(BankName);
        }
    }

    const handlechangeewallet = (ewalletName) =>{
        if (ewallet === ewalletName) {
            setewallet(null);
        }
        else{
            setewallet(ewalletName);
        }
    }
    const handlechangevisa = (visaName) =>{
        if (visa === visaName){
            setvisa(null);
        }
        else{
            setvisa(visaName);
        }
    }
    const adminFee = 7; 
    const productPrice = selectedProduct.price; 
    const total = productPrice + adminFee;
    
    const handleBelisekarang = () =>{
        if (selectedbank === null && ewallet === null && visa === null) {
            alert("Pilih Bank Terlebih dahulu");
        }
        else{
            // alert("Pembayaran Berhasil");
            dispatch(nextStep())
            Navigate("/Bayar");
        }
    };

    return(
        <>
            <Progresbar />
            <div className="w-full px-4 py-2  h-auto max-w-[1170px] mx-auto">
                  <div className="container w-full flex flex-col justify-evenly mx-auto gap-10 md:flex-row-reverse md:items-right">
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
                        </div>
                        <div onClick={handletransferbank} className="border p-5 rounded-xl hover:bg-orange-50 shadow-lg">
                          <h1 className="text-left flex items-center justify-between">Transfer Bank <span><IoIosArrowDown /></span></h1>
                        </div>
                        {open && 
                            <>
                                <div className="bg-white p-2 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://png.pngtree.com/png-clipart/20221224/original/pngtree-bca-bank-logo-png-image_8801637.png" alt="" className="w-16 "/>
                                        <p className="ml-4 font-medium">Transfer BCA</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={selectedbank === "BCA"} onChange={() => handlechangebank("BCA")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div>
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://companieslogo.com/img/orig/BBNI.JK-69fac82a.png?t=1604763178" alt="" className="w-12 "/>
                                        <p className="ml-4 font-medium">Transfer BNI</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={selectedbank === "BNI"} onChange={() => handlechangebank("BNI")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div>
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://2.bp.blogspot.com/-PQLJ8wE918o/W-9VvbtXLbI/AAAAAAAAFBU/4ADJ6vqks8MsjS6nxEc2VLKR8OYDSucJQCLcBGAs/s1600/BRI.png" alt="" className="w-16 "/>
                                        <p className="ml-4 font-medium">Transfer BRI</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={selectedbank === "BRI"} onChange={() => handlechangebank("BRI")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div>
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://freepngdesign.com/content/uploads/images/p-2813-2-bank-mandiri-logo-png-transparent-logo-699390155888.png" alt="" className="w-16 "/>
                                        <p className="ml-4 font-medium">Transfer Mandiri</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={selectedbank === "MANDIRI"} onChange={() => handlechangebank("MANDIRI")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div>
                            </>
                        }
                        <div onClick={handleEwallet} className="border p-5 rounded-x my-2 rounded-lg hover:bg-orange-50 shadow-lg">
                            <h1 className="text-left flex items-center justify-between">Transfer Ewallet <span><IoIosArrowDown /></span></h1>
                        </div>
                        {openewallet &&
                            <>
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://1.bp.blogspot.com/-aYApmQz2ZF4/XnK19AqNMYI/AAAAAAAASb8/UoPPqLROubECfTZbAqlX9FZJMgtVvi3OgCLcBGAsYHQ/s1600/Dana.png" alt="" className="w-16 "/>
                                        <p className="ml-4 font-medium">Dana</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={ewallet === "DANA"} onChange={() => handlechangeewallet("DANA")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div> 
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://1.bp.blogspot.com/-Iq0Ztu117_8/XzNYaM4ABdI/AAAAAAAAHA0/MabT7B02ErIzty8g26JvnC6cPeBZtATNgCLcBGAsYHQ/s1000/logo-ovo.png" alt="" className="w-16 "/>
                                        <p className="ml-4 font-medium">OVO</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={ewallet === "OVO"} onChange={() => handlechangeewallet("OVO")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div> 
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://1.bp.blogspot.com/-GjCpjdW8Hrs/XkXUvE0RseI/AAAAAAAABmk/u5e1zr7RGHQN2TFwPu1IoN8QJBtwXLH5QCLcBGAsYHQ/s1600/Logo%2BLink%2BAja%2521.png" alt="" className="w-12 "/>
                                        <p className="ml-4 font-medium">Link Aja</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={ewallet === "Link Aja"} onChange={() => handlechangeewallet("Link Aja")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div>
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ShopeePay-V-1024x1024.png" alt="" className="w-10 "/>
                                        <p className="ml-4 font-medium">Shopee Pay</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={ewallet === "Shopee Pay"} onChange={() => handlechangeewallet("Shopee Pay")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div> 
                            </>
                        }
                        <div onClick={handleVisa} className="border p-5 rounded-x my-2 rounded-lg hover:bg-orange-50 shadow-lg">
                            <h1 className="text-left flex items-center justify-between">Kartu Kredit/Visa <span><IoIosArrowDown /></span></h1>
                        </div>
                        {openVisa && 
                            <>
                                <div className="bg-white p-3 shadow-lg text-left flex items-center justify-between border rounded-lg my-1">
                                    <div className="flex items-center">
                                        <img src="http://pluspng.com/img-png/png-visa-visa-png-593.png" alt="" className="w-16 "/>
                                        <p className="ml-4 font-medium"></p>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={visa === "VISA"} onChange={() => handlechangevisa("VISA")} className="form-checkbox text-orange-500"></input>
                                    </div>
                                </div>
                            </>
                        }

                      </div>
                      {/* awal Ringkasan Pesanan */}
                      <div className="border bg-white p-5 shadow-lg my-5">
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
                            <button onClick={handleBelisekarang} type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-lg my-3"> Beli Sekarang</button>
                        </div>

                      </div>
                    </div>
                  </div>          
            </div>
        </>
    )
};


export default Bayarmethod;