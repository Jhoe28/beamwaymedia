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
          className="min-[950px]:items-center max-[950px]:justify-center max-h-[50vh] "
          headingClassName="reveal text-5xl max-[1100px]:leading-12"
      />
      <ContactForm />
      <TrustedBy />

    </div>
  )
}

export default Contact