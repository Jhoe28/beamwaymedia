import React from 'react'
import { useParams } from 'react-router-dom'
import { serviceData } from '../assets/assets'

const ServiceDetail = () => {
  const { slug } = useParams()  // gets the slug from the URL
  const service = serviceData.find(s => s.slug === slug)  // finds matching service

  if (!service) return <h1>Service not found</h1>

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-16'>
    </div>
  )
}

export default ServiceDetail