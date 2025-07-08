import React, { useState } from 'react'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import {Link} from 'react-router-dom'
//do we need to install react router dom to use Link
//why did not used react code from font awesome in i tag
const Navbar = () => {
    const [clicked,setClicked]=useState(false);
    const handleClick=()=>{
        setClicked(!clicked);
    }
    return (
        <div>
            <nav className='navbar'>
                <h1 className='navbar-logo'>Trippy</h1>
                <div className='menu-icons' onClick={handleClick}>
                    <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
                    
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link className={item.cName} to={item.url}>
                                <li key={index} >
                                    <i className={item.icon}></i>
                                    {item.title}
                                </li>
                            </Link>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
