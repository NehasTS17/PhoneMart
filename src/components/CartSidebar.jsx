import React from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

const CartSidebar = ({ cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-20 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className='p-4 h-full flex flex-col justify-between'>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold text-rose-600'>Your Cart</h2>
            <button className='text-gray-600 px-2 rounded bg-gray-300 hover:text-gray-800 text-xl cursor-pointer' onClick={() => setIsCartOpen(false)}>X</button>
          </div>
          {cartItems.length === 0 ? (
            <p className='text-gray-600 text-center mt-10'>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className='flex mb-4' >
                  <img src={item.image} className='w-16 h-16 object-contain mr-4' />
                  <div className='flex-1'>
                    <h3 className='text-sm font-semibold'>{item.name}</h3>
                    <p className='text-xs text-gray-500'>
                      ₹{item.price} x {item.quantity}
                    </p>
                    <div className='flex items-center mt-1'>
                      <button className='px-3 py-1 bg-gray-200 rounded cursor-pointer font-bold'
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className='mx-2 font-semibold'>{item.quantity}</span>
                      <button className='px-3 py-1 bg-gray-200 rounded cursor-pointer font-bold'
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className='ml-4 px-2 py-2 cursor-pointer bg-red-100 rounded text-red-500 hover:text-red-700'
                        onClick={() => removeFromCart(item.id)}><RiDeleteBinFill /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>)}
        </div>
        <div className='border-t pt-4'>
          <p className='text-lg font-semibold'>Total: ₹{totalPrice.toFixed(2)}</p>
          <button className='w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition mt-4 cursor-pointer' disabled={cartItems.length === 0}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar