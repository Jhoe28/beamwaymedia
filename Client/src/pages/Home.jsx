import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
        <main class="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
          <div class="flex flex-col items-center md:items-start">
              <h1 class="text-center md:text-left text-4xl leading-11.5 md:text-5xl md:leading-17 font-semibold max-w-xl text-slate-900">
                  Build Your Brand, Shape Your Message, Scale Your Visibility
              </h1>
              <p class="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
                  We build creative marketing systems using content, branding, and strategy that improve how your brand is seen, understood, and positioned for growth and sales.
                  <br/>
                  A creative media agency focused on clarity, structure, and intentional storytelling.
              </p>
              <div class="flex items-center gap-4 mt-8 text-sm">
                  <button class="bg-indigo-600 hover:underline text-white active:scale-95 transition rounded-md px-7 h-11">
                      Start Your Brand Journey here!
                  </button>
              </div>
          </div>
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-5.png" alt="hero" class="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300"/>
    </main>
    </>
  )
}

export default Home