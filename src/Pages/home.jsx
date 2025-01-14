import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Headingtext from "../components/HeadingText";
import NavMenu from "../components/NavMenu";
import { Outlet } from "react-router";
import CardList from "../Layouts/Card";
import BannerWithSubscribe from "../components/Banner2";
import Footer from "../components/Footer";
const HomePage =()=>{
    return(

        <>
            <main>
                <Logo textMenu="ketagory" avatar="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"/>
                <div>
                    
                    <Banner judul="REVOLUSI PEMBELAJARAN: TEMUKAN ILMU BARU MELALUI PLATFORM VIDIO INTERAKTIF!" paragf="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda." ButtonText="Temukan Vidio Course Untuk Dipelajari!"/>
                </div>
                <div>
                    <Headingtext text="koleksi Vidio Pembelajaran Unggulan" textP="Jelajahi Dunia Pengetahuan dengan Melalui Pilihan Kami"/>
                </div>
                <div>
                    <NavMenu/>
                </div>
                <div>
                    <CardList/>
                </div>
                <div>
                    <BannerWithSubscribe judul="Mau Belajar Lebih Banyak ?" paragf="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id" inputPlaceholder="masukkan email anda" subscribeText="subscribe"/>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
            <Outlet /> {/* Tambahkan Outlet di sini */}
        </>
    )
}
export default HomePage;