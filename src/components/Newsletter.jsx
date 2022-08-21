import React from 'react'

function Newsletter() {
  return (
    <>
      <section className='p-4 py-16 text-white '>
        {/* Main Grid */}
        <div className='container grid items-center grid-cols-1 mx-auto max-w-7xl md:grid-cols-5 gap-y-8'>
          {/* Content */}
          <div className='space-y-2 md:col-span-3'>
            <h1 className='max-w-sm text-2xl font-medium text-left lg:max-w-lg xl:max-w-none md:text-3xl'>
              Want tips & tricks to optimize your flow?
            </h1>
            <p className='text-sm text-left md:text-md'>
              Sign up to our newsletter and stay up to date.
            </p>
          </div>
          {/* Input  */}
          <div className='space-y-3 md:col-span-2'>
            <div className='flex flex-col space-y-1 xl:space-y-0 xl:flex-row xl:space-x-4'>
              <input
                type='text'
                className='w-full px-8 py-2 rounded-md'
                placeholder='Enter email'
              />
              <button className='px-8 py-2 font-medium text-gray-900 rounded-md xl:w-52 bg-cyanGreen'>
                Notify me
              </button>
            </div>
            <p className='text-xs'>
              We care about the protection of your data. Read our{' '}
              <span className='border-b text-cyanGreen border-cyanGreen'>
                Privacy Policy.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
