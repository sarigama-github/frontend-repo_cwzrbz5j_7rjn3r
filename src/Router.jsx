import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GraphEditor from './pages/GraphEditor'
import KUMap from './pages/KUMap'
import { Tutorials, Acknowledgement, Contact } from './pages/StaticSections'

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/editor" element={<GraphEditor />} />
      <Route path="/ku-map" element={<KUMap />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/acknowledgement" element={<Acknowledgement />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
