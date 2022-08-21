import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <>
      <section className='p-4 py-32 text-white xl:py-52'>
        {/* Hero Container */}
        <div className='container mx-auto max-w-7xl'>
          {/* Flex Container */}
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h3 className='font-medium uppercase text-md text-cyanGreen md:text-xl'>
              Growing with data Analytics
            </h3>
            <h1 className='text-3xl font-semibold tracking-wide md:text-4xl lg:text-7xl'>
              Grow with data.
            </h1>
            <div className='flex flex-col items-center space-x-1 md:flex-row'>
              <p className='text-xl font-semibold'>
                Fast, flexible financing for{' '}
              </p>
              <Typed
                strings={['BTC', 'ETH', 'SASS']}
                loop
                typeSpeed={120}
                backSpeed={120}
                className='text-xl font-semibold text-cyanGreen'
              />
            </div>
            <p className='max-w-lg text-lg font-semibold text-center text-gray-500 '>
              Monitor your data analytics to increase revenue for BTB, ETH, &
              SASS platforms
            </p>
            {/* CTA */}
            <button className='px-16 py-3 font-medium text-gray-900 rounded-md bg-cyanGreen'>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
