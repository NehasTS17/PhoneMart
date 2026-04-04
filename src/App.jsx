import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import productsData from './products.json'
import ProductCard from './components/ProductCard'
import CartSidebar from './components/CartSidebar'
import HeroPage from './components/HeroPage'
import ShopByBrand from './components/ShopByBrand'

function App() {

  const slides = [
    "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/a31183e3ea2b9099.jpg?q=50",
    "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c75d751831092885.png?q=50",
    "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/f4e154c8c0693bb8.jpg?q=50",
    "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/73a2db8ce0d06600.png?q=50"
  ]

  const brandLogos=[
    "https://5.imimg.com/data5/SELLER/Default/2022/4/YV/FT/ZK/35132339/mobile-brand-logo-labels.jpg",
    "https://i.pinimg.com/originals/2c/0e/2a/2c0e2ac59211a9c6991f93489960cf90.png",
    "https://inkbotdesign.com/wp-content/uploads/2024/03/motorola-logo-design-1024x683.webp",
    "https://fabrikbrands.com/wp-content/uploads/Mobile-Phone-Company-Logos-22-864x540.png",
    "https://fabrikbrands.com/wp-content/uploads/Mobile-Phone-Company-Logos-20-864x540.png"



  ]

  // ---------------
  const [search, setSearch] = useState("")
  const brands = [...new Set(productsData.map((p) => p.brand))].sort()
  const [priceRange, setPriceRange] = useState([
    Math.min(...productsData.map((p) => p.price)),
    Math.max(...productsData.map((p) => p.price))
  ])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedRam, setSelectedRam] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)

  const [cartItems, setCartItems]=useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart=(product)=>{
    setCartItems((prev)=>{
      const existingItem=prev.find((item)=>item.id === product.id)
      if(existingItem){
        return prev.map((item)=>(item.id===product.id ? {...item, quantity: item.quantity+1}:
          item
        ))
      }
      return [...prev,{...product, quantity:1}]
    })
  }

  const removeFromCart=(id)=>{
    setCartItems((prev)=>prev.filter((item)=>item.id !==id))
  }
  const updateQuantity=(id,quantity)=>{
    if(quantity<=0){
      removeFromCart(id)
    }else{
      setCartItems((prev)=>prev.map((item)=>(item.id ==id ?{...item,quantity}:item)))
    }
  }
    // ----------------------
  const filterProducts = productsData.filter((product) => {
    const { name, brand, color, price, ram, storage } = product
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) ||
      brand.toLowerCase().includes(search.toLowerCase()) ||
      color.toLowerCase().includes(search.toLowerCase())
    const matchBrand = selectedBrands.length === 0 ||
      selectedBrands.includes(brand)
    const matchPrice = price >= priceRange[0] && price <= priceRange[1]
    const matchRam = selectedRam === null || Number(ram) === selectedRam
    const matchStorage = selectedStorage === null || Number(storage) === selectedStorage
    return matchSearch && matchBrand && matchPrice && matchRam && matchStorage
  })
  // ----------------------

  return (
    <>
      <div>
        <Navbar search={search} setSearch={setSearch} cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
        {/* <div className='w-full p-2'>
          <HeroPage slides={slides} />
          <ShopByBrand brandLogos={brandLogos}/>
        </div> */}
        
        <div className='flex'>
          <Sidebar brands={brands}
            selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}
            priceRange={priceRange} setPriceRange={setPriceRange}
            selectedRam={selectedRam} setSelectedRam={setSelectedRam}
            selectedStorage={selectedStorage} setSelectedStorage={setSelectedStorage}
          />
          <div className='flex-1 bg-rose-50'>
            <div className='max-w-7xl mx-auto p-4'>
              <h2 className='text-2xl text-rose-900 font-bold p-4'>Product({filterProducts.length})</h2>

              {filterProducts.length == 0 ?
                (<p className='text-center text-gray-600'>No product found matching your criteria.</p>) :
                (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {filterProducts.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                  ))}

                </div>)}
            </div>
          </div>
        </div>
        <CartSidebar cartItems={cartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
      </div>
    </>
  )
}

export default App
