import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className='product'>
      <img src={product.source} alt={product.name} />
      <p>{product.name} - {product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
