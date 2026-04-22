import React from 'react'
import assets from '../assets/assets'

const Hero = (props) => {
  return (
    <div className="flex flex-col max-md:gap-20 md:flex-row items-center justify-between py-8 md:py-12 mt-0 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="text-center md:text-left text-4xl leading-11.5 md:text-5xl md:leading-17 font-semibold max-w-xl text-slate-900">
                {props.heading}
            </h1>
            <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
                {props.subheading}
                <br/><br/>
                {props.positioning}
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm">
                <button className="bg-accent hover:bg-black hover:text-white text-white active:scale-95 transition rounded-md px-7 h-11">
                    Start Your Brand Journey here!
                </button>
            </div>
        </div>
        <img src={props.heroImage} alt="hero" className="hidden sm:block sm:max-w-sm lg:max-w-lg 2xl:max-w-2xl animate-breathe transition-all duration-300"/>
    </div>
  )
}

export default Hero