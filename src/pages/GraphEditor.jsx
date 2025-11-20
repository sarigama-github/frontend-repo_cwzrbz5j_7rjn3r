import React, { useState } from 'react'
import { Plus, MousePointer2, Pencil, Trash2, Play, RotateCcw, ZoomIn, ZoomOut, Link as LinkIcon, HelpCircle } from 'lucide-react'

function ToolButton({ icon: Icon, label, active, onClick }) {
  return (
    <button onClick={onClick} title={label} className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border text-gray-700 bg-white shadow-sm hover:shadow transition ${active ? 'border-sky-500 text-sky-700 ring-2 ring-sky-100' : 'border-gray-200'}`}>
      <Icon className="w-5 h-5" />
    </button>
  )
}

function MiniTutorial() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-6 right-6 w-80 max-w-[92vw]">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white shadow hover:bg-black">
        <HelpCircle className="w-4 h-4" /> Quick Tips
      </button>
      {open && (
        <div className="mt-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-lg space-y-2">
          {[
            ['How to Add Nodes', 'Select + Node then tap on canvas'],
            ['How to Draw Edges', 'Choose + Edge then connect two nodes'],
            ['How to Run Dijkstra', 'Press ▶ to start visualization'],
            ['How to Reset Graph', 'Use the reset icon to clear states']
          ].map(([t, d], i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none font-medium text-gray-800">{t}</summary>
              <p className="mt-1 text-sm text-gray-600">{d}</p>
            </details>
          ))}
        </div>
      )}
    </div>
  )
}

export default function GraphEditor() {
  const [tool, setTool] = useState('select')
  return (
    <div className="min-h-[70vh]">
      {/* Toolbar */}
      <div className="sticky top-16 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 flex-wrap">
          <ToolButton icon={Plus} label="Add Node" active={tool==='node'} onClick={() => setTool('node')} />
          <ToolButton icon={LinkIcon} label="Add Edge" active={tool==='edge'} onClick={() => setTool('edge')} />
          <ToolButton icon={MousePointer2} label="Select/Move" active={tool==='select'} onClick={() => setTool('select')} />
          <ToolButton icon={Pencil} label="Edit" active={tool==='edit'} onClick={() => setTool('edit')} />
          <ToolButton icon={Trash2} label="Delete" active={tool==='delete'} onClick={() => setTool('delete')} />
          <div className="w-px h-8 bg-gray-200 mx-1" />
          <ToolButton icon={Play} label="Run Dijkstra" onClick={() => {}} />
          <ToolButton icon={RotateCcw} label="Reset" onClick={() => {}} />
          <div className="w-px h-8 bg-gray-200 mx-1" />
          <ToolButton icon={ZoomIn} label="Zoom In" onClick={() => {}} />
          <ToolButton icon={ZoomOut} label="Zoom Out" onClick={() => {}} />
        </div>
      </div>

      {/* Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-[60vh] min-h-[420px] rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center text-gray-500">
          Minimal canvas placeholder — nodes, edges, and animations will render here.
        </div>
      </div>

      <MiniTutorial />
    </div>
  )
}
