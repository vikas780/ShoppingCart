'use client'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Link from 'next/link'
import { useState } from 'react'
import { slides } from '@/utils/HeroLinks'
import Image from 'next/image'
import Features from '@/components/Features'

export default function Home() {
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
      <div className='max-w-[1400px] h-[480px] w-full m-auto py-8 px-4 relative group '>
        <div className='w-full h-full rounded-2xl bg-gray-300 '>
          <Image
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex}`}
            fill
            className='w-full h-full rounded-2xl object-cover'
          />
        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            ></div>
          ))}
        </div>
      </div>
      <Features />
    </>
  )
}
