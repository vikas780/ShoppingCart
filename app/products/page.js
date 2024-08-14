'use client'
import React, { useEffect, useState } from 'react'
import Shimmer from './loading'

function Products() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return <Shimmer />
  }

  return (
    <div className='font-[sans-serif] '>
      <div className='p-4 mx-auto lg:max-w-[87rem] sm:max-w-full'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12'>All Products</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 '>
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
              <p className='text-gray-600 text-sm mt-2'>
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
        </div>
      </div>
    </div>
  )
}

export default Products
