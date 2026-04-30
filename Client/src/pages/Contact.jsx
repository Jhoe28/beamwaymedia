import React from 'react'
import ContactForm from '../components/ContactForm'
import TrustedBy from '../components/TrustedBy'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import useReveal from '../useReaveal'

const Contact = () => {
  useReveal()
  return (
    <div>
      <Hero 
          heading="Reach Out To Us"
          heroImage={assets.AccentImg_1}
          className="min-[767px]:items-end max-[767px]:justify-end min-h-[30vh]"
      />
      <ContactForm />
      <TrustedBy />

    </div>
  )
}

export default Contact