import React from 'react'
import assets from '../assets/assets'

const Hero = (props) => {
  return (
    <div className={`flex flex-col max-md:gap-20 md:flex-row justify-between py-16 md:py-24 mt-0 px-4 md:px-16 lg:px-24 xl:px-32 ${props.className || ''}`}>
        <div className={`flex flex-col gap-4 h-full md:gap-8 ${props.contentClassName || 'items-start'}`}>
            <h1 className={`text-5xl leading-14 font-semibold max-w-xl min-[950px]:max-w-xl max-[950px]:max-w-full text-slate-900 ${props.headingClassName || 'text-left'}`}>
                {props.heading}
                {props.accentHeading && (
                    <span className="text-accent block">{props.accentHeading}</span>
                )}
            </h1>
            <p className={`text-sm text-slate-700 max-w-lg max-[950px]:max-w-full mt-0 md:mt-2 ${props.textClassName || 'text-left'}`}>
                {props.subheading}
                <br/><br/>
                {props.positioning}
            </p>
            {props.ctaText && (
                <div className="flex items-center gap-4 mt-0 md:mt-8 text-sm">
                    <button className="bg-accent hover:bg-black hover:text-white text-white active:scale-95 transition rounded-md px-7 h-11">
                        {props.ctaText}
                    </button>
                </div>
            )}
        </div>
        <img src={props.heroImage} alt="hero" className="scroll-animate hidden min-[950px]:block min-[950px]:w-[350px] lg:w-[450px] animate-breathe transition-all duration-300"/>
    </div>
  )
}

export default Hero