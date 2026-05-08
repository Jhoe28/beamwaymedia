import React from 'react'
import { Link } from 'react-router-dom'

const ServiceTitle = ({ icon, title, slug, littleDescription }) => {
  return (
    <>
        <Link to={`/services/${slug}`} className="relative flex flex-col h-full justify-around items-start bg-gray-100 gap-4 w-full min-w-40 p-4 hover:-translate-y-4 shadow-lg text-black active:scale-95 transition rounded-md">
            <span className="material-symbols-outlined p-2 rounded-xl bg-blue-200">{icon}</span>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className='text-md leading-6'>{littleDescription}</p>
            <p className="text-sm underline font-bold">VIEW SERVICE <span className='material-symbols-outlined'>arrow_outward</span></p>
        </Link>
    </>
  )
}

export default ServiceTitle