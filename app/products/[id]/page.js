'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { InrCurrency } from '@/components/InrCurrency'
import axios from 'axios'
import { addToCart } from '@/features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

function SingleProduct({ params }) {
  const [singleProduct, setSingleProduct] = useState('')
  const dispatch = useDispatch()
  const { ProductQuantity } = useSelector((state) => state.cart)

  async function FetchSingleProduct(id) {
    const response = await axios(`https://dummyjson.com/products/${id}`)
    setSingleProduct(response.data)
  }
  useEffect(() => {
    FetchSingleProduct(params.id)
  }, [])

  const { id, title, description, price, thumbnail, sku, brand } = singleProduct
  const product = {
    id,
    title,
    price,
    thumbnail,
    ProductQuantity,
    brand,
  }

  return (
    <div className='p-2 lg:max-w-5xl max-w-lg mx-auto mt-20'>
      <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12'>
        <div className='w-full lg:sticky top-0 sm:flex gap-2'>
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title || 'Product title'}
              className='w-4/5 rounded-md object-cover'
              width={400}
              height={400}
            />
          ) : (
            <div className='w-full lg:sticky top-0 sm:flex gap-2'>
              <div className='w-4/5 rounded-md bg-gray-300 h-96 animate-pulse'></div>
            </div>
          )}
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-800'>
            {title ? (
              title
            ) : (
              <div className='h-8 bg-gray-300 rounded-md w-3/4 animate-pulse'></div>
            )}
          </h2>
          <div className='flex flex-wrap gap-4 mt-4'>
            <p className='text-blue-700 text-xl font-bold'>
              {InrCurrency(price)}
            </p>
          </div>

          <div className='mt-4'>
            <h3 className='text-xl font-bold text-gray-800'>About the item</h3>
            <p className='mt-4 leading-0 tracking-wider'>{description}</p>

            <div className='grid grid-cols-[repeat(2,minmax(20px,120px))]  mt-6 items-center'>
              <p className=' font-bold text-gray-600 text-base'>Available:</p>
              <p className='tracking-wider'>In Stock</p>
            </div>
            <div className='grid grid-cols-[repeat(2,minmax(20px,120px))]  mt-6 items-center'>
              <p className=' font-bold text-gray-600 text-base'>SKU:</p>
              <p className='tracking-wider'>{sku}</p>
            </div>
            <div className='grid grid-cols-[repeat(2,minmax(20px,120px))]  mt-6 items-center'>
              <p className=' font-bold text-gray-600 text-base'>Brand:</p>
              <p className='tracking-wider'>{brand || 'Unavailable'}</p>
            </div>
          </div>
          <Link href={'/cart'}>
            <button
              type='button'
              onClick={() => dispatch(addToCart({ product }))}
              className='w-full mt-8 px-6 py-3 bg-slate-700
            hover:bg-slate-900 text-white text-sm font-semibold rounded-md'
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
