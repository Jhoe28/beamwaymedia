import React from 'react'
import MarqueeRow from './MarqueeRow'

const Marquee = () => {
  return (
    <div className="bg-gray-200 py-12 px-4 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-4xl font-semibold mb-10">Our Creative Stack</h2>
      <MarqueeRow reverse={false} />
      <MarqueeRow reverse={true} />
      <MarqueeRow reverse={false} />
    </div>
  )
}

export default Marquee