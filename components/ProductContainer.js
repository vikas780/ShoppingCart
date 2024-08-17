'use client'

import React, { useState } from 'react'
import SearchBar from './SearchBar'
import AllProducts from '@/components/AllProducts'
const ProductContainer = ({ data }) => {
  const [filterProducts, setFilterProducts] = useState(data)

  // Show data based on search
  const handleSearch = (query) => {
    const result = data.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase())
    })
    setFilterProducts(result)
  }
  return (
    <>
      <div className='p-4 mx-auto lg:max-w-[87rem] sm:max-w-full mb-16'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12'>
          All Products <SearchBar OnSearch={handleSearch} />
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 '>
          {filterProducts.map((products) => {
            return <AllProducts key={products.id} {...products} />
          })}
        </div>
      </div>
    </>
  )
}

export default ProductContainer
