import React from 'react';

function Snack({ name, image, description }) {
  return (
    <div className="snack">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Snack;