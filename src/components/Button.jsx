import PropTypes from 'prop-types';

const Button = ({type="button",onClick,children, color='green'})=> {
    const colorClasses = { 
        blue: "bg-blue-500 hover:bg-blue-700", 
        red: "bg-red-500 hover:bg-red-700", 
        green: "bg-green-500 hover:bg-green-700 text-white", 
        white: "bg-white hover:bg-gray-200 text-gray-700",
        yellow: "bg-yellow-500 hover:bg-yellow-700" };
    return (
        <>
            <button type={type} onClick={onClick} className={`${colorClasses[color]} font-medium py-2 px-4 my-1  w-full rounded-lg `} > 
            {children} 
            </button>
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow', 'white'])
}


export default Button;