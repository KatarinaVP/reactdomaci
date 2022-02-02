import React from 'react';
import {BsFillBasketFill} from "react-icons/bs"
import {Link} from "react-router-dom";
import {IoIosContact} from "react-icons/io";


function NavBar({proizvodUKorpi}) {
    
  return <div className='navigacija'>
      <Link to="/"> M&M Couture - hats</Link>

      
     <Link to="/korpa" className="kolica">
          <BsFillBasketFill />
          <p className="broj">{proizvodUKorpi}</p>
      </Link>

      <Link to="/kontakt" className='kontaktIkona'>
       <IoIosContact/>
      </Link>
    
  </div>;
}

export default NavBar;
