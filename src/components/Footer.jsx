import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 md:mb-0">
          <h1 className="text-xl font-semibold">JOHN LEWIS</h1>
          <p className="text-sm">Get latest offers to your inbox</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-600">Facebook</a>
          <a href="#" className="text-gray-600">Instagram</a>
          <a href="#" className="text-gray-600">Twitter</a>
          <a href="#" className="text-gray-600">Email</a>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-sm font-semibold">Shop</h2>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-600">My account</a></li>
            <li><a href="#" className="text-gray-600">Login</a></li>
            <li><a href="#" className="text-gray-600">Wishlist</a></li>
            <li><a href="#" className="text-gray-600">Cart</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-sm font-semibold">Information</h2>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-600">Shipping Policy</a></li>
            <li><a href="#" className="text-gray-600">Returns & Refunds</a></li>
            <li><a href="#" className="text-gray-600">Cookies Policy</a></li>
            <li><a href="#" className="text-gray-600">Frequently asked</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-600">About us</a></li>
            <li><a href="#" className="text-gray-600">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        © John Lewis plc 2001 - 2024
      </div>
    </footer>
  );
}

export default Footer; 