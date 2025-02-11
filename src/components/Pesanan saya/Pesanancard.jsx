// components/PesananCard.js
import PropTypes from 'prop-types';

const PesananCard = ({ productData, onDelete, timebuy }) => {
    const { title, price, images, id } = productData;

    if (!images || images.length === 0) {
        return <p>Gambar produk tidak tersedia.</p>;
    }

    return (
        <div className="border border-gray-300 rounded-lg mb-5">
            <div className="flex justify-between px-5 flex-col md:flex-row text-left border bg-green-50 text-gray-500">
                <div className="flex gap-2 items-center w-full md:w-2/3 justify-between">
                    <h1>No.Invoice: 123456</h1>
                    <h1>Waktu Pembayaran: {timebuy}</h1>
                </div>
                <div className="bg-green-100 text-green-600 py-1 px-3 rounded-lg text-sm my-2">
                    <button
                        type="button"
                        onClick={() => onDelete(id)}
                        className="items-center"
                    >
                        Berhasil
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-5 flex-col md:flex-row justify-between p-5">
                <div className="flex items-center ">
                    <img src={images[0]} alt={title} className="w-16" />
                    <h2 className="font-bold ml-3">{title}</h2>
                </div>
                <div className="border-l-2 items-center p-5">
                    <p>Harga:</p>
                    <p className="font-bold text-lg">Rp.{price}</p>
                </div>
            </div>
            <div className="flex items-center gap-5 flex-col md:flex-row justify-between py-2 px-5 border bg-green-50">
                <h1 className="text-gray-500">Total Pembayaran</h1>
                <h1 className="font-bold text-lg text-green-600">Rp.{price}</h1>
            </div>
        </div>
    );
};


PesananCard.propTypes = {
    productData: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    timebuy: PropTypes.string.isRequired,
};


export default PesananCard;
