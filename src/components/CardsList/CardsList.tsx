import React from "react";
import Card from "../Card/Card";
import dogs from "../Card/dogs";

import "./_cards-list.scss";

const CardsList = (): JSX.Element => {
  return (
    <ul className="cards-list">
      {dogs.map((dog) => {
        return (
          <Card
            id={dog.id}
            imgSrc={dog.imgSrc}
            name={dog.name}
            age={dog.age}
            sex={dog.sex}
            breed={dog.breed}
            size={dog.size}
            key={dog.id}
          />
        );
      })}
    </ul>
  );
};

export default CardsList;
