import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import assets from '../../assets/assets'
import { serviceData } from '../../assets/assets'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <nav className="animate-slideDown h-[70px] relative w-full px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
            
        <a href="/">
            <img src={assets.Logo} alt="logo" className="w-40 h-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="md:flex hidden items-center md:gap-8 lg:gap-12 xl:gap-16">
            <li><Link to="/" className="nav-link transition">HOME</Link></li>
            <li><Link to="/about" className="nav-link transition">ABOUT US</Link></li>
            
            {/* Services with dropdown */}
            <li 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
            >
                <Link to="/about" className="nav-link transition flex items-center gap-1">
                    OUR SERVICES
                    <span className={`text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </Link>                
                {/* Desktop Dropdown */}
                {servicesOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-4 z-50 border border-gray-100">
                        {serviceData.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 hover:text-accent"
                            >
                                <span className="material-symbols-outlined p-1 rounded-md bg-blue-200">{service.icon}</span>
                                {service.title}
                            </Link>
                        ))}
                    </div>
                )}
            </li>

            <li><Link to="/contact" className="nav-link transition">CONTACT US</Link></li>
        </ul>

        <div className="flex items-center gap-2">
            {/* <button type="button" className="bg-white text-gray-600 border border-gray-300 hidden text-sm max-[920px]:hidden min-[921px]:inline active:scale-95 transition-all w-40 h-11 hover:bg-black hover:text-white rounded-md">
                +1234565800
            </button> */}
            <Link href="https://www.instagram.com/beamwaymedia?igsh=MXI4bmJ4OWFzZG9mYw==" className="flex items-center gap-2">
                <i className="fa-brands fa-instagram text-xl p-2 hover:bg-accent hover:text-white shadow rounded-md"></i>
            </Link>
            <Link href="https://x.com/Beamwaymedia" className="flex items-center gap-2">
                <i className="fa-brands fa-x text-xl p-2 hover:bg-accent hover:text-white shadow rounded-md"></i>
            </Link>
            <Link href="https://www.tiktok.com/@beamwaymedia?_r=1&_t=zs-95gggupp8bi" className="flex items-center gap-2">
                <i className="fa-brands fa-tiktok text-xl p-2 hover:bg-accent hover:text-white shadow rounded-md"></i>
            </Link>
            <a href="mailto:Beamwaymedia@gmail.com" className="md:flex items-center gap-2 text-sm hover:text-blue-500 transition">
                <i className="fa-regular fa-envelope text-xl bg-accent text-white hover:bg-black hover:text-white p-2 shadow rounded-md"></i>
            </a>
            <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition" onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 shadow-lg z-50">
                <ul className="flex flex-col space-y-4 text-lg">
                    <li><Link to="/" className="text-sm" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/about" className="text-sm" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
                    
                    {/* Mobile Services Dropdown */}
                    <li>
                        <button 
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="text-sm flex items-center gap-2 w-full text-left"
                        >
                            OUR SERVICES
                            <span className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {mobileServicesOpen && (
                            <ul className="mt-2 ml-4 flex flex-col space-y-2">
                                {serviceData.map((service) => (
                                    <li key={service.id}>
                                        <Link
                                            to={`/services/${service.slug}`}
                                            className="text-sm flex items-center gap-2 text-gray-600 hover:text-accent py-1"
                                            onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                                        >
                                            <img src={service.img} alt={service.title} className="w-5 h-5 mix-blend-multiply" />
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li><Link to="/contact" className="text-sm" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar