import BookCard from "./BookCard.jsx";
import { useSearchParams } from "react-router-dom";
import data from "../dataSource.json";
import { useState } from "react";

function BookGallery() {
  const [searchParams] = useSearchParams();
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();
  const [isShown, setIsShown] = useState(false);

  document.body.addEventListener("click", (e) => {
    console.log(isShown);
    console.log(e.target);

    let elements = document.getElementsByClassName("ctx-menu");
    for (let i = 0; i < elements.length; i++) {
      if (!elements.item(i).contains(e.target)) {
        setIsShown(false);
      }
    }
  });
  function contextMenu(e) {
    e.preventDefault();

    let elements = document.getElementsByClassName("file-card");
    for (let i = 0; i < elements.length; i++) {
      if (elements.item(i).contains(e.target)) {
        if (document.getElementById("ctx-menu") !== null) {
          setIsShown(false);
          document.getElementById("ctx-menu").remove();
        }

        setPosY(e.clientY);
        setPosX(e.clientX);
        setIsShown(true);
      }
    }
  }

  let path = searchParams.get("p");
  if (path === undefined || path === null) path = "";

  const getBooks = (path) => {
    let pathParts = path.split("/");

    let currentFolder = data.docs;
    let rootFolderPath = data.path;

    for (let i = 0; i < pathParts.length; i++) {
      if (i === 0) continue;

      currentFolder = currentFolder.find(
        (f) => f.type === "fol" && f.path === pathParts[i],
      ).docs;
    }

    return [currentFolder, rootFolderPath];
  };

  let [bookList, rootFolderPath] = getBooks(path);

  return (
    <main
      onContextMenu={(e) => contextMenu(e)}
      className="px-20  lg:px-40 py-10 bg-[#FCFAF7] h-[100vh]"
    >
      <ContextMenu positionY={posY} positionX={posX} isShown={isShown} />
      <p className="font-serif text-2xl font-bold mb-3">{`/${rootFolderPath}${path}`}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {bookList.map((value, index) => (
          <BookCard {...value} currentPath={path} key={index} />
        ))}
      </div>
    </main>
  );
}

function ContextMenu({ positionY, positionX, isShown }) {
  console.log([positionX, positionY, isShown]);
  return (
    isShown && (
      <div
        className={"ctx-menu"}
        style={{ position: "fixed", left: positionX, top: positionY }}
      >
        <p>Pizza</p>
      </div>
    )
  );
}

export default BookGallery;
