import React from "react";
import "./_search-input.scss";

const SearchInput = (): JSX.Element => {
  return (
    <>
      <input
        className="search-input"
        placeholder="Search..."
        type="search"
        id="searchInput"
        autoComplete="off"
      />
    </>
  );
};

export default SearchInput;
