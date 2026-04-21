import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import assets from '../assets/assets'

const Home = () => {
  return (
    <>
      <Hero 
        heading="Build Your Brand, Shape Your Message, Scale Your Visibility" 
        subheading="We build creative marketing systems using content, branding, and strategy that improve how your brand is seen, understood, and positioned for growth and sales." 
        positioning="A creative media agency focused on clarity, structure, and intentional storytelling." 
        heroImage={assets.HeroBg} />
    </>
  )
}

export default Home