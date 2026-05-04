import React from 'react'
import { steps } from '../assets/assets'
import useReveal from '../useReaveal'

const OurApproach = (props) => {
  useReveal()
  return (
    <div className="reveal bg-black text-white py-16 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="text-center mb-16">
        <p data-delay="100" className="reveal text-xs tracking-widest text-gray-400 uppercase mb-4">Our Approach</p>
        <h2 data-delay="200" className="reveal text-4xl md:text-6xl font-bold mb-6">We Work With Intention, Not Assumption.</h2>
        <p data-delay="300" className="reveal text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
          {props.ourApproach}
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row gap-0">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 flex flex-col md:flex-row">
            
            {/* Step content */}
            <div className="reveal flex-1" style={{ transitionDelay: `${index * 0.1}s`}}>
              {/* Step label and line */}
              <div className="flex md:flex-col items-start gap-4 md:gap-0 mb-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase whitespace-nowrap">
                  Step {step.id}
                </p>

                {/* Line with dot — horizontal on desktop, vertical on mobile */}
                <div className="flex md:flex-col items-center w-full md:w-auto mt-0 md:mt-3">
                  
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                  
                  {/* Line after dot */}
                  <div className={`
                    bg-accent
                    h-[2px] w-full md:block
                    ${index === steps.length - 1 ? 'opacity-0' : 'opacity-100'}
                  `} />
                  
                  {/* Desktop horizontal line */}
                  <div className={`
                    hidden md:hidden
                    h-[2px] flex-1 w-full mt-0
                    bg-accent
                    ${index === steps.length - 1 ? 'opacity-0' : 'opacity-100'}
                  `} />
                </div>
              </div>

              {/* Text content */}
              <div className="md:pr-8">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default OurApproach