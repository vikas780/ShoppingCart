import React from 'react'

const loading = () => {
  const shimmerElements = Array(4).fill(0)
  return (
    <>
      <div className='max-w-[1400px] h-[480px] w-full m-auto py-8 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-gray-300 animate-pulse'></div>
      </div>
      <div className='p-4 mx-auto lg:max-w-[87rem] sm:max-w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 mt-12'>
          {shimmerElements.map((_, index) => (
            <div
              key={index}
              className='animate-pulse bg-gray-200 p-4 rounded-lg space-y-4'
            >
              {/* Image Section */}
              <div className='bg-gray-300 h-48 w-full rounded-lg'></div>

              {/* Text Section */}
              <div className='space-y-2'>
                <div className='bg-gray-300 h-6 w-3/4 rounded'></div>
                <div className='bg-gray-300 h-4 w-1/2 rounded'></div>
              </div>

              {/* Action Section */}
              <div className='flex justify-between items-center'>
                <div className='bg-gray-300 h-6 w-1/3 rounded'></div>
                <div className='bg-gray-300 h-8 w-16 rounded'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default loading
