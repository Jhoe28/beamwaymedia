import React from 'react'
import assets from '../assets/assets'

const MarqueeCard = ({ img, alt }) => {
  return (
    <div className="rounded-lg mx-3 md:mx-6 my-1 transition-all duration-200 shrink-0">
        <img src={img} alt={alt} className="w-12 h-12 md:w-20 md:h-20 object-contain" />
    </div>
  )
}

export default MarqueeCard