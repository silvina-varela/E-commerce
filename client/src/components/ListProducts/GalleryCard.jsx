import React from "react";

export const GalleryCard = ({ name, price, image_link, rating }) => {
  return (
    <div>
      <img
        src={image_link}
        alt="product"
        style={{
          width: "200px",
          heigth: "auto",
        }}
        onError={(e) => {
          e.target.src="https://cdn.shopify.com/s/files/1/0346/1319/8893/collections/elate1.jpg?v=1590520129"
        }}
      />
      <div>
        <h2>{name}</h2>
        <h5>${price}</h5>
        <h5>{rating}</h5>
      </div>
    </div>
  );
};
