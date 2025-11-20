import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Feature = ({ title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1"><CheckCircle className="w-5 h-5 text-sky-500" /></div>
    <div>
      <div className="font-semibold text-gray-800">{title}</div>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
)

const TutorialCard = ({ step, title, desc }) => (
  <div className="min-w-[260px] sm:min-w-[300px] bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
    <div className="text-xs font-semibold text-sky-600 mb-2">Step {step}</div>
    <div className="font-semibold text-gray-800 mb-1">{title}</div>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
)

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero with Spline cover */}
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/20 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Graph Path Finder</h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">A minimalist tool to visualize Dijkstra’s Algorithm and explore pathfinding.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/editor" className="px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow hover:bg-sky-700">Open Graph Editor</Link>
              <Link to="/ku-map" className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow hover:bg-black">Try KU-Map Pathfinder</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-700">Build, edit, and explore graphs with a clean, distraction-free interface. Visualize Dijkstra’s Algorithm step-by-step and discover shortest paths on a simplified KU campus map.</p>
          <div className="grid gap-4">
            <Feature title="Interactive Graph Editor" desc="Drag nodes, connect edges, edit weights, and run the algorithm with smooth transitions." />
            <Feature title="Dijkstra Visualization" desc="See visited nodes, current frontier, and final shortest path highlighted clearly." />
            <Feature title="KU Campus Pathfinder" desc="Pick buildings as start and destination to compute the shortest route." />
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-sm text-gray-600">This project utilizes Dijkstra’s Algorithm, proposed by Edsger W. Dijkstra in 1956.</p>
          </div>
        </div>
        {/* Tutorial carousel */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tutorial</h3>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
            {[
              { t: 'How to Add Nodes', d: 'Use the toolbar’s + Node button, then tap the canvas.' },
              { t: 'How to Create Edges', d: 'Switch to + Edge and connect two nodes.' },
              { t: 'How to Set Weights', d: 'Click an edge to edit its weight.' },
              { t: 'How to Run Dijkstra', d: 'Press ▶ and watch the steps or final path.' },
              { t: 'How to Reset Visualization', d: 'Use the reset icon to clear highlights.' },
              { t: 'How to Use Navigation Menu', d: 'Tap the hamburger to open the sidebar.' },
            ].map((c, i) => (
              <div key={i} className="snap-start">
                <TutorialCard step={i + 1} title={c.t} desc={c.d} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
