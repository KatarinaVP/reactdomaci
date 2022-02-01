import React from 'react';
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillMinusCircle} from "react-icons/ai"

function JedanSesir({product, onAdd, remove, uKorpi}) {
    
  return <div className={uKorpi === 1 ? "card" : "card-cart"}>
      <img className={uKorpi === 1 ? "card-img-top" : "card-uKorpi"} src={product.slika} alt="" />
      <div className="card-body">
          <h3 className="card-title">{product.naslov}</h3>
          <p className="card-text">{product.opis}</p>
      </div>

      {uKorpi === 1 ? (
      <>
      <button className="button" onClick={()=>onAdd(product.naslov)}>
           <AiFillPlusCircle /> Dodaj
     </button>
      <button className="button" onClick={()=>remove(product.naslov)}>
           <AiFillMinusCircle /> Izbrisi
      </button>
      </>
      ) : (<>
      <h3 className='button'>Kolicina: {product.kolicina}</h3>
      </>) }
      
  </div>;
}

export default JedanSesir;
