import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AspectRatio from './pages/AspectRatio'
import ImageEnhance from './pages/ImageEnhance'
import MagicBg from './pages/MagicBg'
import ScrollToTop from './components/ScrollToTop'
import ImgOptimization from './pages/ImgOptimization'
import RemoveBg from './pages/RemoveBg'
import AboutUs from './pages/AboutUs'
import Auth from './pages/Auth'
import Pricing from './pages/Pricing'
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="bg-black text-white font-sans">
        <ToastContainer position='bottom-right'/>
        <Navbar/>
        <main className='min-h-[90vh]'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aspect-ratio" element={<AspectRatio/>}/>
            <Route path="/remove-bg" element={<RemoveBg/>}/>
            <Route path="/magic-bg" element={<MagicBg/>}/>
            <Route path="/ai-enhance" element={<ImageEnhance/>}/>
            <Route path="/img-optimization" element={<ImgOptimization/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/get-started" element={<Auth/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App