import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { serviceData } from '../assets/assets'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import ServiceAbout from '../components/ServiceAbout'
import OurApproach from '../components/OurApproach'

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
        className="min-[950px]:items-center max-[950px]:justify-center max-h-[50vh] "
        headingClassName="reveal text-5xl max-[1100px]:leading-12"
      />
      
      {/* Second Section */}
      <ServiceAbout
        headline={service.headline}
        title={service.title}
        about={service.about}
        listItem1={service.listItem1}
        listItem2={service.listItem2}
        listItem3={service.listItem3}
        listItem4={service.listItem4}
        listItem5={service.listItem5}
        listItem6={service.listItem6}
        listItem7={service.listItem7}
        className={service.id % 2 === 0 ? 'md:!flex-row-reverse gap-30' : 'md:!flex-row'}
        headingClassName="md:text-4xl leading-11"
      />

      <OurApproach
        ourApproach={service.ourApproach}
      />
      <ContactForm />
    </div>
  )
}

export default ServiceDetail