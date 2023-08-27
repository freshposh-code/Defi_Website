import React, { useState } from 'react'
import "./Navbar.css"
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
  <div className='fixed'>
    <div className='navbar'>
    <div className='container'>
        <h1 style={{marginLeft:"1rem", color: "blue"}}>
          Defi
        </h1>
        <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='#Hero'>Platform</a>
          </li>
          <li className='nav-item'>
            <a href='#Developers'>Developers</a>
          </li>
          <li className='nav-item'>
            <a href='#community'>Community</a>
          </li>
          <li className='nav-item'>
            <a href='#about'>About</a>
          </li>
          <li className='nav-item'>
            <a className='btn' href='/'>Use Defi</a>
          </li>
        </ul>
          <div className='hamburger' onClick={handleClick}>
         {click ? <AiOutlineClose/> : <AiOutlineMenu/> } 
          </div>
    </div>
    </div>
    </div>
    
  )
}

export default Navbar