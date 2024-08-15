'use client'
import React from 'react'
import Image from 'next/image'
import { InrCurrency } from './InrCurrency'
import Link from 'next/link'
import { addToCart } from '@/features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

function Products({ id, title, description, price, thumbnail, brand }) {
  const { ProductQuantity } = useSelector((state) => state.cart)
  const product = {
    id,
    title,
    price,
    thumbnail,
    ProductQuantity,
    brand,
  }
  const dispatch = useDispatch()

  return (
    <div className=' rounded-2xl p-5  hover:-translate-y-2 transition-all relative bg-gray-100 '>
      <Link href={`/products/${id}`}>
        <div className='w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
          <div className='relative h-full w-full'>
            <Image
              src={thumbnail}
              alt={title || 'Default alt text'}
              fill
              style={{ objectFit: 'contain' }}
              className='object-contain'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // Adjust sizes based on your layout
            />
          </div>
        </div>
      </Link>
      <div>
        <Link href={`/products/${id}`}>
          <h3 className='text-lg font-extrabold text-gray-800 min-h-[3.5rem]'>
            {title}
          </h3>
          <p className='text-gray-600 text-sm mt-2 truncate cursor-pointer  lg:p-1'>
            {description}
          </p>
        </Link>

        <div className='flex justify-between align-middle'>
          <h4 className='text-lg text-gray-800 font-bold mt-2'>
            {InrCurrency(price)}
          </h4>
          <Link href={'/cart'}>
            <button
              onClick={() => {
                dispatch(addToCart({ product }))
              }}
              className='text-white font-semibold bg-slate-700 p-2 rounded hover:bg-slate-900 '
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
