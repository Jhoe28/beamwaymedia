import React from 'react'
import ContactForm from '../components/ContactForm'
import TrustedBy from '../components/TrustedBy'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import useReveal from '../useReaveal'

const Contact = () => {
  useReveal()
  return (
    <div className='relative'>
      <div className='flex items-center gap-2 fixed z-10 bottom-4 md:bottom-15 right-4 md:right-15'>
          <div className='px-2 py-3 -translate-2 whitespace-nowrap rounded-md bg-white text-black font-bold flex items-center shadow-lg'>
            <p className='font-semibold text-sm md:text-base'>Chat with us</p>
          </div>
          <a href="https://wa.me/+2349060979037" target="_blank" rel="noopener noreferrer">
            <img src={assets.WhatsappLogo} alt="Whatsapp Link" className='w-full max-w-20 shadow-lg max-h-20 h-full bg-white rounded-full hover:-translate-y-2' />
          </a>
      </div>
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