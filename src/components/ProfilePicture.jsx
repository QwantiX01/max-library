import Account from "../pages/Account.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

ProfilePicture.propTypes = {
  picture: PropTypes.string,
};

function ProfilePicture({ picture }) {
  return (
    <div>
      <Link to={Account}>
        <img src={picture} alt="User pp" />
      </Link>
    </div>
  );
}

export default ProfilePicture;
