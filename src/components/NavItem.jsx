
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ text, to }) => {
  return (
    <div>
        <NavLink to={to} className=' text-gray-700 hover:text-blue-500 px-2 py-2 text-sm font-medium hover:border-b-4 border-orange-400 md:px-5 md:pt-2 md:pb-9'>
          {text}
        </NavLink>
    </div>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
