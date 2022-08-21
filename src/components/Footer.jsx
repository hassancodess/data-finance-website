import React from 'react'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

function Footer() {
  return (
    <footer className='p-4 py-16 text-white'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-8 lg:justify-items-end'>
          {/* Left Side */}
          <div className='flex flex-col space-y-6 text-center lg:col-span-1'>
            <h1 className='text-2xl font-bold uppercase text-cyanGreen'>
              react.
            </h1>
            <p className='max-w-2xl lg:max-w-none'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div className='flex justify-center space-x-8'>
              <a href='https://twitter.com/hassancodess' target='_blank'>
                <FaTwitter
                  size={25}
                  className='duration-300 hover:text-cyanGreen'
                />
              </a>
              <a href='https://www.instagram.com/hassancodess/' target='_blank'>
                <FaInstagram
                  size={25}
                  className='duration-300 hover:text-cyanGreen'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/hassancodess/'
                target='_blank'
              >
                <FaLinkedinIn
                  size={25}
                  className='duration-300 hover:text-cyanGreen'
                />
              </a>
              <a href='https://github.com/hassancodess' target='_blank'>
                <FaGithub
                  size={25}
                  className='duration-300 hover:text-cyanGreen'
                />
              </a>
              <a href='https://hashnode.com/@hassancodesss' target='_blank'>
                <SiHashnode
                  size={25}
                  className='duration-300 hover:text-cyanGreen'
                />
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className='lg:col-span-2 '>
            <div className='grid grid-cols-3 gap-x-14'>
              <div className='flex flex-col space-y-4'>
                <h4>Solutions</h4>
                <p>Analytics</p>
                <p>Marketing</p>
                <p>Commerce</p>
                <p>Insights</p>
              </div>
              <div className='flex flex-col space-y-4'>
                <h4>Support</h4>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API Status</p>
              </div>
              <div className='flex flex-col space-y-4'>
                <h4>Company</h4>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Press</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
