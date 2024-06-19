import Search from "./Search.jsx";
import Button from "./Button.jsx";
import profileIcon from "../assets/accountSvg.svg";
import heartIcon from "../assets/heart-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleAccountNavigation = () => {
    navigate("/account");
  };

  function showLikes() {}

  return (
    <header className="h-16 w-full bg-mint-pale flex items-center justify-between px-16 py-3 border-b-2 border-mint-light ">
      {/*Logo*/}
      <Link to="/" className="text-xl font-serif font-bold">
        <p>Reedly</p>
      </Link>
      {/*Controls*/}
      <div className=" h-full flex gap-8">
        {/*Search*/}
        <Search />
        {/*Buttons*/}
        <div className="h-full flex gap-2">
          <Button action={handleAccountNavigation} icon={profileIcon || ""} />
          <Button action={handleAccountNavigation} icon={heartIcon} />
        </div>
      </div>
    </header>
  );
}
export default Header;
