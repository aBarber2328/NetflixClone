import React, { useEffect, useState } from 'react';
import { SiNetflix } from "react-icons/si";
import { HiUserCircle } from "react-icons/hi";

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
      <div className='nav_logo'>
        <SiNetflix style={{color: "red", fontSize: "36px"}} />
      </div>
      <div className='nav_avatar'>
        <HiUserCircle style={{color: "white", fontSize:"36px"}}/>
      </div>
      {/* <img
        className='nav_logo'
        src='netflix2.png'
        alt=''
      />
      <img
        className='nav_avatar'
        src='images.jpeg'
        alt=''
      /> */}
    </div>
  )
}

export default NavBar
