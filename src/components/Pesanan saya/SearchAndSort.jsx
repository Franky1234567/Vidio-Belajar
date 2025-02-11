// components/SearchAndSort.js
import { CiSearch } from "react-icons/ci";

const SearchAndSort = () => {
    return (
        <div className="flex md:gap-4 items-center flex-col md:flex-row">
            <div className="flex items-center w-full border border-gray-300 rounded-xl my-2 h-10">
                <input type="text" className="focus:outline-none ml-4 w-full" />
                <CiSearch className="mx-2" />
            </div>
            <div className="flex items-center w-full border border-gray-300 p-2 rounded-xl my-2">
                <select type="select" className="mx-2">
                    <option value="Semua Pesanan">Urutkan</option>
                </select>
            </div>
        </div>
    );
};

export default SearchAndSort;
