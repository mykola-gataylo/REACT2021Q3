import React from "react";
import "./app.scss";
import "../../public/img/react.png";
import { SearchField } from "../SearchField/SearchField";

export const App = (): JSX.Element => {
  return (
    <>
      <div className="app">
        <SearchField />
      </div>
    </>
  );
};
