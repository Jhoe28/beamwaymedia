import React from 'react'
import assets from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className="py-12 px-4 md:px-16 lg:px-24 xl:px-32">
        <h2 className="reveal text-lg md:text-4xl text-gray-700 text-center">Companies we've worked with</h2>
        <div data-delay="200" className="reveal flex flex-wrap items-center justify-center gap-12 mt-14 max-md:px-2">
            <img className='w-20' src={assets.Codecraft} alt="codecraft" />
            <img className='w-20' src={assets.Elevvo} alt="Elevvo" />
            <img className='w-20' src={assets.Sybex} alt="Sybex" />
            <img className='w-20' src={assets.Gaotechlogo} alt="Gaotech" />
        </div>
    </div>
  )
}

export default TrustedBy