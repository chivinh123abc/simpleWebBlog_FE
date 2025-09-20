// import { useState } from 'react'
import '~/index.css'
import Navbar from '~/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '~/pages/Home'
import About from '~/pages/About'
import Blog from '~/pages/Blog'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
