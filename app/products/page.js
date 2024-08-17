import AllProducts from '@/components/AllProducts'
import axios from 'axios'
import Shimmer from './loading'
import SearchBar from '@/components/SearchBar'

import ProductContainer from '@/components/ProductContainer'

async function Products() {
  let data = []
  let error = null

  try {
    const response = await axios('https://dummyjson.com/products?limit=16')
    data = response.data.products
  } catch (err) {
    // Handle the error and set a user-friendly error message
    error =
      'Failed to load products. Please check your internet connection or try again later.'
  }
  if (!data) {
    return <Shimmer />
  }

  return (
    <>
      {error ? (
        <div className='text-center text-red-600 text-lg'>{error}</div>
      ) : (
        <ProductContainer data={data} />
      )}
    </>
  )
}

export default Products
