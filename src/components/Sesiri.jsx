import React from 'react';
import JedanSesir from "./JedanSesir";

const Sesiri = ({product, onAdd, remove}) => {

  return <div className='all-products'>
      {product.map((proizvod)=>(<JedanSesir product={proizvod} key={product.id} onAdd={onAdd} remove={remove}/>) 
      )}
      
  </div>;
};

export default Sesiri;

