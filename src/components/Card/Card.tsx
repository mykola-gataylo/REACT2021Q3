import React from "react";

import "./_card.scss";

interface Dogs {
  id: number;
  imgSrc: string;
  name: string;
  age: string;
  sex: string;
  breed: string;
  size: string;
}

const Card: React.FC<Dogs> = ({
  id,
  imgSrc,
  name,
  age,
  sex,
  breed,
  size,
}: Dogs) => {
  return (
    <div className="card">
      <img src={`../../public/img/${imgSrc}`} alt="dog" />

      <div className="card__info-block">
        <h2 className="card__name">Name: {name} </h2>
        <p className="card__age">Age(approximately): {age}</p>
        <p className="card__sex">Sex:{sex}</p>
        <p className="card__breed">Breed: {breed}</p>
        <p className="card__size">Size: {size}</p>
        <p className="card__id">ID: {id}</p>
      </div>
    </div>
  );
};

export default Card;
