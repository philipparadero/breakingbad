import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import SearchBar from './SearchBar'
import './Navbar.css'

const Navbar = () => {


    return (
      <>
        <div className="navbar">
          <div className="navbar-container">
            <ul className='nav-menu active'>
                <li className="nav-item">
                    <Link to='/characters' className="nav-links">Characters</Link> 
                </li>
                <li className="nav-item">
                    <Link to='/episodes' className="nav-links">Episodes</Link> 
                </li>
                <li className="nav-item">
                    <Link to='/quotes' className="nav-links">Quotes</Link> 
                </li>
            </ul>
            <Link to='/' className="nav-links"><img src={logo} alt='logo' className='nav-logo' /></Link> 
            <SearchBar />
          </div>
        </div>
      </>
    )
}

export default Navbar
