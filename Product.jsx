import React, { Component } from 'react';

const Product = (props) => (
  <div>
    <img src={`https:${props.imageArray[0].value}`} />
    <h2>{props.name}</h2>
    <h3>{`Price:$${props.price.slice(0, props.price.length-2)}.${props.price.slice(props.price.length-2)}`}</h3>
  </div>
);

export default Product;
