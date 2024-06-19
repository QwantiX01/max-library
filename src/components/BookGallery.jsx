import BookCard from "./BookCard.jsx";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import data from "../dataSource.json";
import dataBooks from "../dataBooks.json";

const getBooks = (path) => {
  let pathParts = path.split("/");
  let currentFolder = data.docs;
  let rootFolderPath = data.path;

  for (let i = 0; i < pathParts.length; i++) {
    if (i === 0) {
      continue;
    }

    currentFolder = currentFolder.find(
      (f) => f.isFile === false && f.path === pathParts[i],
    ).docs;
  }
  return [currentFolder, rootFolderPath];
};

function BookGallery() {
  const [searchParams] = useSearchParams();
  const [contextPositionX, setContextPositionX] = useState();
  const [contextPositionY, setContextPositionY] = useState();
  const [isMenuShown, setIsMenuShown] = useState(false);

  document.body.addEventListener("click", (e) => {
    let elements = document.getElementsByClassName("ctx-menu");
    for (let i = 0; i < elements.length; i++) {
      if (!elements.item(i).contains(e.target)) {
        setIsMenuShown(false);
      }
    }
  });

  function contextMenu(e) {
    e.preventDefault();

    let elements = document.getElementsByClassName("file-card");
    for (let i = 0; i < elements.length; i++) {
      if (elements.item(i).contains(e.target)) {
        if (document.getElementById("ctx-menu") !== null) {
          setIsMenuShown(false);
          document.getElementById("ctx-menu").remove();
        }

        setContextPositionY(e.clientY);
        setContextPositionX(e.clientX);
        setIsMenuShown(true);
      }
    }
  }

  let path = searchParams.get("p");
  if (path === undefined || path === null) path = "";

  let [bookList, rootFolderPath] = getBooks(path);
  return (
    <main
      onContextMenu={(e) => contextMenu(e)}
      className=" py-10 bg-mint-pale min-h-[90vh]"
    >
      <ContextMenu
        positionY={contextPositionY}
        positionX={contextPositionX}
        isShown={isMenuShown}
        setIsShown={setIsMenuShown}
      />

      <div className="bg-mint-very-light shadow-md rounded-lg px-12 py-8 m-auto h-full  w-max">
        <p className="font-serif text-2xl font-bold mb-3">{`/${rootFolderPath}${path}`}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookList.map((value, index) => (
            <BookCard {...value} currentPath={path} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ContextMenu({ positionY, positionX, isShown, setIsShown }) {
  function ContextOption({ event, children }) {
    return (
      <button
        onClick={() => {
          event();
          setIsShown(false);
        }}
        className="bg-mint-light hover:bg-mint-dark hover:text-white px-2 rounded text-start"
      >
        {children}
      </button>
    );
  }

  function openDocument() {}

  return (
    isShown && (
      <div
        className={"ctx-menu"}
        style={{ position: "fixed", left: positionX + 12, top: positionY }}
      >
        <div className="w-max min-h-8 p-1.5 rounded-lg shadow-md bg-mint">
          <div className="flex flex-col gap-1 justify-center">
            <ContextOption event={() => openDocument()}>Open</ContextOption>
            <ContextOption event={() => {}}>Like</ContextOption>
            <ContextOption event={() => {}}>Save</ContextOption>
            <ContextOption event={() => {}}>Delete</ContextOption>
          </div>
        </div>
      </div>
    )
  );
}

export default BookGallery;
