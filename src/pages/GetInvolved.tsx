import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function GetInvolved() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Involved</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join the global effort to achieve SDG 17. There are many ways you can contribute and make a difference.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Volunteer</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Join local SDG initiatives</p>
              <p>Participate in awareness campaigns</p>
              <p>Offer your skills to NGOs</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Donate</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Support SDG 17 focused organizations</p>
              <p>Contribute to specific projects</p>
              <p>Set up recurring donations</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Advocate</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Raise awareness on social media</p>
              <p>Engage with local policymakers</p>
              <p>Organize community events</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Partner</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Explore collaboration opportunities</p>
              <p>Join existing partnerships</p>
              <p>Initiate new partnership projects</p>
            </address>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex gap-x-4 rounded-xl bg-gray-50 p-6 ring-1 ring-inset ring-gray-900/5">
            <EnvelopeIcon className="h-7 w-5 flex-none text-gray-400" aria-hidden="true" />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-gray-900">Subscribe to our newsletter</h3>
              <p className="mt-2 text-gray-600">Stay updated on SDG 17 progress and opportunities.</p>
              <p className="mt-4">
                <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                  Sign up <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-xl bg-gray-50 p-6 ring-1 ring-inset ring-gray-900/5">
            <PhoneIcon className="h-7 w-5 flex-none text-gray-400" aria-hidden="true" />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-gray-900">Contact us</h3>
              <p className="mt-2 text-gray-600">Have questions or ideas? We'd love to hear from you.</p>
              <p className="mt-4">
                <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                  Get in touch <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}