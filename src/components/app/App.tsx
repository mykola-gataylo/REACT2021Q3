import React from "react";

import SearchField from "../SearchField/SearchField";
import CardsList from "../CardsList/CardsList";

import "./_app.scss";

const App = (): JSX.Element => {
  return (
    <>
      <div className="app">
        <SearchField />
        <CardsList />
      </div>
    </>
  );
};

export default App;
