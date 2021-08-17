import React from "react";

import SearchInput from "../SearchInput/SearchInput";
import SearchButton from "../SearchButton/SearchButton";

import "./_search-form.scss";

const SearchForm = (): JSX.Element => {
  return (
    <>
      <form className="search-form" action="">
        <SearchInput />
        <SearchButton />
      </form>
    </>
  );
};

export default SearchForm;
