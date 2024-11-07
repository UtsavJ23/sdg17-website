import React from 'react'
import { Link } from 'react-router-dom'

export default function Partnerships() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Partnership Opportunities</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Partnerships</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Public-Private Partnerships</li>
          <li>North-South Partnerships</li>
          <li>South-South Partnerships</li>
          <li>Triangular Cooperation</li>
          <li>Multi-stakeholder Partnerships</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Partnership Formation Tools</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-semibold">Partnership Matchmaking Platform</h3>
            <p>Connect with potential partners based on shared goals and complementary expertise.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Collaboration Toolkit</h3>
            <p>Access resources and guidelines for effective partnership management and communication.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Funding Database</h3>
            <p>Explore funding opportunities for SDG 17-related projects and initiatives.</p>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Partnership Initiatives</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-semibold">Global Partnership for Effective Development Co-operation</h3>
            <p>A multi-stakeholder platform to advance the effectiveness of development efforts by all actors.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Technology Facilitation Mechanism</h3>
            <p>Promotes science, technology, and innovation cooperation for the SDGs.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Addis Tax Initiative</h3>
            <p>Promotes fair and effective domestic tax systems in partner countries.</p>
          </li>
        </ul>
      </section>
      <div className="mt-8">
        <Link to="/get-involved" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Get Involved in Partnerships
        </Link>
      </div>
    </div>
  )
}