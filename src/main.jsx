import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import GraphEditor from './pages/GraphEditor'
import KUMap from './pages/KUMap'
import { Tutorials, Acknowledgement, Contact } from './pages/StaticSections'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Home />} />
          <Route path="editor" element={<GraphEditor />} />
          <Route path="ku-map" element={<KUMap />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="acknowledgement" element={<Acknowledgement />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
