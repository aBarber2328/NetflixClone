import React, { useEffect, useState } from 'react';

import "../styles/Nav.css";

function NavBar() {
const [show, handleShow] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        handleShow(true);
      }else handleShow(false);
    });
    return ()=>{
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className='nav_logo'
        src='netflix2.png'
        alt=''
      />
      <img
        className='nav_avatar'
        src='images.jpeg'
        alt=''
      />
    </div>
  )
}

export default NavBar
