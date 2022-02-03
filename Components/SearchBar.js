function SearchBar({ ...rest }) {
  return (
    <div className="flex  flex-wrap mb-10 items-center w-50 h-5 justify-center ">
      <input
        className=" h-[50px] w-[400px] text-center border-4 border-blue-900 focus:border-none rounded-md"
        type="text"
        placeholder="Search for the Pet"
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
