import React from 'react'
import { Link } from 'react-router-dom'

const ServiceTitle = ({ img, title, slug }) => {
  return (
    <>
        <Link to={`/services/${slug}`} className="relative flex pb-6 items-center gap-4 after:absolute after:bottom-0 after:left-0 after:w-full after:max-w-90 max-[870px]:text-2xl max-[870px]:py-12 max-[870px]:px-4 max-[870px]:border-b-2 max-[870px]:border-b-gray-500 max-[870px]:after:hidden max-[1410px]:after:max-w-70 max-[1024px]:after:max-w-50 after:h-[1px] after:bg-gray-300">
            <img src={img} alt={title} className="mix-blend-multiply max-w-10" />
            <h2>{title}</h2>
        </Link>
    </>
  )
}

export default ServiceTitle