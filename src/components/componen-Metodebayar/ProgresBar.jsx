import { useSelector } from 'react-redux';
// import { nextStep, prevStep } from '../../Redux/progresbarslice';

const Progresbar = () => {
    // const step = useSelector((state) => state.progressbar.step);
    const step = useSelector((state) => state.progresbar.step);
    return(
        <>
            <div className="w-full flex items-center justify-between mb-6 max-w-[1170px] mx-auto mt-6">
                    <div className={`flex items-center justify-center w-1/3`}>
                        <div className={`w-6 h-6 rounded-full border-2 ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'} text-white flex items-center justify-center`}>
                            1
                        </div>
                        <p className={`my-auto ml-2 ${step >= 1 ? 'text-green-500' : 'text-gray-300'}`}>pilih metode</p>
                        {/* <div className={`h-1 w-24 ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div> */}
                        
                    </div>

                    {/* Step 2 */}
                    <div className={`flex items-center justify-center w-1/3`}>
                        <div className={`h-1 w-2 md:w-16 ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={`w-6 h-6 rounded-full border-2 ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'} text-white flex items-center justify-center`}>
                            2
                        </div>
                        <p className={`my-auto ml-2 ${step >= 2 ? 'text-green-500' : 'text-gray-300'} `}>Bayar</p>
                        
                    </div>

                    {/* Step 3 */}
                    <div className={`flex items-center justify-center w-1/3`}>
                        <div className={`h-1 w-2 md:w-16 ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={`w-6 h-6 rounded-full border-2 ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'} text-white flex items-center justify-center`}>
                            3
                        </div>
                        <p className={`my-auto ml-2 ${step >= 3 ? 'text-green-500' : 'text-gray-300'} `}>Selesai</p>
                    </div>
            </div>
        </>
    )
};

export default Progresbar;