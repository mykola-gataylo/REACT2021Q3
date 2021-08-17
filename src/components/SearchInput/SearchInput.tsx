import React from "react";
import "./_search-input.scss";
import "../../public/img/react.png";

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
