import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Book from "./pages/Book.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BookGallery from "./components/BookGallery.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />

        <Route path="/books/" element={<BookGallery />}>
          <Route path=":path" element={<BookGallery />} />
        </Route>

        <Route path="/book">
          <Route path=":id" element={<Book />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
