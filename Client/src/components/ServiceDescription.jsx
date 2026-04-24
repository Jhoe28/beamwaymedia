import React from 'react'

const ServiceDescription = ({ icon, title, description, accentImg, isActive, onHover }) => {
  return (
    <>
        <div className={`grid grid-cols-1 md:grid-cols-3 border-b-2 border-b-gray-300 last:border-none gap-8 py-6 px-4 md:px-6 lg:px-12 xl:px-16 hover:bg-gray-200 rounded-lg transition-colors ${isActive ? 'bg-gray-200' : ''}`} onMouseEnter={onHover}>
            <div className='flex items-center gap-4'>
                <img src={icon} alt={title} className='w-12 h-12' />
                <h2 className='text-2xl font-medium'>{title}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className='hidden lg:flex items-center justify-end'>
                <img src={accentImg} alt={title} className={`w-56 transition-opacity duration-300 hover:animate-jump  ${isActive ? 'opacity-100 animate-jump' : 'opacity-0'}`} />
            </div>
        </div>
    </>
)
}

export default ServiceDescription