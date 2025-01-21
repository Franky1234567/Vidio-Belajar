import CardData from "../CardData";
import { useParams } from 'react-router-dom';
import studyingImage from "../../assets/studying.jpg";
const BannerDetail = () => { 
    const { id } = useParams(); 
    const card = CardData.find((card) => card.id === parseInt(id)); 
    if (!card) { 
        return <p>Card not found</p>; 
    }
    return (
        <>
            <div className="w-full px-4 py-2  h-auto max-w-[1170px] mx-auto ">
                    <div className="container mx-auto bg-cover bg-center h-auto relative md:h-96" style={{ backgroundImage: `url(${studyingImage})` }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
                        <div className="relative z-10 flex flex-col justify-center items-start h-full px-5 py-5">
                                    <h1 className="font-bold text-xl py-2 text-white text-left items-center md:text-4xl md:py-5">
                                        {card.Title}
                                    </h1>
                                    <p className=" text-gray-300 text-left my-5 text-sm md:text-lg">
                                        {card.deskripsi}
                                    </p>
                            <div className="w-full flex  justify-start gap-10  md:mt-4">
                                <div className="w-14  items-center h-auto ">
                                    <img src={card.Rating} alt="rating" />
                                </div>
                                <p className="text-white items-center my-auto">{card.Ulasan}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
};

export default BannerDetail;