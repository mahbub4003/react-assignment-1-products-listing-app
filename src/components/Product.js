/* eslint-disable react/prop-types */
import React from 'react';

const Product = ( { data }) => {
  const { title, price,id, description, image, rating } = data;
  console.log( image );
  return (
      <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className='product__price'>Price:${price}</p>
        <p className='product__rating'>Rating:{rating.rate}/{rating.count}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
