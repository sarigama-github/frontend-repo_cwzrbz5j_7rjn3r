import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Home, PenTool, Map, Info, BookText, Award, Mail } from 'lucide-react'

const NavItem = ({ to, icon: Icon, label, onClick }) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link to={to} onClick={onClick} className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}

export default function Sidebar({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/20 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute left-0 top-0 h-full w-72 bg-white border-r border-gray-100 shadow-xl transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-100">
          <div className="font-semibold text-gray-800">Menu</div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 text-gray-700" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 grid gap-1">
          <NavItem to="/" icon={Home} label="Overview" onClick={onClose} />
          <NavItem to="/tutorials" icon={BookText} label="Tutorials" onClick={onClose} />
          <NavItem to="/acknowledgement" icon={Award} label="Acknowledgement" onClick={onClose} />
          <NavItem to="/contact" icon={Mail} label="Contact" onClick={onClose} />
          <div className="h-px bg-gray-100 my-2" />
          <NavItem to="/editor" icon={PenTool} label="Graph Editor" onClick={onClose} />
          <NavItem to="/ku-map" icon={Map} label="KU-Map Pathfinder" onClick={onClose} />
        </nav>
      </aside>
    </div>
  )
}
