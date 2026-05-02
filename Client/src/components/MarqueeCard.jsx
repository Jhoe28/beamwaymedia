import React from 'react'
import assets from '../assets/assets'

const MarqueeCard = ({ img, alt }) => {
  return (
    <div className="rounded-lg mx-6 my-1 transition-all duration-200 w-fit shrink-0 h-full h-max-4">
        <img src={img} alt={alt} className="w-full max-w-25 h-full h-max-4" />
    </div>
  )
}

export default MarqueeCard