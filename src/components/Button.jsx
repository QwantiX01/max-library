import PropTypes from "prop-types";

Button.propTypes = {
  icon: PropTypes.string,
  action: PropTypes.func,
};

function Button({ icon, action }) {
  return (
    <button
      onClick={action}
      className="h-full aspect-square p-2 bg-[#F2EDE8] rounded-xl hover:bg-[#E1D6CA]"
    >
      <img className="" src={icon} alt={icon} />
    </button>
  );
}

export default Button;
