import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom";

function NavBar({proizvodUKorpi}) {
    
  return <div className='navigacija'>
      <Link to="/"> M&M Couture - hats</Link>
   
     <Link to="/korpa" className="kolica">
          <AiOutlineShoppingCart />
          <p className="broj">{proizvodUKorpi}</p>
      </Link>
    
  </div>;
}

export default NavBar;
