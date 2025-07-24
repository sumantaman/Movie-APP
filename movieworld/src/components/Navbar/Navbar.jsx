import React from 'react'
import './Navbar.css'
import Fire from '../../assets/fire.png'
import Party from '../../assets/party-face.png'
import Star from '../../assets/star.png'
import DarkMode from '../DarkMode/DarkMode'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieWorld</h1>
        <div className="navbar_links">
          <DarkMode />
            <a href="#popular">Top Rated <img src={Star} alt="fire emoji"  className='navbar_emoji'/></a>
            <a href="#top_rated">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></a>
            <a href="#upcoming">Popular <img src={Party} alt="fire emoji"  className='navbar_emoji'/></a>
        </div>
    </nav>
  )
}

export default Navbar
