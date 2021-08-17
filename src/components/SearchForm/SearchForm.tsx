import React from "react";
import "./_search-form.scss";
import "../../public/img/react.png";
import SearchInput from "../SearchInput/SearchInput";
import SearchButton from "../SearchButton/SearchButton";

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
