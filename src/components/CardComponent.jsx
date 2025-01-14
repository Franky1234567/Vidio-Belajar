import PropTypes from 'prop-types';

const Card =({ Title, thumbnail, deskripsi, avatar, name, job, Rating,Ulasan,price})=>{

    return(
        <>
            <div className="w-72 px-3 bg-white py-5 drop-shadow-lg hover:scale-110 transition-transform delay-75 ">
               <div className='flex md:flex-col '>
                    <div>
                        <img src={thumbnail} className='w-32 h-28 object-cover md:h-auto md:w-auto'/>
                    </div>
                    <div>
                        <div>
                            <div className="md:text-2xl text-left font-bold md:py-5 px-2">{Title}</div>
                        </div>
                        <div className='hidden md:block text-left'>{deskripsi}</div>
                        <div className='flex gap-3 px-1'>
                            <div className='w-10 md:w-12 my-auto py-4 md:py-2'>
                                <img src={avatar}/>
                            </div>
                            <div className='text-sm text-left py-2 h-12 md:h-auto overflow-hidden'>
                                {name}<br/>
                               <span className=''>{job}</span> 
                            </div>
                        </div>
                    </div>
               </div>
                <div className='flex gap-3 px-4 justify-between'>
                    <div className='w-14'>
                        <img src={Rating}/>
                    </div>
                    <div className='pt-4'>
                        <p className='underline'>{Ulasan}</p>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-green-600 font-bold underline'>{price}</h3>
                    </div>
                </div>
                
            </div>
        </>
    )
};


Card.propTypes ={
    Title: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired,
    Ulasan: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired

}

export default Card;