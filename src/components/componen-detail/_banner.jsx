// import CardData from "../CardData";
import { useParams } from 'react-router-dom';
import { fetchServicesProduct } from "../../Services/ServicesProduct";
import { useEffect,useState } from 'react';
const BannerDetail = () => { 
    const { id } = useParams(); 
    const [card, setCard] = useState(null);
    useEffect(() => {
        const fetchCard = async () => {
            const data = await fetchServicesProduct();
            setCard(data.products.find((card) => card.id === parseInt(id)));
        };
        fetchCard();
        }, [id]);
    if (!card) {
    
    
    
    return <p>Loading....</p>; 
    }
    return (
        <>
            <div className="w-full px-4 py-2  h-auto max-w-[1170px] mx-auto ">
                    <div className="container mx-auto bg-cover bg-center h-auto relative md:h-96 " style={{ backgroundImage: `url(${card.thumbnail})` }} >
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
                        <div className="relative z-10 flex flex-col justify-center items-start h-full px-5 py-5 ">
                                    <h1 className="font-bold text-xl py-2 text-white text-left items-center md:text-4xl md:py-5">
                                        {card.title}
                                    </h1>
                                    <p className=" text-gray-300 text-left my-5 text-sm md:text-lg">
                                        {card.description}
                                    </p>
                            <div className="w-full flex justify-start gap-10 md:mt-4">
                                <div className="w-14  items-center h-auto ">
                                    <p className='text-white'>{card.Rating}</p>
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