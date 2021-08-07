import React, { ReactNode } from "react";
import "./_search-field.scss";
import "../../public/img/react.png";
import { SearchForm } from "../SearchForm/SearchForm";

export class SearchField extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderSearchForm(): ReactNode {
    return <SearchForm />;
  }

  render(): ReactNode {
    return (
      <>
        <div className="search-field">{this.renderSearchForm()}</div>
      </>
    );
  }
}

// export const SearchField = (): JSX.Element => {
//   return (
//     <>
//       <div className="search-field">
//         <SearchForm />
//       </div>
//     </>
//   );
// }
