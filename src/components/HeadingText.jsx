import PropTypes from 'prop-types';

const Headingtext =({text,textP})=>{
    return(
        <>
        <div className='w-full bg-yellow-100 md:px-5 py-5 h-auto '>
            <div className='container mx-auto w-full px-5 xl:mx-auto'>
                <h1 className='font-bold text-lg text-left  md:text-3xl lg:mx-auto' >{text}</h1>
                <p className='text-left'>{textP}</p>
            </div>

        </div>
        </>
    )
};

Headingtext.propTypes={
    text:PropTypes.string.isRequired,
    textP:PropTypes.string.isRequired
};

export default Headingtext;