import React from 'react'

function Card({ img, title, price, features, theme }) {
  return (
    <>
      {' '}
      <div
        className={`px-12 rounded-2xl shadow-xl py-14 hover:scale-105 duration-300 group ease-in-out ${
          theme && 'bg-gray-200'
        }`}
      >
        {/* Flex Container */}
        <div className='flex flex-col items-center justify-center space-y-10'>
          {/* Image */}
          <img
            src={img}
            alt='single'
            className='w-20 -mt-24 md:-mt-28 md:w-28'
          />
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
          </div>
          <button className='px-16 py-2 font-medium text-gray-900 duration-300 ease-in-out rounded-md bg-cyanGreen group-hover:scale-105 group-hover:rotate-1'>
            Start Trial
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
