import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow tc">
      <img src={`https://www.robohash.org/${id}?size=200x200`} alt="robots" SameSite={`None`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
