import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const HeroPage = ({slides}) => {
    let [current,setCurrent]=useState()

    let previousSlide=()=>{
        if(current===0) setCurrent(slides.length-1)
        else setCurrent(current-1)
    }
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }
  return (
      <div className='relative overflow-hidden'>
        <div className={`w-screen h-96 flex transition ease-out duration-700`}
        style={{
            transform: `translateX(-${current * 100}%)`
        }}>
            {slides.map((s)=>{
                return <img src={s}/>
            })}
        </div>
        <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
              <button className='cursor-pointer hover:text-gray-200' onClick={previousSlide}><FaArrowAltCircleLeft /></button>
              <button className='cursor-pointer hover:text-gray-200' onClick={nextSlide}><FaArrowAltCircleRight /></button>
        </div>
        <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
            {slides.map((s,i)=>{
                return(
                    <div
                    onClick={()=>setCurrent(i)}
                    key={"circle" + i} className={`rounded-full w-5 h-5  ${i == current ?"bg-white":"bg-gray-500"} cursor-pointer`}>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default HeroPage