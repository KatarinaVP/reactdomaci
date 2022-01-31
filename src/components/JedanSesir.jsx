import React from 'react';
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillMinusCircle} from "react-icons/ai"

function JedanSesir() {
  return <div className='card'>
      <img className='card-img-top' src="https://i.factcool.com/cache2/410x615/catalog/products/14/df/90/14-df-90db6cd5k001_LA_120.jpg" alt="" />
      <div className="card-body">
          <h3 className="card-title">Sesir</h3>
          <p className="card-text">Ovo je klasican sesir za sve prilike.</p>
      </div>
      <button className="btn">
           <AiFillPlusCircle />
     </button>
      <button className="btn">
           <AiFillMinusCircle />
      </button>
  </div>;
}

export default JedanSesir;
