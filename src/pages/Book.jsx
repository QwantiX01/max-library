import PropTypes, { func } from "prop-types";
import { Navigate, useParams } from "react-router-dom";
// import { books } from "../dataSource.json";
import BookGallery from "../components/BookGallery.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import heartIcon from "../assets/heart-svgrepo-com.svg";
import Header from "../components/Header.jsx";

Book.propTypes = { id: PropTypes.string };

const setLike = () => {};

function Book() {
  // const { id } = useParams();
  //
  // const getBook = (id) => books.find((value) => value.id === id);
  //
  // let book = getBook(id);
  //
  // if (book == null) return <NotFound />;
  //
  // return (
  //   <div>
  //     <div className="flex align-middle ">
  //       <img src={book.bookImg} alt="FileImage" />
  //       <div>
  //         <p>{book.bookTitle}</p>
  //         <p>{book.author}</p>
  //         <p>{book.bookDescription}</p>
  //         <Button icon={heartIcon ?? ""} action={setLike()}></Button>
  //       </div>
  //     </div>
  //     <Footer />
  //   </div>
  // );
}

//TODO: Implement BookNotFound Page
const NotFound = () => {
  return <div>Not found</div>;
};

export default Book;
