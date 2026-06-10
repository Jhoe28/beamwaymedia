import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <footer className="reveal px-6 pt-8 md:px-16 lg:px-36 w-full bg-linear-to-r from-black to-gray-900 text-white">
            <div className="flex max-[740px]:flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div>
                    <h2 data-delay="100" className="reveal font-semibold text-gray-200 mb-5">Get in touch</h2>
                    <div data-delay="200" className="reveal min-[768px]:text-4xl text-2xl space-y-2">
                        <p><i className="fa fa-phone" aria-hidden="true"></i> +234 906 097 9037</p>
                        <p><i className="fa fa-envelope" aria-hidden="true"></i> Beamwaymedia@gmail.com</p>
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 data-delay="300" className="reveal font-semibold mb-5">Company</h2>
                        <ul data-delay="400" className="reveal text-sm space-y-2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/privacy">Privacy policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 data-delay="500" className="reveal font-semibold mb-5">Socials</h2>
                        <div  data-delay="500" className="reveal text-sm space-y-2">
                            <a href="https://www.instagram.com/beamwaymedia?igsh=MXI4bmJ4OWFzZG9mYw==" target='_blank' className="flex items-center gap-2">
                              <i className="fa-brands fa-instagram text-xl p-2 hover:bg-white hover:text-black rounded-md"></i>
                            </a>
                            <a href="https://x.com/Beamwaymedia" target='_blank' className="flex items-center gap-2">
                              <i class="fa-brands fa-x-twitter text-xl p-2 hover:bg-white hover:text-black rounded-md"></i>
                            </a>
                            <a href="https://www.tiktok.com/@beamwaymedia?_r=1&_t=zs-95gggupp8bi" target='_blank' className="flex items-center gap-2">
                              <i class="fa-brands fa-tiktok text-xl p-2 hover:bg-white hover:text-black rounded-md"></i>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://beamwaymedia.vercel.com">Beamway Media</a>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer