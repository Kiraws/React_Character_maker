import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button className="selecbutton" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
