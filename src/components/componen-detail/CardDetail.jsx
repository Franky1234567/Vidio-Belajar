import {   useNavigate, useParams } from "react-router";
import Card from "../CardComponent";
import { fetchServicesProduct } from "../../Services/ServicesProduct";
import { useEffect, useState } from "react";
import { CiStickyNote } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
import { CiVideoOn } from "react-icons/ci";
import { TbFileCertificate } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import {setSelectedProduct} from "../../Redux/Product";
import { nextStep } from "../../Redux/progresbarslice";



const Carddetail = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { id } = useParams();
  const [carddetail, setCarddetail] = useState(null);
  const [Isopen, setIsopen] = useState(false);
  const [allcards, setAllcards] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const data = await fetchServicesProduct();
      setAllcards(data.products);
      setCarddetail(data.products.find((card) => card.id === parseInt(id)));
    };
    getdata();
  }, [id]);

  if (!carddetail) {
    return <div>Loading...</div>;
  }

  const card = carddetail;


  const handleDropDown = () => {
    setIsopen(!Isopen);
    // alert("sudah jalan")
  };

  const handleBeliSekarang = () => {
    dispatch(nextStep())
    dispatch(setSelectedProduct(card));
    Navigate("/metodepembayaran");
  }

  return (
    <div className="w-full px-4 py-2  h-auto max-w-[1170px] mx-auto">
      <div className="container w-full flex flex-col justify-evenly mx-auto gap-10 md:flex-row-reverse md:items-right">
        <div className="md:w-1/4 bg-white p-4 shadow-xl rounded-lg h-auto md:h-1/3 border">
          <h1 className="font-bold text-2xl ">{card.title}</h1>
          <div className="flex md:flex-col lg:flex-row mx-auto justify-between my-4">
            <p className="text-green-500 font-bold text-xl">Rp{card.price} <span className="text-gray-300 line-through text-lg ">500k</span></p>
            <span className="bg-orange-400 text-white text-xs py-1 px-2 my-1 w-auto rounded-lg">
              Discount 10%
            </span>
          </div>
          <p className="text-blue-600 font-semibold text-xs text-left">
            Penawaran Spesial Tersisa 2 hari lagi!
          </p>
          <button onClick={handleBeliSekarang} className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 my-4 w-full rounded-lg">
            Beli Sekarang
          </button>
          <p className="text-left text-sm font-medium">
            Kelas Ini Sudah Termasuk
          </p>
          <div className="flex w-full gap-4 md:flex-col lg:flex-row ">
            <div>
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
            <div>
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
              <h1 className="text-left text-xl font-semibold mb-4">
                Deskripsi
              </h1>
            </div>
            <div>
              <h1 className="text-left">{card.title}</h1>
              <p className="text-left">{card.description}</p>
            </div>
          </div>
          {/* Pembuka dari mentor */}
          <div className="bg-white my-8 w-full border shadow-lg">
            <h1 className="text-left text-xl font-semibold  p-5">
              Belajar Bersama Tutor Profesional
            </h1>
            <div className="flex w-full justify-around gap-5 p-5 flex-col md:flex-row ">
              <div className="border p-5 rounded-lg">
                <div className="flex text-left gap-3 ">
                  <div>
                    <img
                      src="https://miro.medium.com/v2/resize:fit:2400/1*6_oHYdP-4Zvszbey6ZBw0w.jpeg"
                      className="w-14 rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>John doe</h1>
                    <p>Senior Talent Acquisition</p>
                  </div>
                </div>
                <div>
                  <p className="text-left my-4">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                    bekerja sebagai Senior Talent Acquisition Specialist di
                    Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                    tahun.
                  </p>
                </div>
              </div>
              <div className="border p-5 rounded-lg">
                <div className="flex text-left gap-3">
                  <div>
                    <img
                      src="https://miro.medium.com/v2/resize:fit:2400/1*6_oHYdP-4Zvszbey6ZBw0w.jpeg"
                      className="w-14 rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>John doe</h1>
                    <p>Senior Talent Acquisition</p>
                  </div>
                </div>
                <div>
                  <p className="text-left my-4">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                    bekerja sebagai Senior Talent Acquisition Specialist di
                    Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                    tahun.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* akhir dari mentor */}
          {/* pembuka biar ga bingung */}
          <div className="border bg-white shadow-lg">
            <h1 className="text-left text-xl font-semibold  p-5">
              kamu Akan Membepalajari
            </h1>
            <div>
              <h1
                onClick={handleDropDown}
                className="text-green-500 font-bold text-xl text-left p-5 flex justify-between"
              >
                Introduction to Course 1: Foundations of User Experience Design{" "}
                <span className="flex ">
                  <IoIosArrowDown />
                </span>
              </h1>
              {Isopen && (
                <>
                  <div className="bg-white p-5 border rounded-lg flex justify-between my-2">
                    <h1 className="text-left text-md font-semibold p-5">
                      The basics of user experience design{" "}
                    </h1>
                    <div className=" flex justify-center gap-3 mt-4 ">
                      <CiVideoOn className="mt-1 hidden md:block" />
                      <span className=" hidden md:block">Vidio</span>
                      <CiTimer className="mt-1 hidden md:block" />
                      <span className=" hidden md:block">12 Menit</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 border rounded-lg flex justify-between my-2">
                    <h1 className="text-left text-md font-semibold p-5">
                      The basics of user experience design{" "}
                    </h1>
                    <div className=" flex justify-center gap-3 mt-4 ">
                      <CiVideoOn className="mt-1 hidden md:block" />
                      <span className=" hidden md:block">Vidio</span>
                      <CiTimer className="mt-1 hidden md:block" />
                      <span className=" hidden md:block">12 Menit</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 border rounded-lg flex justify-between my-2">
                    <h1 className="text-left text-md font-semibold p-5">
                      The basics of user experience design
                    </h1>
                    <div className=" flex justify-center gap-3 mt-4 ">
                      <CiVideoOn className="mt-1 hidden md:block" />
                      <span className=" hidden md:block">Vidio</span>
                      <CiTimer className="mt-1 hidden md:block" />
                      <span className=" hidden md:block">12 Menit</span>
                    </div>
                  </div>
                </>
              )}
              <h1 className="text-green-500 font-bold text-xl text-left p-5 flex justify-between">
                Universal design, inclusive design, and equity-focused design
                <span className="flex ">
                  <IoIosArrowDown />
                </span>
              </h1>
              <h1 className="text-green-500 font-bold text-xl text-left p-5 flex justify-between">
                Introduction to design sprints
                <span className="flex ">
                  <IoIosArrowDown />
                </span>
              </h1>
              <h1 className="text-green-500 font-bold text-xl text-left p-5 flex justify-between">
                Introduction to UX research
                <span className="flex ">
                  <IoIosArrowDown />
                </span>
              </h1>
            </div>
          </div>
          {/* akhir */}
          {/* awal */}
          <div className="bg-white my-8 w-full border shadow-lg">
            <h1 className="text-left text-xl font-semibold p-5">
              Belajar Bersama Tutor Profesional
            </h1>
            <div className="flex w-full justify-around gap-5 p-5 flex-col md:flex-row ">
              <div className="border p-5 rounded-lg">
                <div className="flex text-left gap-3 ">
                  <div>
                    <img
                      src="https://miro.medium.com/v2/resize:fit:2400/1*6_oHYdP-4Zvszbey6ZBw0w.jpeg"
                      className="w-14 rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>
                      {card.reviews
                        ? card.reviews[0]?.reviewerName
                        : "John Doe"}
                    </h1>
                    <p>Senior Talent Acquisition</p>
                  </div>
                </div>
                <div>
                </div>
                {/* Menambahkan komentar di bawah */}
                {card.reviews && card.reviews.length > 0 && (
                  <p className="text-left my-4">{card.reviews[0]?.comment}</p>
                )}
                <div className="flex justify-between">
                  <img src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-rating-stars-3d-icon-png-image_8540913.png" alt="" className="h-16 my-auto" />
                  <h1 className="my-auto underline"> {card.reviews.length}</h1>
                </div>
              </div>

              <div className="border p-5 rounded-lg">
                <div className="flex text-left gap-3">
                  <div>
                    <img
                      src="https://miro.medium.com/v2/resize:fit:2400/1*6_oHYdP-4Zvszbey6ZBw0w.jpeg"
                      className="w-14 rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>
                      {card.reviews
                        ? card.reviews[1]?.reviewerName
                        : "John Doe"}
                    </h1>
                    <p>Senior Talent Acquisition</p>
                  </div>
                </div>
                <div>
                </div>
                {/* Menambahkan komentar di bawah */}
                {card.reviews && card.reviews.length > 1 && (
                  <p className="text-left my-4">{card.reviews[1]?.comment}</p>
                )}
                <div className="flex justify-between">
                  {/* <h1 className="">Rating : {card.rating}</h1> */}
                  <img src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-rating-stars-3d-icon-png-image_8540913.png" alt="" className="h-16 my-auto" />
                  <h1 className="my-auto underline"> {card.reviews.length}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* akhir */}
          <div className="bg-white border mb-4 shadow-lg">
            <h1 className="text-left font-semibold px-5 pt-4 text-xl">
              Vidio pembelajaran Lainnya
            </h1>
            <p className="text-left px-5">
              Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
            </p>
            <div className="">
                <div className="flex flex-row items-center justify-center flex-wrap gap-5 py-5">
                    {/* Menampilkan 3 produk pertama dari produk yang ada */}
                    {allcards.slice(0, 2).map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        image={data.image}
                        description={data.description}
                        thumbnail={data.thumbnail}
                        name={data.name}
                        avatar={data.avatar}
                        job={data.job}
                        Rating={data.rating}
                        Ulasan={data.reviews.length}
                        price={data.price}
                    />
                    ))}
                </div>
                

            </div>
          </div>
          {/* akhir */}
        </div>
      </div>
    </div>
  );
};

export default Carddetail;
