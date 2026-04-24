import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full bg-linear-to-r from-black to-gray-900 text-white">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                {/* <div className="md:max-w-96">
                    <img alt="" class="h-11" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShape.svg" />
                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
                    </div>
                </div> */}
                <div>
                    <h2 className="font-semibold text-gray-200 mb-5">Get in touch</h2>
                    <div className="text-4xl space-y-2">
                        <p>+1-234-567-890</p>
                        <p>Beamwaymedia@gmail.com</p>
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/privacy">Privacy policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Socials</h2>
                        <div className="text-sm space-y-2">
                            <Link href="#" className="flex items-center gap-2">
                              <img src={assets.Instagram} alt="Instagram" className="h-6 w-6 invert" />
                            </Link>
                            <Link href="#" className="flex items-center gap-2">
                              <img src={assets.X} alt="X" className="h-6 w-6 invert" />
                            </Link>
                            <Link href="#" className="flex items-center gap-2">
                              <img src={assets.Linkedin} alt="LinkedIn" className="h-6 w-6 invert" />
                            </Link>
                            <Link href="#" className="flex items-center gap-2">
                              <img src={assets.Tiktok} alt="TikTok" className="h-6 w-6 invert" />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://prebuiltui.com">Beamway Media</a>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer