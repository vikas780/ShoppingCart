import Link from 'next/link'
import React from 'react'

function SingleProduct() {
  return (
    <div className='p-2 lg:max-w-5xl max-w-lg mx-auto mt-20'>
      <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12'>
        <div className='w-full lg:sticky top-0 sm:flex gap-2'>
          <img
            src='https://readymadeui.com/images/product2.webp'
            alt='Product'
            className='w-4/5 rounded-md object-cover'
          />
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-800'>
            Adjective Attire | T-shirt
          </h2>
          <div className='flex flex-wrap gap-4 mt-4'>
            <p className='text-blue-700 text-xl font-bold'>$12</p>
          </div>

          <div className='mt-4'>
            <h3 className='text-xl font-bold text-gray-800'>About the item</h3>
            <p className='mt-4 leading-0 tracking-wider'>
              A gray t-shirt is a wardrobe essential because it is so versatile.
              Available in a wide range of sizes, from extra small to extra
              large, and even in tall and petite sizes. This is easy to care
              for. They can usually be machine-washed and dried on low heat.
            </p>

            <div className='grid grid-cols-[repeat(2,minmax(20px,120px))]  mt-6 items-center'>
              <p className=' font-bold text-gray-600 text-base'>Available:</p>
              <p className='tracking-wider'>In Stock</p>
            </div>
            <div className='grid grid-cols-[repeat(2,minmax(20px,120px))]  mt-6 items-center'>
              <p className=' font-bold text-gray-600 text-base'>SKU:</p>
              <p className='tracking-wider'>RCH45Q1A</p>
            </div>
            <div className='grid grid-cols-[repeat(2,minmax(20px,120px))]  mt-6 items-center'>
              <p className=' font-bold text-gray-600 text-base'>Brand:</p>
              <p className='tracking-wider'>Adidas</p>
            </div>
          </div>
          <button
            type='button'
            className='w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
