import React from 'react'
import MarqueeRow from './MarqueeRow'
import { stack } from '../assets/assets'

const Marquee = () => {
    const firstRow = stack.slice(0, 8)
    const secondRow = stack.slice(8, 16)
    const thirdRow = stack.slice(16, 26)
  return (
    <div className="bg-gray-200 py-12 px-4 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-4xl font-semibold mb-10 reveal">Our Creative Stack</h2>
      <MarqueeRow reverse={false} items={firstRow} />
      <MarqueeRow reverse={true} items={secondRow} />
      <MarqueeRow reverse={false} items={thirdRow} />
    </div>
  )
}

export default Marquee