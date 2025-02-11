import porptypes from "prop-types";
import { LuBookText } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import ProgressKelas from "./progres";



const Kelascard = ({productData,onDelete}) =>{
    const { title, images, id, description,displayJob ="Akuntansi" } = productData;
    return (
        <>
            <main>
                <div className="border border-gray-300 rounded-lg mb-5">
                    <div className="flex justify-between px-5 flex-col md:flex-row text-left border bg-green-50 text-gray-500">
                        <div className="flex my-1 font-semibold gap-2 items-center w-full md:w-2/3 justify-between">
                            <h1>12/12 Modul Terselesaikan</h1>
                            <h1></h1>
                        </div>
                        <div className="bg-green-100 text-green-600 py-1 px-3 rounded-lg text-sm my-2 text-center">
                            <button
                                type="button"
                                onClick={() => onDelete(id)}
                                className="items-center"
                            >
                                Selesai
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 flex-col md:flex-row justify-between p-5">
                        <div className="flex items-center ">
                            <div className= "border w-36 md:w-56 h-auto object-fill">
                                <img src={images[0]} alt={title} className="" />
                            </div>
                            <div className="flex flex-col text-left ml-2">
                                <h2 className="font-bold">{title}</h2>
                                <p className="hidden md:block">{description.substring(0, 100)}</p>
                                <div className="flex gap-3 px-1">
                                    <div className="w-10 md:w-10 my-auto py-4  md:py-2">
                                        <img src="https://miro.medium.com/v2/resize:fit:2400/1*6_oHYdP-4Zvszbey6ZBw0w.jpeg" alt='' className="rounded-lg" />
                                    </div>
                                    <div className="text-sm text-left py-2 h-12 md:h-auto overflow-hidden">
                                        <span className="">john doe</span>
                                        <br />
                                        <span className="">{displayJob}</span>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <p className="text-sm text-left py-2 h-12 md:h-auto overflow-hidden flex items-center text-gray-500"><span><LuBookText /></span> Modul</p>
                                    <p className="text-sm text-left py-2 h-12 md:h-auto overflow-hidden flex items-center text-gray-500"> <span><IoMdTime /></span>360 Menit</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="  bg-green-50">
                        <ProgressKelas progress={60} />
                        {/* <h1 className="text-gray-500">Total Pembayaran</h1> */}
                        {/* <h1 className="font-bold text-lg text-green-600">Rp.{price}</h1> */}
                    </div>
                </div>
            </main>
        </>
    )
};

Kelascard.propTypes = {
    productData: porptypes.object.isRequired,
    onDelete: porptypes.func.isRequired,
};


export default Kelascard;