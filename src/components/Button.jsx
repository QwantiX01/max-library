import PropTypes from "prop-types";

Button.propTypes = {
  icon: PropTypes.string,
  action: PropTypes.func,
};

function Button({ icon, action }) {
  return (
    <button
      onClick={action}
      className="h-full aspect-square p-2 bg-[#D8EFD3] rounded-xl hover:bg-[#95D2B3]"
    >
      <img className="" src={icon} alt={icon} />
    </button>
  );
}

export default Button;
