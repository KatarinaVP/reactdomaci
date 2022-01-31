import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"

function NavBar({proizvodUKorpi}) {
    
  return <div className='navBar'>
      <a href=""> M&M Couture - luxury hats</a>
   
     <div className="cart-items">
          <AiOutlineShoppingCart />
          <p className="cart-number">{proizvodUKorpi}</p>
      </div>
    
  </div>;
}

export default NavBar;
