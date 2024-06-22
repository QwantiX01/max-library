import PropTypes from "prop-types";
import "react-router-dom";
import fileIcon from "../assets/file-icon.svg";
import { useNavigate } from "react-router-dom";

BookCard.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
};

function BookCard({ id, path, authorName, title }) {
  const navigate = useNavigate();
  console.log(path);

  function clickEvent() {
    navigate(`/book/${id}`);
  }

  function Card() {
    return (
      <div className="flex items-center" id={id}>
        <div
          onClick={() => clickEvent()}
          className="file-card overflow-hidden h-14 w-full mr-2 bg-mint-light p-2 rounded-xl flex items-center gap-3.5 cursor-pointer hover:bg-mint"
        >
          <img
            src={fileIcon}
            alt="Book image"
            className="bg-mint p-1.5 rounded h-full"
          />
          <div className="flex h-full flex-col">
            <h1 className="font-medium font-serif m-0 ">{title}</h1>
            <p className="text-[10px] font-serif text-[#96734F]">
              {authorName}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return Card();
}

// eslint-disable-next-line react/prop-types

export default BookCard;
