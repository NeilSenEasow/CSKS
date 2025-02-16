import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ProductImages({ selectedImage, setSelectedImage }) {
  const [images, setImages] = useState([
    'https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg',
    'https://m.media-amazon.com/images/I/21-tPKalx7L._SX300_SY300_QL70_FMwebp_.jpg',
    'https://m.media-amazon.com/images/I/31ZKRAPVVWL._SX300_SY300_QL70_FMwebp_.jpg',
    'https://m.media-amazon.com/images/I/71jF7678loL._SX569_.jpg'
  ])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedImage(index)
  }

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="mb-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="aspect-square">
              <img 
                src={image} 
                alt={`Product ${index + 1}`} 
                className={`w-full h-full object-cover ${selectedImage === index ? 'border-2 border-black' : ''}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border aspect-square ${
              selectedImage === index ? 'border-black' : 'border-gray-200'
            }`}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImages