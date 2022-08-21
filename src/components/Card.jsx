import React from 'react'

function Card({ img, title, price, features }) {
  return (
    <>
      {' '}
      <div className='px-12 rounded-lg shadow-2xl py-14'>
        {/* Flex Container */}
        <div className='flex flex-col items-center justify-center space-y-10'>
          {/* Image */}
          <img src={img} alt='single' className='-mt-28 w-28' />
          {/* Content */}
          <h1 className='text-2xl font-semibold'>{title}</h1>
          <h2 className='text-4xl font-bold tracking-wide'>{price}</h2>
          {/* Features */}
          <div className='flex flex-col w-full space-y-4 text-center'>
            {features.map((feature) => {
              return (
                <p className='w-full pb-2 font-medium border-b border-gray-300'>
                  {feature}
                </p>
              )
            })}

            {/* <p className=''>500 GB Storage</p>
            <p className='w-full pb-2 font-medium border-b border-gray-300'>
              1 Granted User
            </p>
            <p className='w-full pb-2 font-medium border-b border-gray-300'>
              Send up to 2 GB
            </p> */}
          </div>
          <button className='px-16 py-2 font-medium text-gray-900 rounded-md bg-cyanGreen'>
            Start Trial
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
