import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "./BookCard.jsx";
import FolderCard from "./FolderCard.jsx";

function BookGallery() {
  const [contextPositionX, setContextPositionX] = useState();
  const [contextPositionY, setContextPositionY] = useState();
  const [showFolders, setShowFolders] = useState(true);
  const [showFiles, setShowFiles] = useState(true);

  const [isMenuShown, setIsMenuShown] = useState(false);

  const [searchParams] = useSearchParams();
  let path = searchParams.get("p");
  if (path === undefined || path === null) path = "";

  const useFoldersAndFiles = () => {
    const [searchParams] = useSearchParams();
    let path = searchParams.get("p");
    if (path === undefined || path === null) path = "";

    const fetchFoldersAndFiles = async () => {
      if (path === "" || path === "/") {
        const response = await fetch("https://localhost:7267/getrootfolder", {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      } else {
        const response = await fetch("https://localhost:7267/getfolder", {
          method: "POST",
          body: `"${path}"`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
    };

    return useQuery({
      queryKey: ["data", path],
      queryFn: fetchFoldersAndFiles,
      placeholderData: {
        folders: [],
        files: [],
      },
      onError: (error) => {
        console.error("Query error:", error);
      },
    });
  };

  const { isPending, error, data } = useFoldersAndFiles();

  if (isPending) {
    return "waiting...";
  }

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

  return (
    <main
      onContextMenu={(e) => contextMenu(e)}
      className=" py-10 bg-mint-pale w-full min-h-[90vh]"
    >
      <ContextMenu
        positionY={contextPositionY}
        positionX={contextPositionX}
        isShown={isMenuShown}
        setIsShown={setIsMenuShown}
      />

      <div className="bg-mint-very-light shadow-md rounded-lg px-12 py-8 m-auto h-full w-max">
        <p className="font-serif text-2xl font-bold mb-3">{`/${path}`}</p>
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => {
              setShowFolders(!showFolders);
            }}
            className={`${!showFolders ? "p-1 px-2 rounded-md hover:bg-mint bg-mint-light" : "p-1 px-2 rounded-md hover:bg-mint bg-mint"} `}
          >
            Folder
          </button>
          <button
            onClick={() => {
              setShowFiles(!showFiles);
            }}
            className={`${!showFiles ? "p-1 px-2 rounded-md hover:bg-mint bg-mint-light" : "p-1 px-2 rounded-md hover:bg-mint bg-mint"} `}
          >
            File
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {showFiles &&
            data.files.map((file, index) => <BookCard {...file} key={index} />)}
          {showFolders &&
            data.folders.map((file, index) => (
              <FolderCard {...file} key={index} />
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
