import React from 'react'

const loading = () => {
  return (
    <div className='max-w-[1400px] h-[480px] w-full m-auto py-8 px-4 relative group'>
      {/* Shimmer Background */}
      <div className='w-full h-full rounded-2xl bg-gray-300 animate-pulse'></div>
      {/* Left Arrow */}
      <div className='flex top-4 justify-center py-2'>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className='w-4 h-4 bg-gray-300 rounded-full animate-pulse mx-1'
            ></div>
          ))}
      </div>
    </div>
  )
}

export default loading
