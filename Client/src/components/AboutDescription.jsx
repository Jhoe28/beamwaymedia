import React from 'react'

const ServiceDescription = ({ p, title2, description }) => {
  return (
    <>
        <div className={`grid grid-cols-1 md:grid-cols-3 border-b-2 border-b-gray-300 last:border-none gap-8 py-4 md:py-10 lg:py-12 px-4 md:px-12 lg:px-16 xl:px-24 hover:bg-gray-100 rounded-lg transition-colors group`}>
            <div>
                <p className='text-9xl font-bold text-accent group-hover:animate-jump'>{p}</p>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <h2 className='text-2xl font-medium'>{title2}</h2>
                <p>{description}</p>
            </div>
        </div>
    </>
)
}

export default ServiceDescription