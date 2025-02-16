import { useState } from 'react';
import { translations } from '../translations';

const relatedProducts = [
  {
    id: 1,
    name: 'Classic Cotton Shirt',
    brand: 'John Lewis ANYDAY',
    price: '£79',
    rating: 4.8,
    reviews: 1238,
    image: 'https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg'
  },
  {
    id: 2,
    name: 'Casual Denim Shirt',
    brand: 'John Lewis ANYDAY',
    price: '£45',
    rating: 4.5,
    reviews: 856,
    image: 'https://m.media-amazon.com/images/I/21-tPKalx7L._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 3,
    name: 'Formal White Shirt',
    brand: 'John Lewis ANYDAY',
    price: '£32',
    rating: 4.5,
    reviews: 567,
    image: 'https://m.media-amazon.com/images/I/31ZKRAPVVWL._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 4,
    name: 'Striped Cotton Shirt',
    brand: 'John Lewis ANYDAY',
    price: '£40',
    rating: 4.6,
    reviews: 234,
    image: 'https://m.media-amazon.com/images/I/71jF7678loL._SX569_.jpg'
  }
]

function RelatedProducts({ language }) {
  return (
    <div className="mt-16 max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">{translations[language].relatedProducts}</h2>
        <button className="text-sm underline">View All</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="mb-4 overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <h3 className="font-medium text-sm mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
            <p className="font-semibold mb-2">{product.price}</p>
            
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 text-sm">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-sm text-gray-500">({translations[language].reviews}: {product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts