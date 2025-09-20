// import { useState } from 'react'
import '~/index.css'
import Navbar from '~/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '~/pages/Home'
import About from '~/pages/About'
import Blog from '~/pages/Blog'
import AddPostWindow from '~/pages/AddPostWindow'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<About />} />
        <Route path="/about" element={<AddPostWindow />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
