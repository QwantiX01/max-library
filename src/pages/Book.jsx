import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
//import data from "../dataSource.json";
import dataBooks from "../dataBooks.json";
// import Button from "../components/Button.jsx";
// import heartIcon from "../assets/heart-svgrepo-com.svg";

Book.propTypes = { id: PropTypes.string };

// const setLike = () => {};

function Book() {
  const { id } = useParams();

  // let book = data.docs.find((value) => value.id === id);
  let books = dataBooks.books.find((value) => value.id === id);

  if (books == null) return <NotFound />;

  return (
    <div className="bg-mint-pale py-8 flex gap-12 items-start h-[100vh] px-52">
      <div className="bg-mint-very-light shadow-md rounded-lg px-12 py-8 mx-auto h-full flex-1">
        <div className="flex align-middle "></div>
      </div>

      <div className="bg-mint-very-light shadow-md rounded-lg px-12 py-8 mx-auto h-full w-max">
        <div className="flex flex-col align-middle gap-8">
          <img
            className="rounded-xl shadow-md aspect-[4/5] object-cover max-h-72"
            src={books.bookImg}
            alt="FileImage"
          />
          <div>
            <p className="text-2xl font-bold">{books.bookTitle}</p>
            <p>{books.author}</p>
            <p className="text-gray-600">{books.bookDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//TODO: Implement BookNotFound Page
const NotFound = () => {
  return <div>Not found</div>;
};

export default Book;
