import React from 'react'
import assets from '../assets/assets'

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 my-12 md:my-16 lg:my-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${assets.Cta})` }}>
        <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Empower Your Sales & Marketing with Beamway Media</h1>
        <div className="h-[3px] w-32 my-1 bg-accent"></div>
        <p className="text-sm md:text-base text-white max-w-xl">
            If you are looking for a creative and strategic partner to help shape your brand direction, content, and marketing, we would be open to working with you.
        </p><br/>
        <p className="text-sm md:text-base text-white max-w-xl">
            Let’s build something clear, intentional, and effective.
        </p>
        <button className="px-8 py-2.5 mt-4 text-sm bg-accent hover:scale-105 hover:bg-black transition duration-300 text-white rounded-full">
            Get Started
        </button>
    </div>
  )
}

export default CallToAction