import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = (props) => {
  return (
    <div className={`flex flex-col max-md:gap-6 md:flex-row items-center justify-between py-12 md:py-16 mt-0 px-4 md:px-16 lg:px-24 xl:px-32 ${props.className || ''}`}>
        <div className={`flex flex-col gap-6 h-full my-4 ${props.contentClassName || 'items-start'}`}>
            <h1 className={`leading-14 font-bold max-w-xl animate-heroAnimation min-[950px]:max-w-xl max-[950px]:max-w-full text-slate-900 ${props.headingClassName || 'text-left'}`}>
                {props.heading}
                {props.accentHeading && (
                    <span className="text-accent block">{props.accentHeading}</span>
                )}
            </h1>
            <p className={`max-[950px]:text-lg leading-6 text-slate-700 animate-heroAnimation max-w-lg max-[950px]:max-w-full mt-0 ${props.textClassName || 'text-left'}`}>
                {props.subheading}
                {props.positioning &&(
                    <>
                        <br/><br/>
                        <span>{props.positioning}</span>
                    </>
                )}
            </p>
            {props.ctaText && (
                <div className="flex items-center gap-4 mt-0 text-sm animate-heroAnimation">
                    <Link 
                        to={props.href || '/'}
                        className="bg-accent hover:bg-black hover:text-white text-white text-lg active:scale-95 transition rounded-md px-7 h-11 flex items-center"
                    >
                        {props.ctaText}
                    </Link>
                </div>
            )}
        </div>
        <img 
            src={props.heroImage} 
            alt="hero" 
            className={`animate-appear-breathe hidden min-[1000px]:block rounded-md transition-all duration-300 ${props.aboutImage || 'min-[1000px]:w-[350px]'}`}
        />
    </div>
  )
}

export default Hero