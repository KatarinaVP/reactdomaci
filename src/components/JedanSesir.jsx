import React from 'react';
import {BsFillPatchPlusFill} from "react-icons/bs"
import {BsFillPatchMinusFill} from "react-icons/bs"

function JedanSesir({product, onAdd, remove, uKorpi}) {
    
  return <div className={uKorpi === 1 ? "stavka" : "stavkaKorpa"}>
      <img className={uKorpi === 1 ? "slika" : "stavka-uKorpi"} src={product.slika} alt="" />
      <div className="stavka-telo">
          <h3 className="stavka-naslov">{product.naslov}</h3>
          <p className="stavka-opis">{product.opis}</p>
      </div>

      {uKorpi === 1 ? (
      <>
      <button className="dugme" onClick={()=>onAdd(product.naslov, product.id)}>
           <BsFillPatchPlusFill /> Dodaj
     </button>
      <button className="dugme" onClick={()=>remove(product.naslov, product.id)}>
           <BsFillPatchMinusFill /> Izbrisi
      </button>
      </>
      ) : (<>
      <p className='kolicina'>Kolicina: {product.kolicina}</p>
      </>) }
      
  </div>;
}

export default JedanSesir;
