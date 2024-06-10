import PropTypes from "prop-types";
import "react-router-dom";
import folderIcon from "../assets/folder-icon.svg";
import fileIcon from "../assets/file-icon.svg";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button.jsx";
import heartIcon from "../assets/heart-svgrepo-com.svg";
import { useState } from "react";

BookCard.propTypes = {
  id: PropTypes.string,
  isFile: PropTypes.bool,
  bookTitle: PropTypes.string,
  author: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string,
};

const setLike = () => {};

function BookCard({ id, type, bookTitle, path, author }) {
  const navigate = useNavigate();
  // const [redirect, setRedirect] = useState();
  //
  // if (redirect) {
  //   if (type === "fol") {
  //     return <Navigate to={`/books?p=/asd`} />;
  //   } else {
  //     return <Navigate to={`/book/${id}`} />;
  //   }
  // }

  function redirect() {
    if (type === "fol") {
      navigate(`/books?p=/${path}`);
    } else {
      navigate(`/book/${id}`);
    }
  }

  return (
    <div className="flex items-center">
      <div
        onClick={() => redirect()}
        className="overflow-hidden h-14 w-full mr-2 bg-[#F9F4EF] p-2 rounded-xl flex items-center gap-3.5 cursor-pointer hover:bg-[#f2EDE8]"
      >
        <img
          src={type === "fol" ? folderIcon : fileIcon ?? ""}
          alt="Book image"
          className="bg-[#EBE5E0] p-1.5 rounded h-full"
        />

        <div className="flex h-full flex-col">
          <h1 className="font-medium font-serif m-0 ">{bookTitle}</h1>
          <p className="text-[10px] font-serif text-[#96734F]">{author}</p>
        </div>
      </div>
      <div className="h-10 ml-auto">
        <Button icon={heartIcon ?? ""} action={setLike()}></Button>
      </div>
    </div>
  );
}

export default BookCard;
