import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <div className='mt-7  mx-auto'>
      <div className='mb-7 max-w-2xl text-center mx-auto'>
        <h2 className='md:text-4xl text-3xl text-gray-700 font-bold '>
          Featured Products
        </h2>
      </div>
      <div className='p-4 mx-auto lg:max-w-[87rem] sm:max-w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 max-xl:gap-4 gap-4 '>
          <div className=' rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative bg-gray-100 '>
            <div className='w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://readymadeui.com/images/product9.webp'
                alt='Product 1'
                className='h-full w-full object-contain'
              />
            </div>

            <div>
              <h3 className='text-lg font-extrabold text-gray-800'>
                Sole Elegance
              </h3>
              <p className='text-gray-600 text-sm mt-2 lg:p-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className='flex justify-between align-middle'>
                <h4 className='text-lg text-gray-800 font-bold mt-2'>$10</h4>
                <button className='text-white font-semibold bg-slate-700 p-2  rounded hover:bg-slate-900 '>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className=' rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative  bg-gray-100'>
            <div className='w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://readymadeui.com/images/product10.webp'
                alt='Product 2'
                className='h-full w-full object-contain'
              />
            </div>

            <div>
              <h3 className='text-lg font-extrabold text-gray-800'>
                Urban Sneakers
              </h3>
              <p className='text-gray-600 text-sm mt-2 lg:p-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className='flex justify-between align-middle'>
                <h4 className='text-lg text-gray-800 font-bold mt-2'>$10</h4>
                <button className='text-white font-semibold bg-slate-700 p-2 rounded hover:bg-slate-900 '>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className=' rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative bg-gray-100 '>
            <div className='w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://readymadeui.com/images/product9.webp'
                alt='Product 1'
                className='h-full w-full object-contain'
              />
            </div>

            <div>
              <h3 className='text-lg font-extrabold text-gray-800'>
                Sole Elegance
              </h3>
              <p className='text-gray-600 text-sm mt-2 lg:p-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className='flex justify-between align-middle'>
                <h4 className='text-lg text-gray-800 font-bold mt-2'>$10</h4>
                <button className='text-white font-semibold bg-slate-700 p-2 rounded hover:bg-slate-900 '>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className=' rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative  bg-gray-100'>
            <div className='w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://readymadeui.com/images/product10.webp'
                alt='Product 2'
                className='h-full w-full object-contain'
              />
            </div>

            <div>
              <h3 className='text-lg font-extrabold text-gray-800'>
                Urban Sneakers
              </h3>
              <p className='text-gray-600 text-sm mt-2 lg:p-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className='flex justify-between align-middle '>
                <h4 className='text-lg text-gray-800 font-bold mt-2'>$10</h4>
                <button className='text-white font-semibold bg-slate-700 p-2 rounded hover:bg-slate-900'>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-2xl text-center mx-auto mt-10 pb-12'>
        <Link
          href='/products'
          className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded '
        >
          All Products
        </Link>
      </div>
    </div>
  )
}

export default Features
