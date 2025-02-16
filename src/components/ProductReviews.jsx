import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'

const reviews = [
  {
    id: 1,
    author: 'Daniel Stewart',
    rating: 5,
    date: 'July 5, 2020',
    content: 'This is an amazing product! I love.',
    likes: 53,
  },
  {
    id: 2,
    author: 'Denise Robertson',
    rating: 5,
    date: 'July 3, 2020',
    content: 'This is an amazing product! I love.',
    likes: 12,
  },
  {
    id: 3,
    author: 'Kathryn Murphy',
    rating: 5,
    date: 'June 28, 2020',
    content: 'This is an amazing product! I love.',
    likes: 0,
  }
]

function ProductReviews() {
  return (
    <div className="mt-16 max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center">Product Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold">4.5</div>
            <div>
              <div className="flex text-yellow-400">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-sm text-gray-500">from 1238 reviews</p>
            </div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <span className="w-8">{rating}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{ width: rating === 5 ? '70%' : rating === 4 ? '20%' : '10%' }}
                  ></div>
                </div>
                <span className="w-12 text-right text-sm text-gray-500">
                  {rating === 5 ? '2023' : rating === 4 ? '39' : '0'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(review.rating)}
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">{review.date}</span>
            </div>
            
            <p className="mb-4">{review.content}</p>
            
            <div className="flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/40?u=${review.id}`}
                alt={review.author}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{review.author}</span>
            </div>
            
            <div className="flex items-center space-x-6 mt-4">
              <button className="flex items-center space-x-2">
                <FiThumbsUp />
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center space-x-2">
                <FiThumbsDown />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductReviews