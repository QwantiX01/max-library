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
      className="px-20 lg:px-40 py-10 bg-[#F1F8E8] h-[100vh]"
    >
      <ContextMenu
        positionY={posY}
        positionX={posX}
        isShown={isShown}
        setIsShown={setIsShown}
      />
      <p className="font-serif text-2xl font-bold mb-3">{`/${rootFolderPath}${path}`}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {bookList.map((value, index) => (
          <BookCard {...value} currentPath={path} key={index} />
        ))}
      </div>
    </main>
  );
}

function ContextMenu({ positionY, positionX, isShown, setIsShown }) {
  function closePop() {
    setIsShown(false);
  }

  return (
    isShown && (
      <div
        className={"ctx-menu"}
        style={{ position: "fixed", left: positionX, top: positionY }}
      >
        <div className="w-32 min-h-8 p-1 rounded-lg bg-[#E1D6CA]">
          <div className="flex flex-col gap-1 justify-center">
            <div
              onClick={() => closePop()}
              className="bg-[#c4c0bb] hover:bg-[#aba7a2] px-1.5 rounded"
            >
              1
            </div>
            <div
              onClick={() => closePop()}
              className="bg-[#c4c0bb] hover:bg-[#aba7a2] px-1.5 rounded"
            >
              1
            </div>
            <div
              onClick={() => closePop()}
              className="bg-[#c4c0bb] hover:bg-[#aba7a2] px-1.5 rounded"
            >
              1
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default BookGallery;
