import React from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
import ServiceTitle from '../components/ServiceTitle'
import { serviceData } from '../assets/assets'

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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-2 sm:my-4 md:my-6 lg:my-12'>
          {serviceData.map((service, index) => (
            <ServiceTitle key={service.id} img={service.img} title={service.title} slug={service.slug} />
          ))}
        </div>
      </div>

      {/* Third Section */}
      <Hero 
        heading="Who We Are" 
        subheading="Beamway Media is a creative media and marketing company focused on helping brands communicate with clarity and direction.
        We work at the intersection of creativity and strategy, bringing structure to how brands show up across all platforms.
        We support founders, businesses, organizations and leaders who want to present their brand in a way that feels clear, consistent, and aligned with what they offer. We believe strong brands are not built on noise. They are built on clarity, storytelling, and consistent execution." 
        positioning="At Beamway, we combine content, branding, and marketing systems to help brands express themselves better and connect with the right audience in a meaningful way. We care about how things are done, not just what is delivered.
        Every project is treated with structure, thought, and creative direction that aligns with long-term growth."
        heroImage={assets.About_1}
      />

      {/* Forth Section */}
      <div className="grid grid-cols-1 min-[760px]:grid-cols-2 min-[1000px]:grid-cols-4 gap-4 px-4 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 md:py-12 lg:py-16 xl:py-24">
        <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat -translate-y-12 border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
          
          {/* Content stays on top */}
          <p className="text-xl text-right text-white relative z-10">Projects <br/>In Progress</p>
          <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-bold text-8xl">12+</span></p>
        </div>
        <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat translate-y-12 border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
          
          {/* Content stays on top */}
          <p className="text-xl text-right text-white relative z-10">Brands <br/>Supported</p>
          <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-bold text-8xl">8+</span></p>
        </div>
        <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat -translate-y-14 border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
          
          {/* Content stays on top */}
          <p className="text-xl text-right text-white relative z-10">Content <br/>Pieces Created</p>
          <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-bold text-8xl">100+</span></p>
        </div>
        <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat translate-y-16 border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
          
          {/* Content stays on top */}
          <p className="text-xl text-right text-white relative z-10">Strategy Sessions <br/>Delivered</p>
          <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-bold text-8xl">15+</span></p>
        </div>
        
      </div>
    </>
  )
}

export default Home
