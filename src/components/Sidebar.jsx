import React from 'react'
import productsData from '../products.json'
const Sidebar = ({ brands, priceRange,setPriceRange, selectedBrands, setSelectedBrands, selectedRam, setSelectedRam, selectedStorage, setSelectedStorage }) => {
    const ramOptions = [...new Set(productsData.map((p) => p.ram))].sort((a,b)=>a-b)
    const storageOptions = [...new Set(productsData.map((p) => p.storage))].sort((a, b) => a - b)

    const minPrice = Math.min(...productsData.map((p) => p.price))
    const maxPrice = Math.max(...productsData.map((p) => p.price))
    return (
        <div className='w-64 bg-rose-100 p-4 h-screen sticky top-16 overflow-y-auto shadow-inner'>
            <h2 className='text-xl font-semibold text-rose-800 mb-6'>Filters</h2>
            {/* brand filter */}
            <div className='mb-6'>
                <h3 className='text-rose-800 font-medium mb-3'>Brands</h3>
                {brands.map((brand) => (
                    <label key={brand} className="flex items-center mb-2 cursor-pointer">
                        <input type="checkbox" 
                        className='mr-2 accent-rose-500'
                        value={selectedBrands.includes(brand)}
                        onChange={()=>setSelectedBrands(
                            selectedBrands.includes(brand)?
                            selectedBrands.filter((b)=>b!==brand):
                            [...selectedBrands, brand])} />
                        {brand.charAt(0).toUpperCase() + brand.slice(1)}
                    </label>
                ))}

            </div>
            {/* price range */}
            <div className='mb-6'>
                <h3 className='text-rose-800 font-medium mb-3'>Price Range</h3>
                <input type="range" 
                className='w-full accent-rose-600'
                min={minPrice}
                max={maxPrice} 
                value={priceRange[1]}
                onChange={(e)=>setPriceRange([minPrice, parseInt(e.target.value)])}
                />
                <div className='flex justify-between text-sm mt-1'>
                    <span>₹ {priceRange[0]}</span>
                    <span>₹ {priceRange[1]}</span>

                </div>
            </div>
            {/* Ram */}
            <div className='mb-6'>
                <h3 className='text-rose-800 font-medium mb-3'>RAM</h3>
                <select 
                className='w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 p-2'
                value={selectedRam ?? ""}
                onChange={(e)=>setSelectedRam(e.target.value?Number(e.target.value):null)}
                >
                    <option value="">All</option>
                    {ramOptions.map((ram) => (
                        <option key={ram} value={ram}>{ram} GB</option>
                    ))}
                </select>
            </div>
            {/* Storage */}
            <div className='mb-6'>
                <h3 className='text-rose-800 font-medium mb-3'>Storage</h3>
                <select 
                className='w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 p-2'
                value={selectedStorage ?? ""}
                onChange={(e)=>setSelectedStorage(e.target.value?Number(e.target.value):null)}
                >
                    <option value="">All</option>
                    {storageOptions.map((storage) => (
                        <option key={storage} value={storage}>{storage} GB</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Sidebar