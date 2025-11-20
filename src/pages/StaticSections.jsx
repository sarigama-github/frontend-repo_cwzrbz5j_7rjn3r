import React from 'react'

export function Tutorials() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Tutorials</h1>
      <div className="grid gap-4">
        {[
          ['How to Add Nodes', 'Use the + Node tool then click the canvas'],
          ['How to Create Edges', 'Pick + Edge then connect two nodes'],
          ['How to Set Weights', 'Click an edge to edit weight'],
          ['How to Run Dijkstra', 'Press ▶ to start the visualization'],
          ['How to Reset Visualization', 'Use the reset button to clear states'],
          ['How to Use Navigation Menu', 'Click the hamburger icon to open the sidebar']
        ].map(([t, d], i) => (
          <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="font-semibold text-gray-800">{t}</div>
            <p className="text-sm text-gray-600">{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Acknowledgement() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
        <p className="text-gray-700">This project utilizes Dijkstra’s Algorithm, proposed by Edsger W. Dijkstra in 1956.</p>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-4 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      <p className="text-gray-700">Reach us at contact@example.com or find us on GitHub and LinkedIn.</p>
    </div>
  )
}
