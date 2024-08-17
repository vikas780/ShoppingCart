import AllProducts from '@/components/AllProducts'
import axios from 'axios'
import Shimmer from './loading'
import SearchBar from '@/components/SearchBar'

import ProductContainer from '@/components/ProductContainer'

async function Products() {
  const response = await axios('https://dummyjson.com/products?limit=16')
  const data = response.data.products

  if (!data) {
    return <Shimmer />
  }

  return (
    <>
      <ProductContainer data={data} />
    </>
  )
}

export default Products
