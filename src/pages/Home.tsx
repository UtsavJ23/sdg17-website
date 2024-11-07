import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to SDG 17: Partnership for the Goals</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction to SDG 17</h2>
        <p className="mb-4">
          Sustainable Development Goal 17 (SDG 17) is a crucial component of the United Nations' 2030 Agenda for Sustainable Development. It focuses on strengthening global partnerships to support and achieve the ambitious targets of the 2030 Agenda, ensuring that no one is left behind.
        </p>
        <p className="mb-4">
          SDG 17 recognizes that the SDGs can only be realized with strong global partnerships and cooperation. The goal aims to enhance North-South and South-South cooperation by supporting national plans to achieve all the targets.
        </p>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Five Key Areas of SDG 17</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Finance</li>
          <li>Technology</li>
          <li>Capacity Building</li>
          <li>Trade</li>
          <li>Systemic Issues</li>
        </ul>
        <p>
          These areas are critical for mobilizing resources, facilitating knowledge sharing, and creating an enabling environment for sustainable development.
        </p>
      </section>
      <div className="mt-8">
        <Link to="/targets" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Explore SDG 17 Targets and Indicators
        </Link>
      </div>
    </div>
  )
}