import React from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import ContactForm from '../components/ContactForm'
import TrustedBy from '../components/TrustedBy'

const About = () => {
  return (
    <div>
      <Hero 
      heading="Who We Are"
      subheading="At Beamway we do not manage platforms, we manage perceptions. And we do it with clarity, creativity and intentions that serious brands deserve"
      heroImage={assets.AccentImg_1} />
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


      <ContactForm />
      <TrustedBy />
    </div>
  )
}

export default About