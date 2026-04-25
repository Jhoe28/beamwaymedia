import React from 'react'
import { Link } from 'react-router-dom'

const ServiceTitle = ({ img, title, slug }) => {
  return (
    <>
        <Link to={`/services/${slug}`} className="relative flex my-4 items-center gap-4 w-fit bg-accent hover:bg-black hover:text-white text-white active:scale-95 transition rounded-md px-7 h-11">
            <img src={img} alt={title} className="mix-blend-multiply max-w-10" />
            <h2>{title}</h2>
        </Link>
    </>
  )
}

export default ServiceTitle