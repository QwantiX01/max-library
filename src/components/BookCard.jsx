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
  currentPath: PropTypes.string,
};

function BookCard({ id, type, bookTitle, currentPath, path, author }) {
  const navigate = useNavigate();

  function clickEvent() {
    if (type === "fol") {
      if (currentPath === "") {
        navigate(`/books?p=/${currentPath + path}`);
      } else {
        navigate(`/books?p=${currentPath}/${path}`);
      }
    } else {
      navigate(`/book/${id}`);
    }
  }

  return (
    <div className="flex items-center">
      <div
        onClick={() => clickEvent()}
        className="file-card overflow-hidden h-14 w-full mr-2 bg-mint-light p-2 rounded-xl flex items-center gap-3.5 cursor-pointer hover:bg-mint"
      >
        <img
          src={type === "fol" ? folderIcon : fileIcon ?? ""}
          alt="Book image"
          className="bg-mint p-1.5 rounded h-full"
        />
        <div className="flex h-full flex-col">
          <h1 className="font-medium font-serif m-0 ">
            {type === "fol" ? path : bookTitle}
          </h1>
          <p className="text-[10px] font-serif text-[#96734F]">{author}</p>
        </div>
      </div>
      <div className="h-10 ml-auto">
        <Button icon={heartIcon ?? ""}></Button>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types

export default BookCard;
