import Features from '@/components/Features'
import Carousal from '@/components/Carousal'
import axios from 'axios'
import AllProducts from '@/components/AllProducts'
import Link from 'next/link'

export default async function Home() {
  const response = await axios(
    'https://dummyjson.com/products/category/smartphones?limit=4&skip=2'
  )
  const data = response.data.products

  return (
    <>
      <Carousal />
      <div className='mt-7  mx-auto'>
        <div className='mb-7 max-w-2xl text-center mx-auto'>
          <h2 className='md:text-4xl text-3xl text-gray-700 font-bold '>
            Featured Products
          </h2>
        </div>
        <div className='p-4 mx-auto lg:max-w-[87rem] sm:max-w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 max-xl:gap-4 gap-4 '>
            {data.map((products) => {
              return <AllProducts key={products.id} {...products} />
            })}
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
    </>
  )
}
