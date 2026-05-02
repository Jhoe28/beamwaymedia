import React from 'react'
import assets, { serviceData } from '../assets/assets'

const OurApproach = (props) => {
  return (
    <div className='px-6 md:px-12 lg:px-16 xl:px-24 py-6 md:py-12 lg:py-16 xl:py-24'>
        <div className='flex flex-col gap-4 items-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${assets.Cosmos})` }}>
            <h3 className='text-gray-300'>Our Approach</h3>
            <h1 className='text-white text-5xl font-bold tracking-wide'>We Don't Ghost. We Build.</h1>
            <p className='text-white'>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default OurApproach