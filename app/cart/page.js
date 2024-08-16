'use client'
import Link from 'next/link'

import React from 'react'

import EmptyCart from '@/components/EmptyCart'
import { clearCart } from '@/features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartItemList from '@/components/CartItems'
import { InrCurrency } from '@/components/InrCurrency'
import { lazy } from 'react'
const LazyLoadCart = lazy(() => import('@/components/CartItems'))

const Cart = () => {
  const { CartItems, ProductQuantity, CartTotal, NumItemsCart } = useSelector(
    (state) => state.cart
  )
  const dispatch = useDispatch()

  if (CartItems.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className='font-sans max-w-7xl max-md:max-w-[45rem] mx-auto p-4 '>
      <h1 className='text-2xl font-extrabold text-gray-800'>Your Cart</h1>
      <div className='grid md:grid-cols-3 gap-4 mt-8'>
        <div className='md:col-span-2 space-y-4'>
          {CartItems.map((item) => {
            return <LazyLoadCart key={item.id} {...item} />
          })}
        </div>

        <div className='bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]'>
          <ul className='text-gray-800 space-y-4'>
            <li className='flex flex-wrap gap-4 text-sm'>
              Subtotal{' '}
              <span className='ml-auto font-bold'>
                {InrCurrency(CartTotal)}
              </span>
            </li>
            <li className='flex flex-wrap gap-4 text-sm'>
              Shipping{' '}
              <span className='ml-auto font-bold'>
                {CartItems.length < 3 ? InrCurrency(50) : InrCurrency(0)}
              </span>
            </li>

            <hr className='border-gray-300' />
            <li className='flex flex-wrap gap-4 text-sm font-bold'>
              Total{' '}
              <span className='ml-auto'>
                {CartItems.length > 2
                  ? InrCurrency(CartTotal)
                  : InrCurrency(CartTotal + 50)}
              </span>
            </li>
          </ul>

          <div className='mt-8 space-y-2'>
            <button
              type='button'
              className='text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md'
            >
              Checkout
            </button>
            <div className='py-2.5'>
              <Link href='/products'>
                <button
                  type='button'
                  className='text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md'
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
            <button
              type='button'
              className='text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-red-500 hover:bg-red-700 text-white rounded-md'
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>

          {/* <div className='mt-4 flex flex-wrap justify-center gap-4'>
            <img
              src='https://readymadeui.com/images/master.webp'
              alt='card1'
              className='w-10 object-contain'
            />
            <img
              src='https://readymadeui.com/images/visa.webp'
              alt='card2'
              className='w-10 object-contain'
            />
            <img
              src='https://readymadeui.com/images/american-express.webp'
              alt='card3'
              className='w-10 object-contain'
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Cart
