import React from 'react'
import assets from '../assets/assets'

const Hero = (props) => {
  return (
    <div className="flex flex-col max-md:gap-20 md:flex-row items-start justify-between py-16 md:py-24 mt-0 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-4 md:gap-8 items-start">
            <h1 className="text-left text-5xl leading-20 md:leading-14 font-semibold max-w-xl min-[950px]:max-w-xl max-[950px]:max-w-full text-slate-900">
                {props.heading}
            </h1>
            <p className="text-left text-sm text-slate-700 max-w-lg max-[950px]:max-w-full mt-2">
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
        <img src={props.heroImage} alt="hero" className="hidden min-[950px]:block min-[950px]:w-[350px] lg:w-[450px] animate-breathe transition-all duration-300"/>
    </div>
  )
}

export default Hero