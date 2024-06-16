import instLogo from "../assets/instagram.svg";
import siteLogo from "../assets/site.svg";
import fbLogo from "../assets/facebook.svg";
import tiktokLogo from "../assets/tiktok.svg";

function Footer() {
  return (
    <footer className="shadow bg-mint-dark border-t-2 border-mint-light  py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-4">
        <a
          href="http://lfkhp.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mint-light hover:text-white transition duration-200"
        >
          <img className="h-6 w-6" src={siteLogo || ""} alt="Site" />
        </a>
        <a
          href="https://www.instagram.com/lfkhpp_marketing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mint-light hover:text-white transition duration-200"
        >
          <img className="h-6 w-6" src={instLogo || ""} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/groups/1716022198690186"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mint-light hover:text-white transition duration-200"
        >
          <img className="h-6 w-6" src={fbLogo || ""} alt="Facebook" />
        </a>
        <a
          href="https://www.tiktok.com/@lfkhppnuht"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mint-light hover:text-white transition duration-200"
        >
          <img className="h-6 w-6" src={tiktokLogo || ""} alt="Tiktok" />
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-mint-light text-sm mt-4">
          &copy; 2024 Reedly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
