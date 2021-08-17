import React from "react";

import SearchForm from "../SearchForm/SearchForm";

import "./_search-field.scss";

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
