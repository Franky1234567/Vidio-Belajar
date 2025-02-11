// components/MenuPesanan.js
import { Link } from "react-router-dom";

const MenuPesanan = () => {
    const menupesanan = [
        { name: "Semua Pesanan", path: "/semua-pesanan" },
        { name: "Menunggu", path: "/menunggu" },
        { name: "Berhasil", path: "/Berhasil" },
        { name: "Gagal", path: "/Gagal" }
    ];
    return (
        <div className="text-left flex items-center h-10">
            {menupesanan.map((pesanan, index) => (
                <Link
                    to={pesanan.path}
                    key={index}
                    className={`mx-4 hover:text-orange-400 ${pesanan.name.slice(0, 3)} 
                    ${index < 3 ? 'block md:block' : 'hidden md:block'}`}
                >
                    {pesanan.name}
                </Link>
            ))}
        </div>
    );
};

export default MenuPesanan;
