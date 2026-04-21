import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import assets from '../../assets/assets'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between z-20 bg-transparent text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
            
        <a href="/">
            <img src={assets.Logo} alt="logo" className="w-40 h-auto" />
        </a>

        <ul className="md:flex hidden items-center gap-16">
            <li><Link to="/" className="nav-link  transition">HOME</Link></li>
            <li><Link to="/about" className="nav-link transition">ABOUT US</Link></li>
            <li><Link to="/services" className="nav-link transition">OUR SERVICES</Link></li>
            <li><Link to="/contact" className="nav-link transition">CONTACT US</Link></li>
        </ul>

        <button type="button" className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
            +1234567889
        </button>

        <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
        </button>

        {menuOpen && (
            <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6">
                <ul className="flex flex-col space-y-4 text-lg">
                    <li><Link to="/" className="text-sm">HOME</Link></li>
                    <li><Link to="/about" className="text-sm">ABOUT US</Link></li>
                    <li><Link to="/services" className="text-sm">OUR SERVICES</Link></li>
                    <li><Link to="/contact" className="text-sm">CONTACT US</Link></li>
                </ul>
            </div>
        )}
    </nav>

  )
}

export default Navbar