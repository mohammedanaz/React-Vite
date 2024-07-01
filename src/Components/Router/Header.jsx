import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='d-flex justify-content-center py-3 bg-light'>
        <nav>
            <ul className='nav'>
                <li className='nav-item mx-2'>
                  <NavLink to='/' style={({isActive})=> isActive? {fontWeight: 'bold', color: 'red'} : {}}>Home</NavLink>
                </li>
                <li className='nav-item mx-2'>
                  <NavLink to='/about' style={({isActive})=> isActive? {fontWeight: 'bold', color: 'red'} : {}}>About</NavLink>
                </li>
                <li className='nav-item mx-2'>
                  <NavLink to='/contactUs' style={({isActive})=> isActive? {fontWeight: 'bold', color: 'red'} : {}}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
