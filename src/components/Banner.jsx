import Button from "./Button";
import PropTypes from "prop-types";
import studyingImage from "../assets/studying.jpg";

const Banner = ({ judul, paragf, ButtonText }) => {
  return (
    <>
      <div className="w-full px-4 py-2 bg-yellow-100 h-auto ">
        <div
          className="container mx-auto bg-cover bg-center h-auto relative md:h-96"
          style={{ backgroundImage: `url(${studyingImage})` }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-5 py-5">
            <h1 className="font-bold py-2 text-white text-center md:text-2xl md:py-5">
              {judul}
            </h1>
            <p className=" text-gray-300 text-center my-5 text-sm md:text-lg">
              {paragf}
            </p>
            <div className="w-full flex  justify-center  md:mt-4">
              <div className="w-auto  md:w-1/2">
                <Button type="button">{ButtonText}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  judul: PropTypes.string.isRequired,
  paragf: PropTypes.string.isRequired,
  ButtonText: PropTypes.string.isRequired,
};

export default Banner;
