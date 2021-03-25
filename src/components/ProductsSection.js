import React from "react";

function ProductsSection({ shop, date, kartacze, babka, kiszka }) {
  return (
    <div>
      <h4>{shop}</h4>
      <p>{date}</p>
      <p>{kartacze}</p>
      <p>{babka}</p>
      <p>{kiszka}</p>
    </div>
  );
}

export default ProductsSection;
