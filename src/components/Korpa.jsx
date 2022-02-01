import React from 'react';
import JedanSesir from './JedanSesir';

const Korpa = ({product}) => {
  return <div className='container'> 
      {product.map((prod)=>(<JedanSesir product={prod} key={prod.id} uKorpi={0}/>))}
  </div>;
};

export default Korpa;
