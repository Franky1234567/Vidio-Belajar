
import Card from "../components/CardComponent";
// import CardData from "../components/CardData";
import { useEffect, useState } from "react";
// import axios from "axios";

import {fetchServicesProduct} from "../Services/ServicesProduct";

const CardList = ()=>{
    const [CardData, setCardData] = useState([]);
    useEffect(()=>{
        const getdata = async ()=>{
            const data = await fetchServicesProduct();
            // console.log(data.products);
            setCardData(data.products);
        };
        getdata();
    },[]);

    return(
        <>
            <div className="w-full  h-auto max-w-[1170px] mx-auto">
                <div className="container w-full mx-auto">
                    <div className="flex flex-row items-center justify-center  flex-wrap gap-5 py-5">
                        {CardData.length > 0 && CardData.slice(0, 9).map((data) => (
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
        </>
    );
};

export default CardList;