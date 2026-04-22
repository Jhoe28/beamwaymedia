import React from 'react'

const ServiceDescription = ({ icon, title, description, accentImg }) => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 hover:bg-gray-200 rounded-lg transition-colors'>
            <div className='flex items-center gap-4'>
                <img src={icon} alt={title} className='w-12 h-12' />
                <h2 className='text-2xl font-medium'>{title}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className='flex items-center justify-end'>
                <img src={accentImg} alt={title} className='w-46' />
            </div>
        </div>
    </>
)
}

export default ServiceDescription