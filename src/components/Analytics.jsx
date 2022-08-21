import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <>
      <section className='p-4 py-16 bg-white'>
        {/* Analytics Container */}
        <div className='container mx-auto max-w-7xl'>
          {/* Grid Container */}
          <div className='grid items-center grid-cols-1 justify-items-center md:grid-cols-2 gap-y-10 md:gap-y-0'>
            {/* Image */}
            <img src={Laptop} alt='laptop' className='object-cover w-5/6' />
            {/* Content */}
            <div className='flex flex-col items-start space-y-3'>
              <h3 className='font-semibold uppercase text-md text-cyanGreen'>
                data analytics dashboard
              </h3>
              <h1 className='text-3xl font-bold capitalize'>
                Manage data analytics centrally
              </h1>
              <p className='max-w-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                dolor culpa doloribus odit labore beatae, libero quisquam
                voluptatum molestiae nemo suscipit.
              </p>
              <button className='px-10 py-3 font-medium text-white bg-black rounded-md'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Analytics
