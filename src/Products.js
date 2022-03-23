import React from 'react';

function Products() {
  const products = ["Learning React", "Pro React", "Beginning React"];
  const listProducts = products.map((product) => {
    return <li key={product.toString()}>{product}</li>;
  });

  return(
    <div>
      <ul>{listProducts}</ul>
    </div>
  );
}

export default Products;
