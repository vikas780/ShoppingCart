'use client'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react'
import { slides } from '@/utils/HeroLinks'
import Image from 'next/image'

export default function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='relative max-w-[1400px] mx-auto py-8 px-4 sm:px-2 md:px-4 group'>
      <div className='w-full h-[480px] rounded-2xl bg-gray-300 relative'>
        <Image
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          fill
          className='w-full h-full rounded-2xl object-cover'
        />
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  )
}
