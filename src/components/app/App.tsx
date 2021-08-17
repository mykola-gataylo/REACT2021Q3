import React from "react";
import "./_app.scss";
import "../../public/img/react.png";
import SearchField from "../SearchField/SearchField";

const App = (): JSX.Element => {
  return (
    <>
      <div className="app">
        <SearchField />
      </div>
    </>
  );
};

export default App;
