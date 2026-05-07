import React from 'react'
import MarqueeCard from './MarqueeCard'

const MarqueeRow = ({ reverse, items, duration }) => {
  const doubled = [...items, ...items, ...items] // triple instead of double

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      <div 
        className={`flex min-w-[300%] items-center py-0 md:py-1 lg:py-2 xl:py-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: duration || '15s' }}
      >
        {doubled.map((stackItem, index) => (
          <MarqueeCard key={`stack-${index}`} img={stackItem.img} alt={stackItem.alt} />
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}

export default MarqueeRow