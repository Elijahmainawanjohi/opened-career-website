import React from 'react'

import hero1 from '../../assets/images/hero-1.webp'

function Header() {
  return (
    <header>
        <div className="py-16 flex flex-col space-y-8">
            <div className='grid md:grid-cols-5 gap-4'>
                <div className='md:col-span-3 flex flex-col justify-center text-secondary font-bold bg-cream rounded-3xl py-8 px-12 shadow-2xl z-20'>
                    <h1 className="text-5xl sm:text-4xl lg:text-7xl py-4">Bridging The <span className="text-primary">Gap</span></h1>
                    <hr className="bg-secondary h-0.5"/>
                    <h2 className="text-3xl md:text-3xl lg:text-5xl py-4">Opportunities Meet Aspirations</h2>
                </div>
                <div className="md:col-span-2 z-10 flex justify-center">
                    <img src={hero1} alt="Opened Career Leading Image" title='Opened Career Leading Image' className="w-96 rounded-3xl shadow-2xl"/>
                </div>
            </div>
            <div className='max-w-3xl text-whity grad-to-br rounded-3xl py-6 px-6 sm:px-12 shadow-2xl mt-4 xl:mt-0'>
                <h1 className="text-lg sm:text-2xl py-4 font-semibold">Open Doors to a world of opportunities</h1>
                <p className="text-sm lg:text-md md:text-justify font-medium">
                    Opened Career, founded in 2024, is a cutting-edge online platform dedicated to revolutionizing the job
                    search experience for both candidates and employers. Our mission is to bridge the gap between
                    talented individuals seeking employment opportunities and organizations searching for top-tier
                    talent.
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header