import React from 'react'
import assets from '../assets/assets'

const MarqueeCard = ({ img, alt }) => {
  return (
    <div className="rounded-lg mx-6 my-4 shadow-lg transition-all duration-200 w-fit shrink-0 bg-white">
        <img src={img} alt={alt} className="w-full max-w-40 h-auto" />
    </div>
  )
}

export default MarqueeCard