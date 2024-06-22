import PropTypes from "prop-types";
import "react-router-dom";
import folderIcon from "../assets/folder-icon.svg";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

FolderCard.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
};

function FolderCard({ id, path }) {
  const navigate = useNavigate();
  console.log(path);

  function clickEvent() {
    navigate(`/books?p=${path}`);
  }

  return (
    <div className="flex items-center" id={id}>
      <div
        onClick={() => clickEvent()}
        className="file-card overflow-hidden h-14 w-full mr-2 bg-mint-light p-2 rounded-xl flex items-center gap-3.5 cursor-pointer hover:bg-mint"
      >
        <img
          src={folderIcon || ""}
          alt="Folder image"
          className="bg-mint p-1.5 rounded h-full"
        />
        <div className="flex h-full flex-col">
          <h1 className="font-medium font-serif m-0 ">{path}</h1>
        </div>
      </div>
    </div>
  );
}

export default FolderCard;
