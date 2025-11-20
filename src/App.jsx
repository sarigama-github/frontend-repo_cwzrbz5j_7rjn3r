import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, GitHub, Linkedin } from 'lucide-react'
import Sidebar from './components/Sidebar'

function Topbar({ onMenu }) {
  const location = useLocation()
  const titles = {
    '/': 'Graph Path Finder',
    '/editor': 'Graph Editor',
    '/ku-map': 'KU-Map Pathfinder',
  }
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button aria-label="Open menu" onClick={onMenu} className="p-2 rounded-xl hover:bg-gray-100 text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-sm sm:text-base font-semibold text-gray-800">{titles[location.pathname] || 'Graph Path Finder'}</div>
        <Link to="/" className="p-2 rounded-xl hover:bg-gray-100 text-gray-700">
          <Home className="w-5 h-5" />
        </Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-gray-500 space-y-4">
        <p className="font-medium text-gray-600">Created by the Graph Path Finder Team</p>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <GitHub className="w-5 h-5" /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            contact@example.com
          </a>
        </div>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Graph Path Finder. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Topbar onMenu={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
