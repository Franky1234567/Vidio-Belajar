
import PropTypes from 'prop-types';
import studyingImage from '../assets/studying.jpg';
import Button from './Button';

const BannerWithSubscribe = ({ judul, paragf, inputPlaceholder, subscribeText }) => {
  return (
    <div className="w-full px-4 py-2 bg-yellow-100 h-auto">
      <div className="container mx-auto bg-cover bg-center h-auto relative md:h-96" style={{ backgroundImage: `url(${studyingImage})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-5 py-5">
          <h1 className="text-xl text-white">NEWSLETTER</h1>
          <h1 className="font-bold py-2 text-white text-center md:text-2xl md:py-5">{judul}</h1>
          <p className="text-gray-300 text-center text-sm md:text-lg">{paragf}</p>
          <div className="w-full flex justify-center md:mt-4">
            <div className="w-auto flex flex-col  md:flex-row md:bg-white  rounded-lg">
              <div>

                <input
                  type="text"
                  placeholder={inputPlaceholder}
                  className="w-2/3 p-3 rounded-lg  focus:outline-none my-3 md:my-auto"
                />
              </div>
              <div className='w-2/3 md:w-auto mx-auto'>
                <Button type="button">{subscribeText}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerWithSubscribe.propTypes = {
  judul: PropTypes.string.isRequired,
  paragf: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  subscribeText: PropTypes.string.isRequired,
};

export default BannerWithSubscribe;
