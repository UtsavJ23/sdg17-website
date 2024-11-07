import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Targets from './pages/Targets.tsx'
import Partnerships from './pages/Partnerships.tsx'
import SuccessStories from './pages/SuccessStories.tsx'
import GetInvolved from './pages/GetInvolved.tsx'
import Resources from './pages/Resources.tsx'
import News from './pages/News.tsx'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/targets" element={<Targets />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}