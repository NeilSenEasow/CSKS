import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('English');

  return (
    <div className="min-h-screen bg-white">
      <Navbar setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage language={language} />} />
      </Routes>
      <Footer language={language} />
    </div>
  )
}

export default App