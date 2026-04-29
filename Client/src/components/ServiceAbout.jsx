import React from 'react'

const ServiceAbout = ({ about, title, accentImg, listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, ourApproach, className }) => {
  const listItems = [listItem1, listItem2, listItem3, listItem4, listItem5, listItem6].filter(Boolean)

  return (
    <div className={`flex flex-col max-md:gap-20 md:flex-row pb-20 items-center bg-gray-200 justify-between my-10 px-4 md:px-16 lg:px-24 xl:px-32 ${className || ''}`}>
      <div className="flex flex-col items-start">
        <p className="text-left text-sm text-slate-700 max-w-lg mt-4">
          {about}
        </p>
        <ul className="mt-6 space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-accent">✓</span> {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 mt-8 text-sm">
          <button className="bg-accent hover:bg-black hover:text-white text-white active:scale-95 transition rounded-md px-7 h-11">
            Get started
          </button>
        </div>
      </div>
      <img 
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-4.png"
        alt={title} 
        className="max-w-sm sm:max-w-md lg:max-w-lg transition-all duration-300 animate-breathe" 
      />
    </div>
  )
}

export default ServiceAbout