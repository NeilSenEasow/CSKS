import { useState } from 'react'
import { FiHeart, FiShare2, FiInfo } from 'react-icons/fi'
import ProductImages from './ProductImages'
import ProductReviews from './ProductReviews'
import RelatedProducts from './RelatedProducts'
import { translations } from '../translations'

const sizes = ['6', '8', '10', '14', '16', '20']
const colors = [
  { name: 'Royal Brown', code: '#8B4513' },
  { name: 'Grey', code: '#808080' },
  { name: 'Blue', code: '#0000FF' },
  { name: 'Black', code: '#000000' },
]

function ProductPage({ language }) {
  const [selectedSize, setSelectedSize] = useState('6')
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedImage, setSelectedImage] = useState(0)
  const [price, setPrice] = useState('£28.00')

  const handleVariantChange = (color, price) => {
    setSelectedColor(color)
    setPrice(price)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-4 text-left" style={{ marginLeft: '60px' }}>
        <span className="text-gray-500">Homepage / Women / Women's Shirts & Tops / </span>
        <span>{translations[language].productTitle}</span>
      </div>

      {/* Product Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left Column - Product Images */}
        <div className="max-w-lg mx-auto"> {/* Increased width for carousel */}
          <div className="overflow-hidden rounded-lg shadow-lg"> {/* Modular div for carousel */}
            <ProductImages selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">JOHN LEWIS ANYDAY</p>
              <h1 className="text-2xl font-medium mb-2">{translations[language].productTitle}</h1>
              <div className="flex items-center justify-center space-x-4">
                <p className="text-xl font-medium">{price}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <span>4.5</span>
                  <span className="text-gray-500">(1238 Reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-gray-600">
                <FiShare2 className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-600">
                <FiHeart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600">{translations[language].productDescription}</p>
            <button className="text-gray-600 text-sm mt-2 hover:underline">See More...</button>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <div className="flex justify-center mb-2">
              <p className="font-medium">Color: {selectedColor.name}</p>
            </div>
            <div className="flex justify-center space-x-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleVariantChange(color, '£28.00')}
                  className={`w-10 h-10 rounded-sm border-2 ${
                    selectedColor.name === color.name ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.code }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-center mb-2">
              <p className="font-medium">Size: {selectedSize}</p>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 border ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-3">
            <button className="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-900">
              Add To Cart
            </button>
            <button className="w-full border border-black py-3 px-6 font-medium hover:bg-gray-50">
              Checkout Now
            </button>
          </div>

          {/* Additional Information Section */}
          {/* <div className="mt-8 p-4 border border-gray-200 rounded">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <FiInfo className="mr-2" /> Additional Information
            </h2>
            <p className="text-gray-600">
              This product is made from high-quality materials and is designed for comfort and style. 
              Available in multiple sizes and colors, it is perfect for any occasion.
            </p>
          </div> */}

          {/* <div className="mt-6">
            <p className="text-sm text-gray-500">Delivery T&C</p>
          </div> */}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="group cursor-pointer">
            <div className="mb-4 overflow-hidden aspect-square">
              <img
                src="https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg"
                alt="Related Product 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-sm mb-1">Classic Cotton Shirt</h3>
            <p className="font-semibold mb-2">£79</p>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 text-sm">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <span className="text-sm text-gray-500">(1238 Sold)</span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="mb-4 overflow-hidden aspect-square">
              <img
                src="https://m.media-amazon.com/images/I/21-tPKalx7L._SX300_SY300_QL70_FMwebp_.jpg"
                alt="Related Product 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-sm mb-1">Casual Denim Shirt</h3>
            <p className="font-semibold mb-2">£45</p>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 text-sm">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <span className="text-sm text-gray-500">(856 Sold)</span>
            </div>
          </div>
          {/* Add more related products here using the same images */}
        </div>
      </div>

      {/* Reviews Section */}
      <ProductReviews />

      {/* Related Products */}
      <RelatedProducts />
    </div>
  )
}

export default ProductPage