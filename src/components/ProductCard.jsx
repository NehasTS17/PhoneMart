import React from 'react'

const ProductCard = ({product, addToCart}) => {
  const{image, name, brand, ram ,storage, display ,color, mrp, price}=product
  return (
    <div className='bg-white rounded-2xl shadow p-4 hover:shadow-xl transition-all duration-200'>
      <img 
      className='w-full h-48 object-contain mb-4'
        src={image} alt={name} />
      <h3 className='text-lg font-semibold mb-2 text-rose-800'>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <p className='text-gray-500 mb-1'>{brand.charAt(0).toUpperCase()+brand.slice(1)} | {color}</p>
      <p className='text-gray-500 mb-1'>{ram}GB RAM | {storage}GB Storage</p>
      <p className='text-gray-500 mb-1'>{display}" Display</p>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-xl font-bold text-rose-800'>₹ {price}</p>
          <p className='text-sm text-gray-400 line-through'>₹ {mrp}</p>
        </div>
        <button onClick={()=>addToCart(product)} className='bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-800 transition cursor-pointer'>Add to Card</button>
      </div>
    </div>
  )
}

export default ProductCard