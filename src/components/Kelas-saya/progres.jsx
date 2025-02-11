import proptypes from "prop-types";

const ProgressKelas = ({ progress = 100 }) => {
  return (
    <div className="p-5 rounded-lg shadow-md flex items-center justify-between w-full flex-col md:flex-row gap-5">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Progres Kelas: {progress}%</span>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-orange-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="border border-green-500 text-green-500 py-2 px-4 rounded-md hover:bg-green-100">
          Unduh Sertifikat
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
          Lihat Detail Kelas
        </button>
      </div>
    </div>
  );
};

ProgressKelas.propTypes = {
  progress: proptypes.number,
};

export default ProgressKelas;
