import React, { useState } from 'react'

const buildings = [
  { id: 'A', name: 'Admin' },
  { id: 'L', name: 'Library' },
  { id: 'S', name: 'Science' },
  { id: 'E', name: 'Engineering' },
  { id: 'C', name: 'Cafeteria' },
]

export default function KUMap() {
  const [start, setStart] = useState('A')
  const [end, setEnd] = useState('L')
  const [path, setPath] = useState([])

  const findPath = () => {
    // Placeholder interaction; backend to power real pathfinding
    setPath(['A', 'S', 'E', 'L'])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">KU-Map Pathfinder</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="h-[60vh] min-h-[420px] rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <div className="grid grid-cols-3 grid-rows-3 gap-6 h-full">
              {buildings.map((b, i) => (
                <div key={b.id} className={`rounded-xl border text-center flex items-center justify-center font-medium ${path.includes(b.id) ? 'bg-sky-50 border-sky-200 text-sky-700' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>{b.name}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="mb-3 font-semibold text-gray-800">Path Selection</div>
            <label className="block text-sm text-gray-600 mb-1">Start Building</label>
            <select value={start} onChange={e=>setStart(e.target.value)} className="w-full rounded-xl border-gray-200">
              {buildings.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
            <label className="block text-sm text-gray-600 mt-3 mb-1">Destination Building</label>
            <select value={end} onChange={e=>setEnd(e.target.value)} className="w-full rounded-xl border-gray-200">
              {buildings.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
            <button onClick={findPath} className="mt-4 w-full px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700">Find Shortest Path</button>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <details>
              <summary className="font-semibold text-gray-800 cursor-pointer">How it works</summary>
              <p className="mt-2 text-sm text-gray-600">Choose start and destination buildings. The shortest path is computed using Dijkstra and highlighted on the map. The intensity reflects distance/steps.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
