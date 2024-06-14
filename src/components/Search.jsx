import searchIcon from "../assets/search-svgrepo-com.svg";

function Search() {
  return (
    <div className="flex">
      <div className="rounded-l-xl bg-[#D8EFD3] h-full aspect-square p-2.5">
        <img src={searchIcon} alt="search icon" />
      </div>
      <input
        className="border-0 outline-0 rounded-r-xl bg-[#D8EFD3] h-full placeholder:text-[#55AD9B] font-serif "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
