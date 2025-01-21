import Card from "../components/CardComponent";
import CardData from "../components/CardData";

const CardList = ()=>{
    return(
        <>
            <div className="w-full  h-auto max-w-[1170px] mx-auto">
                <div className="container w-full mx-auto">
                    <div className="flex flex-row items-center justify-center  flex-wrap gap-5 py-5">
                        {CardData.map((data) => (
                            <Card 
                                key={data.id} 
                                id={data.id} 
                                Title={data.Title}
                                image={data.image}
                                deskripsi={data.deskripsi}
                                thumbnail={data.thumbnail}
                                name={data.name}
                                avatar={data.avatar}
                                job={data.job}
                                Rating={data.Rating}
                                Ulasan={data.Ulasan}
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