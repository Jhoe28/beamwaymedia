import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { serviceData } from '../assets/assets'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'

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
      

      {/* Other Services Section */}
      <div className='bg-gray-100 px-4 md:px-16 lg:px-24 xl:px-32 py-16'>
        <h2 className='text-2xl font-semibold mb-8'>Other Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {serviceData
            .filter(s => s.slug !== slug)
            .map(s => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className='flex items-center gap-3 bg-white hover:bg-accent hover:text-white transition-colors rounded-lg px-4 py-3 text-sm font-medium shadow-sm'
              >
                <img src={s.img} alt={s.title} className='w-8 h-8 mix-blend-multiply' />
                {s.title}
              </Link>
            ))
          }
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

export default ServiceDetail