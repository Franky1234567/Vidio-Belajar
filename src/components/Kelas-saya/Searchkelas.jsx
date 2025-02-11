import { CiSearch } from "react-icons/ci";

const Searchkelas = () => {
    return(
        <>
            <div className="flex items-center w-auto md:w-auto bg-white border border-gray-300 rounded-xl my-2 h-10">
                <input type="text" className="focus:outline-none ml-4 w-full" />
                <CiSearch className="mx-2" />
            </div>
        </>
    )
}

export default Searchkelas;