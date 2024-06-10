import BookCard from "./BookCard.jsx";
import { useSearchParams } from "react-router-dom";
import data from "../dataSource.json";

function BookGallery() {
  // console.log(
  //   data.docs.map((doc) => {
  //     console.log(doc);
  //   }),
  // );
  const [searchParams, setSearchParams] = useSearchParams();
  let path = searchParams.get("p");

  if (path === undefined || path === null) path = "";

  //TODO: Back-end:add function to get books by folder
  const getBooks = (path) => {
    let pathParts = path.split("/");
    for (let i = 0; i < pathParts.length; i++) {
      pathParts[i] = pathParts[i] + "/";
    }

    //TODO: Дописати "ХУЙ"
    console.log(pathParts);

    let folder;

    if (pathParts.length === 1) {
      return data.docs;
    }

    for (let i = 0; i < pathParts.length; i++) {
      if (i === 0) {
        folder = data.docs;
        continue;
      }

      folder = folder.filter(
        (x) => x.type === "fol" && x.path === pathParts[i],
      )[0].docs;
    }
    console.log(folder);
    return folder;
  };

  let bookList = getBooks(path);

  console.log(bookList);
  console.log(typeof bookList);

  return (
    <main className="px-20  lg:px-40 py-10 bg-[#FCFAF7] h-[100vh]">
      <p className="font-serif text-2xl font-bold mb-3">{`/${path}`}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {bookList.map((value, index) => (
          <BookCard {...value} key={index} />
        ))}
      </div>
    </main>
  );
}

export default BookGallery;
