import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const targetsData = [
  { name: 'Finance', value: 5 },
  { name: 'Technology', value: 3 },
  { name: 'Capacity Building', value: 2 },
  { name: 'Trade', value: 3 },
  { name: 'Systemic Issues', value: 4 },
]

export default function Targets() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">SDG 17 Targets and Indicators</h1>
      <p className="mb-6">
        SDG 17 comprises 17 targets and 25 indicators, focusing on various aspects of global partnership for sustainable development.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Target Distribution by Area</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={targetsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Key Targets</h3>
          <ul className="list-disc pl-6">
            <li>Strengthen domestic resource mobilization</li>
            <li>Assist developing countries in attaining long-term debt sustainability</li>
            <li>Enhance North-South, South-South, and triangular cooperation</li>
            <li>Promote international trade under a universal, rules-based, open, non-discriminatory and equitable multilateral trading system</li>
            <li>Enhance global macroeconomic stability</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Key Indicators</h3>
          <ul className="list-disc pl-6">
            <li>Total government revenue as a proportion of GDP</li>
            <li>Proportion of domestic budget funded by domestic taxes</li>
            <li>Net official development assistance as a percentage of OECD/DAC donors' GNI</li>
            <li>Fixed Internet broadband subscriptions per 100 inhabitants, by speed</li>
            <li>Dollar value of financial and technical assistance committed to developing countries</li>
          </ul>
        </div>
      </div>
    </div>
  )
}