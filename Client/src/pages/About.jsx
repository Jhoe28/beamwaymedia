import React from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import ContactForm from '../components/ContactForm'
import TrustedBy from '../components/TrustedBy'
import AboutDescription from '../components/AboutDescription'
import { aboutData } from '../assets/assets'

const About = () => {
  return (
    <div>
      <Hero 
        heading="Who We Are"
        subheading="At Beamway we do not manage platforms, we manage perceptions. And we do it with clarity, creativity and intentions that serious brands deserve"
        heroImage={assets.AccentImg_1} 
      />
      <Hero 
        heading="Who We Are" 
        subheading="Beamway Media is a creative media and marketing company focused on helping brands communicate with clarity and direction.
        We work at the intersection of creativity and strategy, bringing structure to how brands show up across all platforms.
        We support founders, businesses, organizations and leaders who want to present their brand in a way that feels clear, consistent, and aligned with what they offer. We believe strong brands are not built on noise. They are built on clarity, storytelling, and consistent execution." 
        positioning="At Beamway, we combine content, branding, and marketing systems to help brands express themselves better and connect with the right audience in a meaningful way. We care about how things are done, not just what is delivered.
        Every project is treated with structure, thought, and creative direction that aligns with long-term growth."
        heroImage={assets.About_1}
        ctaText="Learn More About Us"
      />

      <div className='flex flex-col justify-around gap-20 bg-gray-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-600 px-4 md:px-16 lg:px-24 xl:px-32 py-6 md:py-12 lg:py-16'>
        <h1 className='text-6xl'>Our Impact</h1>

        <div className="grid max-[832px]:grid-cols-1 max-[1023px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-8">
          <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/95 via-black/80 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-400" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Projects <br/>In Progress</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-medium text-7xl">12+</span></p>
          </div>
          <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/95 via-black/80 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-400" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Brands <br/>Supported</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-medium text-7xl">8+</span></p>
          </div>
          <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/95 via-black/80 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-400" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Content <br/>Pieces Created</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-medium text-7xl">100+</span></p>
          </div>
          <div style={{backgroundImage: `url(${assets.Projects})`}} className="relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between h-[350px] group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/95 via-black/80 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-400" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Strategy Sessions <br/>Delivered</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative z-10"><span className="font-medium text-7xl">15+</span></p>
          </div>
          
        </div>
      </div>

      <div className='bg-gray-200 border-b-2 border-b-gray-300 pt-6 max-[826px]:py-16 lg:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 px-2 md:px-12 lg:px-16 xl:px-24 max-[826px]:hidden border-b border-gray-300'>
          <div className='flex items-center gap-4'>
            <img src={assets.ArrowDown} alt="Arrow Down" className="max-w-5" />
            <p>BeamWay</p>
          </div>
          <div className='flex items-center gap-4'>
            <img src={assets.ArrowDown} alt="Arrow Down" className="max-w-5" />
            <p>What we are known for</p>
          </div>
        </div>

        {aboutData.map((service) => (
          <AboutDescription 
            key={service.id}
            p={service.p}
            title2={service.title2}
            description={service.description2}
          />
        ))}

      </div>



      <ContactForm />
      <TrustedBy />
    </div>
  )
}

export default About