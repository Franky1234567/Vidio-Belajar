import PropTypes from 'prop-types';

const Alert = ({ message, type, onClose }) => {
  const alertClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  const alertClass = alertClasses[type] || alertClasses.info;

  return (
    <div className={`fixed top-5 right-5 max-w-sm w-full p-4 rounded-lg shadow-lg ${alertClass} flex items-center space-x-3`}>
      <span className="font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-xl font-semibold text-white hover:text-gray-200"
      >
        &times;
      </button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
