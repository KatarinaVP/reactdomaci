import React from 'react';
import JedanSesir from './JedanSesir';

const Korpa = ({product, remove}) => {
  return <div className='container'> 
      {product.map((prod)=>(<JedanSesir product={prod} key={prod.id} uKorpi={0} remove={remove}/>))}
  </div>;
};

export default Korpa;
