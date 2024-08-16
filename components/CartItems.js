import Link from 'next/link'
import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, increase, decrease } from '@/features/cart/CartSlice'
import { InrCurrency } from './InrCurrency'
import Image from 'next/image'

const CartItemList = ({ id, title, price, thumbnail, brand }) => {
  const { CartItems } = useSelector((state) => state.cart)
  const item = CartItems.find((item) => item.id === id)
  const dispatch = useDispatch()

  return (
    <div className='flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]'>
      <div className='flex gap-4'>
        <div className='w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0'>
          <Link href={`/products/${id}`}>
            <div className='relative w-full h-full'>
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{ objectFit: 'contain' }} // Equivalent to `object-contain` in CSS
              />
            </div>
          </Link>
        </div>

        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-base font-bold text-gray-800'>
              <Link href={`/products/${id}`}>{title}</Link>
            </h3>
            <p className='text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2'>
              Brand: <span>{brand}</span>
            </p>
          </div>

          <div className='mt-auto flex items-center gap-3'>
            <button
              onClick={() => {
                dispatch(decrease(id))
              }}
              type='button'
              className='flex items-center justify-center w-5 h-5 outline-none rounded-full'
            >
              <FaCircleMinus
                className='text-gray-400 hover:text-gray-800 transition-colors duration-300'
                size={32}
              />
            </button>
            <span className='font-bold text-sm leading-[18px]'>
              {item ? item.ProductQuantity : 1}
            </span>
            <button
              onClick={() => {
                dispatch(increase(id))
              }}
              type='button'
              className='flex items-center justify-center w-5 h-5  outline-none rounded-full'
            >
              <FaCirclePlus
                className='text-gray-400 hover:text-gray-800 transition-colors duration-300'
                size={32}
              />
            </button>
          </div>
        </div>
      </div>

      <div className='ml-auto flex flex-col'>
        <div className='flex items-start gap-4 justify-end'>
          <button onClick={() => dispatch(removeProduct(id))}>
            <RiDeleteBin6Fill className='text-gray-600 hover:text-red-600 transition-colors duration-300' />
          </button>
        </div>
        <h3 className='text-base font-bold text-gray-800 mt-auto'>
          {/* {item && item.ProductQuantity > 1
            ? InrCurrency(price)
            : InrCurrency(price)} */}
          {InrCurrency(price)}
        </h3>
      </div>
    </div>
  )
}

export default CartItemList
