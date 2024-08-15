import AllProducts from '@/components/AllProducts'
import axios from 'axios'
import Shimmer from './loading'

async function Products() {
  const response = await axios('https://dummyjson.com/products?limit=16')
  const data = response.data.products
  if (!data) {
    return <Shimmer />
  }

  return (
    <>
      <div className='p-4 mx-auto lg:max-w-[87rem] sm:max-w-full mb-16'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12'>All Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 '>
          {data.map((products) => {
            return <AllProducts key={products.id} {...products} />
          })}
        </div>
      </div>
    </>
  )
}

export default Products
