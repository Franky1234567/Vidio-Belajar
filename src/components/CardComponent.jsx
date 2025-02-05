import PropTypes from "prop-types";
import {Link } from 'react-router-dom';

const Card = ({id, title,thumbnail,job,description,name,Rating,Ulasan,price,}) => {
    const displayJob = job || "Nakuntansi";
    return (
    <>
        <div className="w-80 px-3 bg-white py-5 drop-shadow-lg hover:scale-110 transition-transform delay-75 rounded-lg border">
            <Link to={`/detail/${id}`}>
            <div className="flex md:flex-col">
                <div>
                <img
                    src={thumbnail}
                    className="w-32 h-28 object-cover md:h-auto md:max-w-32 mx-auto"
                    alt={title}
                />
                </div>
                <div>
                <div>
                    <div className="md:text-2xl text-left font-bold md:py-5 px-2">
                    {title.substring(0, 20) + "..."}
                    </div>
                </div>
                <div className="hidden md:block text-left">{description.substring(0, 65) + "..."}</div>
                <div className="flex gap-3 px-1">
                    <div className="w-10 md:w-12 my-auto py-4  md:py-2">
                    <img src="https://miro.medium.com/v2/resize:fit:2400/1*6_oHYdP-4Zvszbey6ZBw0w.jpeg" alt={name} className="rounded-lg" />
                    </div>
                    <div className="text-sm text-left py-2 h-12 md:h-auto overflow-hidden">
                    <span className="">john doe</span>
                    <br />
                    <span className="">{displayJob}</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex gap-3 px-4 justify-between">
                <div className="w-14 pt-4">
                    
                    <img src="https://www.pngmart.com/files/7/Rating-Star-PNG-Background-Image.png" alt={name} className="rounded  mt-2" />
                </div>
                <div className="pt-4">
                    <p className="underline">{Rating}({Ulasan})</p>
                    <p className=""></p>
                </div>
                <div className="pt-4">
                    <h3 className="text-green-600 font-bold">{price}</h3>
                </div>
            </div>
            </Link>
        </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.func,
  job: PropTypes.string,
  Rating: PropTypes.number.isRequired,
  Ulasan: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;