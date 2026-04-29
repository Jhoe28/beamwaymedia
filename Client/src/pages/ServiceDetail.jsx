import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { serviceData } from '../assets/assets'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import ServiceAbout from '../components/ServiceAbout'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = serviceData.find(s => s.slug === slug)

  if (!service) return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-16 text-center'>
      <h1 className='text-4xl font-bold'>Service not found</h1>
      <Link to="/about" className='text-accent mt-4 inline-block'>← Back to Services</Link>
    </div>
  )

  return (
    <div>
      {/* Hero Section */}
      <Hero
        heading={service.title}
        heroImage={service.accentImg}
        className="min-[767px]:items-end max-[767px]:justify-end min-h-[30vh]"
        headingClassName= 'text-5xl md:text-6xl lg:text-7xl min-[768px]:leading-20'
      />
      
      {/* Second Section */}
      <ServiceAbout
        title={service.title}
        about={service.about}
        listItem1={service.listItem1}
        listItem2={service.listItem2}
        listItem3={service.listItem3}
        listItem4={service.listItem4}
        listItem5={service.listItem5}
        listItem6={service.listItem6}
      />

      <ContactForm />
    </div>
  )
}

export default ServiceDetail