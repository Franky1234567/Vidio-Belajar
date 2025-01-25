import logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [Open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(false);
  // const [perusahaanOpen, setperusahaanOpen] = useState(false);
  // const [komunitasOpen, setkomunitasOpen] = useStates(false);

  const HandleFooter = () => {
    if (mobile) {
      setOpen(!Open);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full px-2 py-2 bg-white ">
        <div className="container mx-auto max-w-[1170px] ">
          <div>
            <img src={logo} />
          </div>
          <div className="flex flex-wrap text-left px-5 w-full justify-between ">
            <div>
              <h1 className="text-lg font-bold">
                Gali Potensi Anda Melalui Pembelajaran Vidio di hariesok.id
              </h1>
              <p>jl,usman effendi no.50 lowokwaru malang</p>
              <p>+62-877-71231234</p>
            </div>
            <div className="flex justify-end flex-col gap-1 py-4 sm:flex-row sm:gap-5 md:gap-10 md:">
              <div className="flex flex-col">
                <h1
                  className="text-lg font-bold flex text-center gap-5"
                  onClick={HandleFooter}
                >
                  Ketagory
                  <span className="text-right flex justify-end items-center md:hidden ">
                    <IoIosArrowDown />
                  </span>
                </h1>
                {Open ? (
                  <div className="flex flex-col gap-1">
                    <Link to="/digital-teknologi" className="hover:underline">
                      Digital & Teknologi
                    </Link>
                    <Link to="/pemasaran" className="hover:underline">Pemasaran</Link>
                    <Link to="/manajemen-bisnis" className="hover:underline">Manajemen Bisnis</Link>
                    <Link to="/pengembangan-diri" className="hover:underline">Pengembangan Diri</Link>
                    <Link to="/desain" className="hover:underline">Desain</Link>
                  </div>
                ) : null}
              </div>
              <div>
                <h1 className="text-lg font-bold flex text-center gap-5" onClick={HandleFooter}>
                  Perusahaan
                    <span className="text-right flex justify-end items-center md:hidden ">
                        <IoIosArrowDown />
                    </span>
                </h1>
                {Open ? (
                  <div className="flex flex-col gap-1">
                    <Link to="/tentang-kami" className="hover:underline">Tentang Kami</Link>
                    <Link to="/faq" className="hover:underline">FAQ</Link>
                    <Link to="/kebijakan-privasi" className="hover:underline">Kebijakan Privasi</Link>
                    <Link to="/ketentuan-layanan" className="hover:underline">Ketentuan Layanan</Link>
                    <Link to="/bantuan" className="hover:underline">Bantuan</Link>
                  </div>
                ) : null}
              </div>
              <div>
                <h1 className="text-lg font-bold flex text-center gap-5" onClick={HandleFooter}>
                  Komunitas
                  <span className="text-right flex justify-end items-center md:hidden ">
                        <IoIosArrowDown />
                  </span>
                </h1>
                {Open ? (
                  <div className="flex flex-col gap-1">
                    <Link to="/tips-sukses" className="hover:underline">Tips Sukses</Link>
                    <Link to="/blog" className="hover:underline">Blog</Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full flex sm:justify-between flex-col py-5 sm:flex-row">
                <div >
                    <h1 className="text-lg text-left pl-5">
                        &copy;2023 Gerobak Sayur All Rights Reserved
                    </h1>
                </div>
                <div className="flex gap-5 py-5">
                    <Link to="#">
                        <FaInstagram />
                    </Link>
                    <Link to="#">
                        <FaLinkedinIn />
                    </Link>
                    <Link to="#">
                        <FaFacebookSquare />
                    </Link>
                    <Link to="#">
                        <FaTwitter />
                    </Link>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
