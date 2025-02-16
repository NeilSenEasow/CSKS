import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-lg mb-8">Discover the latest fashion trends and styles.</p>
      <button
        onClick={() => navigate('/product')}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900"
      >
        Shop Now
      </button>
    </div>
  );
}

export default HomePage; 