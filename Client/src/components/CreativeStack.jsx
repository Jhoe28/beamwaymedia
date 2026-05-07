import React from 'react'
import MarqueeRow from './MarqueeRow'
import { stack } from '../assets/assets'

const Marquee = () => {
    const firstRow = stack.slice(0, 8)
    const secondRow = stack.slice(8, 16)
    const thirdRow = stack.slice(16, 26)
  return (
    <div className="bg-white py-6 px-4 md:px-16 lg:px-24 xl:px-32">
      <h1 className="max-[407px]:text-3xl text-4xl font-bold my-5 reveal">Our Creative Stack</h1>
      <MarqueeRow reverse={false} items={firstRow} />
      <MarqueeRow reverse={true} items={secondRow} />
      <MarqueeRow reverse={false} items={thirdRow} />
    </div>
  )
}

export default Marquee