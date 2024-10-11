import React from 'react'
import "../header/Header.css"
import homeimg from "../../assets/Img/pop.jpg"

export default function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className="headerTitleLg">BLOG</span>
       </div>
       <img className='headerImg' src={homeimg} alt="" />
    </div>
  )
}

