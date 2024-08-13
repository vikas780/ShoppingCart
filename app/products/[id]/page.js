import Link from 'next/link'
import React from 'react'

function SingleProduct() {
  return (
    <div>
      <h2>Welcome to Single product page</h2>
      <Link href='/' className='m-10 font-medium border-2 bg-red-300'>
        Go to home
      </Link>
    </div>
  )
}

export default SingleProduct
