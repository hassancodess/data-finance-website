import React from 'react'
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'
import Card from './Card'
function Cards() {
  return (
    <>
      <section className='p-4 bg-white py-36 '>
        {/* Main Container */}
        <div className='container grid grid-cols-3 gap-8 mx-auto'>
          {/* Card 1 */}
          <Card
            img={single}
            title='Single User'
            price='$149'
            features={['500 GB Storage', '1 User Allowed', 'Send up to 2 GB']}
          />
          <Card
            img={double}
            title='Single User'
            price='$199'
            features={['1 TB Storage', '3 Users Allowed', 'Send up to 10 GB']}
          />
          <Card
            img={triple}
            title='Single User'
            price='$299'
            features={['5 TB Storage', '10 Users Allowed', 'Send up to 20 GB']}
          />
        </div>
      </section>
    </>
  )
}

export default Cards
