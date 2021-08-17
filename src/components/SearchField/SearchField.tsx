import React from "react";
import "./_search-field.scss";
import "../../public/img/react.png";
import SearchForm from "../SearchForm/SearchForm";

const SearchField = (): JSX.Element => {
  return (
    <>
      <div className="search-field">
        <SearchForm />
      </div>
    </>
  );
};

export default SearchField;
