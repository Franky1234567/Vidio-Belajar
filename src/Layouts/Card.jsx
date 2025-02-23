// import Card from "../components/CardComponent";
// // import CardData from "../components/CardData";
// import { useEffect } from "react";
// import { useDispatch,useSelector } from "react-redux";
// import { fetchAllProducts } from "../Redux/AllProduct";
// // import axios from "axios";

// const CardList = ()=>{
//     // const [CardData, setCardData] = useState([]);
//     // useEffect(()=>{
//     //     const getdata = async ()=>{
//     //         const data = await fetchServicesProduct();
//     //         // console.log(data.products);
//     //         setCardData(data.products);
//     //     };
//     //     getdata();
//     // },[]);
//     const dispatch = useDispatch();
//     const { allproduct, loading, error } = useSelector((state) => state.allproduct);

//     useEffect(() => {
//         dispatch(fetchAllProducts());
//     }, [dispatch]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return(
//         <>
//             <div className="w-full  h-auto max-w-[1170px] mx-auto">
//                 <div className="container w-full mx-auto">
//                     <div className="flex flex-row items-center justify-center  flex-wrap gap-5 py-5">
//                         {allproduct.length > 0 && allproduct.slice(0, 9).map((data) => (
//                             <Card
//                                 key={data.id}
//                                 id={data.id}
//                                 title={data.title}
//                                 image={data.image}
//                                 description={data.description}
//                                 thumbnail={data.thumbnail}
//                                 name={data.name}
//                                 avatar={data.avatar}
//                                 job={data.job}
//                                 Rating={data.rating}
//                                 Ulasan={data.reviews.length}
//                                 price={data.price}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CardList;
import Card from "../components/CardComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../Redux/AllProduct";
import { HashLoader } from "react-spinners";

const CardList = () => {
    const dispatch = useDispatch();
    const { allproduct, loading, error } = useSelector((state) => state.allproduct);
    const productbuy = useSelector((state) => state.productbuy.productbuy);
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) return <HashLoader color="#ffa30d" className="m-auto" />;
    if (error) return <p>Error: {error}</p>;




    const filteredProducts = allproduct.filter(product => {
        // return !productbuy || productbuy.id !== product.id;
        return !productbuy.some((item) => item.id === product.id);
    });
    console.log(filteredProducts);
    return (
        <div className="w-full h-auto max-w-[1170px] mx-auto">
        <div className="container w-full mx-auto">
            <div className="flex flex-row items-center justify-center flex-wrap gap-5 py-5">
            {filteredProducts.length > 0 &&
                filteredProducts.slice(0, 9).map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        image={data.images}
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
    );
};

export default CardList;
