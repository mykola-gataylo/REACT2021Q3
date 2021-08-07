/* eslint-disable react/require-render-return */
import React, { ReactNode } from "react";
import "./_search-form.scss";
import "../../public/img/react.png";
import { SearchInput } from "../SearchInput/SearchInput";
import { SearchButton } from "../SearchButton/SearchButton";

export class SearchForm extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderSearchInput(): ReactNode {
    return <SearchInput />;
  }

  // eslint-disable-next-line class-methods-use-this
  renderSearchButton(): ReactNode {
    return <SearchButton />;
  }

  render(): ReactNode {
    this.renderSearchInput();
    this.renderSearchButton();

    return (
      <>
        <form className="search-form" action="">
          {this.renderSearchInput()}
          {this.renderSearchButton()}
        </form>
      </>
    );
  }
}

// export const SearchForm = (): JSX.Element => {
//     // return (
//   <>
//     <form className="search-form" action="">
//       <SearchInput />
//       <SearchButton />
//     </form>
//   </>
// );
// }
