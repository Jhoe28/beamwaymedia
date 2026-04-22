import React from 'react'
import { Link } from 'react-router-dom'

const ServiceTitle = ({ img, title, slug }) => {
  return (
    <>
        <Link to={`/services/${slug}`} className="relative flex pb-6 items-center gap-4 after:absolute after:bottom-0 after:left-0 after:w-90 after:h-[1px] after:bg-gray-300">
            <img src={img} alt={title} className="mix-blend-multiply max-w-10" />
            <h2>{title}</h2>
        </Link>
    </>
  )
}

export default ServiceTitle