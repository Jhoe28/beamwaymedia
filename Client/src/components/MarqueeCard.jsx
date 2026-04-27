import React from 'react'
import assets from '../assets/assets'

const MarqueeCard = ({ img, alt }) => {
  return (
    <div className="rounded-lg mx-6 my-2 transition-all duration-200 w-fit shrink-0 h-full h-max-10">
        <img src={img} alt={alt} className="w-full max-w-30 h-full h-max-10" />
    </div>
  )
}

export default MarqueeCard