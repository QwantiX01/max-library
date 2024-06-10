import searchIcon from "../assets/search-svgrepo-com.svg";

function Search() {
  return (
    <div className="flex">
      <div className="rounded-l-xl bg-[#F2EDE8] h-full aspect-square p-2.5">
        <img src={searchIcon} alt="search icon" />
      </div>
      <input
        className="border-0 outline-0 rounded-r-xl bg-[#F2EDE8] h-full placeholder:text-[#96734F] font-serif "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
