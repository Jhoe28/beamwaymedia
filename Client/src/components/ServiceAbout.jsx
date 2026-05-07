import React from 'react'
import useReveal from '../useReaveal'

const ServiceAbout = ({ headline, about, title, accentImg, listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, ourApproach, className, headingClassName, textClassName }) => {
  const listItems = [listItem1, listItem2, listItem3, listItem4, listItem5, listItem6].filter(Boolean)
  useReveal()

  return (
    <div className={`flex max-md:flex-col max-md:gap-20 items-center bg-gray-200 justify-between py-15 md:py-20 px-4 md:px-16 lg:px-24 xl:px-32 ${className || 'md:flex-row'}`}>
      <div className="flex flex-col items-start md:pr-16">
        <h2 data-delay="200" className={`reveal font-bold ${headingClassName || 'text-3xl md:text-5xl leading-15'}`}>{headline}</h2>
        <p data-delay="300" className={`reveal text-left text-lg text-slate-700 max-w-lg mt-4 ${textClassName || ''}`}>
          {about}
        </p>
        <ul className={`mt-6 space-y-2 px-6 ${textClassName || ''}`}>
          {listItems.map((item, index) => (
            <li data-delay="400" key={index} className="reveal flex items-center gap-2 text-lg text-slate-700" style={{ transitionDelay: `${index * 0.1}s`}}>
              <span className="text-accent">✓</span> {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 mt-8 text-sm">
          <button data-delay="500" className="reveal bg-accent hover:bg-black hover:text-white text-white active:scale-95 transition rounded-md px-7 h-11">
            Get started
          </button>
        </div>
      </div>
      <img 
        data-delay="400"
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-4.png"
        alt={title} 
        className="reveal max-w-sm sm:max-w-md lg:max-w-lg transition-all duration-300 animate-breathe" 
      />
    </div>
  )
}

export default ServiceAbout