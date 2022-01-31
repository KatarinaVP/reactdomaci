import React from 'react';
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillMinusCircle} from "react-icons/ai"

function JedanSesir({product, onAdd, remove}) {
    
  return <div className='card'>
      <img className='card-img-top' src={product.slika} alt="" />
      <div className="card-body">
          <h3 className="card-title">{product.naslov}</h3>
          <p className="card-text">{product.opis}</p>
      </div>
      <button className="btn" onClick={()=>onAdd(product.naslov)}>
           <AiFillPlusCircle /> Dodaj
     </button>
      <button className="btn" onClick={()=>remove(product.naslov)}>
           <AiFillMinusCircle /> Izbrisi
      </button>
  </div>;
}

export default JedanSesir;
