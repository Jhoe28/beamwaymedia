import React from 'react'
import MarqueeCard from './MarqueeCard'
import { stack } from '../assets/assets'

const MarqueeRow = ({ reverse }) => {
  const doubled = [...stack, ...stack]

  return (
    <div className="w-full overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-bg-gray-100 to-transparent" />

      {/* Scrolling content */}
      <div className={`flex min-w-[200%] py-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((stackItem, index) => (
          <MarqueeCard key={stackItem.id} img={stackItem.img} alt={stackItem.alt} />
        ))}
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-bg-gray-100 to-transparent" />
    </div>
  )
}

export default MarqueeRow