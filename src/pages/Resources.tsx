import React from 'react'
import { BookOpenIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const resources = [
  {
    name: 'SDG 17 Report 2023',
    description: 'Comprehensive analysis of progress towards SDG 17 targets.',
    icon: DocumentTextIcon,
    href: '#',
  },
  {
    name: 'Partnership Toolkit',
    description: 'Guide and templates for building effective partnerships.',
    icon: BookOpenIcon,
    href: '#',
  },
  {
    name: 'SDG 17 Online Course',
    description: 'Free e-learning module on partnerships for sustainable development.',
    icon: AcademicCapIcon,
    href: '#',
  },
]

export default function Resources() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources and Tools</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access a curated collection of publications, reports, and tools to support your work on SDG 17.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <resource.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {resource.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{resource.description}</p>
                  <p className="mt-6">
                    <a href={resource.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Access resource <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}