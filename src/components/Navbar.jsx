import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'
import { translations } from '../translations'

function Navbar({ setLanguage }) {
  const [language, setLanguageState] = useState('English')

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setLanguageState(selectedLanguage)
    setLanguage(selectedLanguage)
  }

  return (
    <nav className="bg-white border-b font-sans">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-6">
            <Link to="/">
              <h1 className="text-xl font-semibold tracking-wider">{translations[language].title}</h1>
            </Link>
            <button className="text-gray-600">{translations[language].categories}</button>
          </div>
          
          {/* Right section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <FiSearch className="w-5 h-5" />
            </div>
            <select 
              value={language}
              onChange={handleLanguageChange}
              className="border-none bg-transparent text-sm"
            >
              <option value="English">English</option>
              <option value="Malayalam">Malayalam</option>
            </select>
            <FiUser className="w-5 h-5" />
            <FiHeart className="w-5 h-5" />
            <div className="relative">
              <FiShoppingBag className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar