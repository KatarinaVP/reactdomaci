import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"

function NavBar() {
  return <div className='navBar'>
      <a href=""> Moja prodavnica</a>
      <div className="cart-items">
          <AiOutlineShoppingCart />
          <p className="cart-number">0</p>
      </div>
  </div>;
}

export default NavBar;
