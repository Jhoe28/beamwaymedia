import React from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero 
        heading="Build Your Brand, Shape Your Message, Scale Your Visibility" 
        subheading="We build creative marketing systems using content, branding, and strategy that improve how your brand is seen, understood, and positioned for growth and sales." 
        positioning="A creative media agency focused on clarity, structure, and intentional storytelling." 
        heroImage={assets.HeroBg} 
      />

      {/* Second Section */}
      <div className='w-full bg-gray-200 mt-0 px-4 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 md:py-12 lg:py-16 xl:py-24'>
        <h1 className='text-4xl'>How We Can Help You</h1>
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-2 sm:my-4 md:my-6 lg:my-12'>
          <Link>
            <img src="" alt="" />
            <h2>Digital Marketing</h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home