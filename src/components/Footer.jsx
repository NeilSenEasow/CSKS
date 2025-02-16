import React from 'react';
import { translations } from '../translations'; // Import translations

function Footer({ language }) {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 md:mb-0">
          <h1 className="text-xl font-semibold">{translations[language].title}</h1>
          <p className="text-sm">Get latest offers to your inbox</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-600">{translations[language].shop}</a>
          <a href="#" className="text-gray-600">{translations[language].myAccount}</a>
          <a href="#" className="text-gray-600">{translations[language].login}</a>
          <a href="#" className="text-gray-600">{translations[language].wishlist}</a>
          <a href="#" className="text-gray-600">{translations[language].cart}</a>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-sm font-semibold">{translations[language].information}</h2>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-600">{translations[language].shippingPolicy}</a></li>
            <li><a href="#" className="text-gray-600">{translations[language].returnsAndRefunds}</a></li>
            <li><a href="#" className="text-gray-600">{translations[language].cookiesPolicy}</a></li>
            <li><a href="#" className="text-gray-600">{translations[language].frequentlyAsked}</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-sm font-semibold">{translations[language].company}</h2>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-600">{translations[language].aboutUs}</a></li>
            <li><a href="#" className="text-gray-600">{translations[language].privacyPolicy}</a></li>
            <li><a href="#" className="text-gray-600">{translations[language].termsAndConditions}</a></li>
            <li><a href="#" className="text-gray-600">{translations[language].contactUs}</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        {translations[language].copyright}
      </div>
    </footer>
  );
}

export default Footer; 