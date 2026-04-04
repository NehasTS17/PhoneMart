import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

const Navbar = ({ search, setSearch, cartItems, setIsCartOpen }) => {
  const totalItems = cartItems.length
  return (
    <nav className='bg-rose-900 p-4 sticky top-0 z-10 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-bold'>PhoneMart</h1>
        <input type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='p-3 text-base bg-white rounded-md w-1/2 focus:outline-none'
          placeholder='Search for smartphone as name or brand or color' />
        <button 
        className='relative text-white text-4xl cursor-pointer'
        onClick={()=>setIsCartOpen((prev)=>!prev)}
        ><TiShoppingCart />
          {totalItems > 0 && <span className='absolute -top-3 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full'>{totalItems}</span>}

        </button>
      </div>
    </nav>
  )
}

export default Navbar