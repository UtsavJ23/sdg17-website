import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">SDG 17 Partnership</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/targets" className="hover:underline">Targets</Link></li>
              <li><Link to="/partnerships" className="hover:underline">Partnerships</Link></li>
              <li><Link to="/success-stories" className="hover:underline">Success Stories</Link></li>
              <li><Link to="/get-involved" className="hover:underline">Get Involved</Link></li>
              <li><Link to="/resources" className="hover:underline">Resources</Link></li>
              <li><Link to="/news" className="hover:underline">News</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}