import gambarberhasil from "../assets/berhasil.png"
import Button from "../components/Button"
import Footer from "../components/Footer"
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


const Berhasil = () => {
    const navigate = useNavigate();
    const handleKembalikeBeranda = () => {
        navigate("/home");
    }
    return (
        <>
            <main className="w-ful ">
                <div className="w-80 md:w-96 border border-gray-300 bg-gray-50 rounded-lg items-center mx-auto my-10 p-5">
                    <img src={gambarberhasil} alt="" />
                    <p className="text-lg font-semibold text-center mt-5">Selamat Pembayaran Berhasil</p>
                    <p className="text-sm text-center my-3">Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.</p>
                    <Button onClick={handleKembalikeBeranda}>{"Kembali ke Beranda"}</Button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Berhasil