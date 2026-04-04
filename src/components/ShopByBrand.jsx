import React, { useState } from 'react'

const ShopByBrand = ({ brandLogos }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsToShow, setItemsToShow] = useState(1)

    const updateItemsToShow = () => {
        if (window.innerWidth >= 1024) {
            setItemsToShow(4)
        } else if (window.innerWidth >= 768) {
            setItemsToShow(3)
        } else if (window.innerWidth >= 640) {
            setItemsToShow(2)
        } else {
            setItemsToShow(1)
        }
    }
    useState(()=>{
        updateItemsToShow()
        window.addEventListener("resize",updateItemsToShow)
        return()=>window.removeEventListener("resize",updateItemsToShow)
    },[])
    const nextSlide=()=>{
        setCurrentIndex((prevIndex)=>prevIndex>=brandLogos.length-itemsToShow?0:prevIndex+1)
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex ===0? brandLogos.length - itemsToShow  : prevIndex - 1)
    }
    const visibleProducts=brandLogos.slice(currentIndex,currentIndex+itemsToShow)
    return (
        <section className='re'>
            <h2>Shop By Brands</h2>
        </section>
    )
}

export default ShopByBrand