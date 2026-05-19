import React, {useState} from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
import ServiceTitle from '../components/ServiceTitle'
import { serviceData } from '../assets/assets'
import ServiceDescription from '../components/ServiceDescription'
import ContactForm from '../components/ContactForm'
import CreativeStack from '../components/CreativeStack'
import TrustedBy from '../components/TrustedBy'
import useReveal from '../useReaveal'
import OurApproach from '../components/OurApproach'

const Home = () => {
  const [activeId, setActiveId] = useState(1)
  useReveal()

  return (
    <div className='relative'>
      <div className='flex items-center gap-2 fixed z-10 bottom-4 md:bottom-15 right-4 md:right-15'>
          <div className='px-2 py-3 -translate-2 whitespace-nowrap rounded-md bg-white text-black font-bold flex items-center shadow-lg'>
            <p className='font-semibold text-sm md:text-base'>Chat with us</p>
          </div>
          <img src={assets.WhatsappLogo} alt="Whatsapp Link" className='w-full max-w-20 shadow-lg max-h-20 h-full bg-white rounded-full hover:-translate-y-2' />
      </div>
      <Hero 
          heading="Build Your Brand, Shape Your Message,"
          accentHeading="Scale Your Visibility"
          subheading="We build creative marketing systems using content, branding, and strategy that improve how your brand is seen, understood, and positioned for growth and sales." 
          heroImage={assets.HeroBg}
          ctaText="Start Your Brand Journey here!"
          aboutImage='max-h-[700px] h-full max-[1200px]:w-[400px]'
          href="contact"
          headingClassName="text-5xl max-[1100px]:text-4xl max-[1100px]:leading-12"
      />

      {/* Second Section */}
      <div className='w-full bg-gray-200 mt-0 px-4 md:px-16 lg:px-24 xl:px-32 py-4 md:py-6 lg:py-12 xl:py-16'>
        <h1 className='reveal max-[407px]:text-3xl text-4xl my-8 font-bold animate-on-scroll'>How We Can Help You</h1>
        <div className='grid max-[870px]:grid-cols-1 max-[920px]:grid-cols-2 min-[921px]:grid-cols-3 my-2 sm:my-4 md:my-6 lg:my-12 gap-6'>
          {serviceData.map((service, index) => (
            <div key={service.id} className='reveal' style={{ transitionDelay: `${index * 0.1}s`}}>
             <ServiceTitle 
               
              icon={service.icon} 
              title={service.title} 
              littleDescription={service.littleDescription}
              slug={service.slug} 
            />
            </div>
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
        ctaText="Learn More About Us"
        headingClassName="text-4xl max-[407px]:text-3xl"
        contentClassName="reveal"
        image="reveal"
        className="reveal max-[1200px]:gap-15"
        aboutImage='max-h-[500px] h-full w-[450px]'
        href="about"
      />

      {/* Forth Section */}
      <div className='flex flex-col justify-around font-bold gap-10 bg-gray-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-600 px-4 md:px-16 lg:px-24 xl:px-32 py-6 md:py-12'>
        <h1 className='text-4xl max-[407px]:text-3xl reveal'>Our Impact</h1>

        <div className="grid max-[832px]:grid-cols-1 max-[1023px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-8">
          <div style={{backgroundImage: `url(${assets.Projects})`}} data-delay="0" className="reveal relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between aspect-square group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Projects <br/>In Progress</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative italic z-10"><span className="font-medium text-7xl">12+</span></p>
          </div>
          <div style={{backgroundImage: `url(${assets.Projects2})`}} data-delay="200" className="reveal relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between aspect-square group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Brands <br/>Supported</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative italic z-10"><span className="font-medium text-7xl">8+</span></p>
          </div>
          <div style={{backgroundImage: `url(${assets.Projects3})`}} data-delay="400" className="reveal relative border bg-center bg-cover bg-no-repeat border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col justify-between aspect-square group">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />
            
            {/* Content stays on top */}
            <p className="text-xl text-right text-white relative z-10">Content <br/>Pieces Created</p>
            <p className="text-2xl text-neutral-200 mb-2 px-2 relative italic z-10"><span className="font-medium text-7xl">100+</span></p>
          </div>
          
        </div>
      </div>

      <OurApproach />
      <CreativeStack />
      {/*  Seventh Section */}
      <div class="py-16 px-4 bg-gray-200">
        <h1 className='reveal font-semibold text-gray-900 max-[407px]:text-3xl md:text-4xl text-center mx-auto'>Don't just take our words</h1>
        <p className=' reveal text-lg leading-6 text-gray-600 text-center mt-2 max-w-xl mx-auto'>Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p>
        <div class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 pt-16">
            <div data-delay="0" className='reveal bg-gray-800 rounded-lg p-6 transform transition hover:-translate-y-1'>
                {/* <p class='font-medium text-sm text-white mb-6'>Product Designer</p> */}
                <p className='text-lg leading-6 text-gray-200 mb-4.5'>"Beamway helped us refine our brand positioning. We finally understood how to communicate what we do in a clear and simple way."</p>
                <p className='text-xs text-gray-300 italic'>- Client Feedback</p>
            </div>
            <div data-delay="200" className='reveal bg-gray-800 rounded-lg p-6 transform transition hover:-translate-y-1'>
                {/* <p class='font-medium text-sm text-white mb-6'>Software Engineer</p> */}
                <p className='text-lg leading-6 text-gray-200 mb-4.5'>"The structure they brought to our content completely changed our consistency. Our social media now feels planned and intentional, not random."</p>
                <p className='text-xs text-gray-300 italic'>- Client Feedback</p>
            </div>
            <div data-delay="400" className='reveal bg-gray-800 rounded-lg p-6 transform transition hover:-translate-y-1'>
                {/* <p class='font-medium text-sm text-white mb-6'>Marketing Manager</p> */}
                <p className='text-lg leading-6 text-gray-200 mb-4.5'>"The biggest shift was visibility. Our brand started reaching the right audience and getting more meaningful engagement."</p>
                <p className='text-xs text-gray-300 italic'>- Client Feedback</p>
            </div>
        </div>
      </div>

      {/* Ninth Section */}
      <ContactForm />
      {/* Tenth Section */}
      <TrustedBy />
    </div>
  )
}

export default Home
