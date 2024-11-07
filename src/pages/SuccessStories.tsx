import React from 'react'

const successStories = [
  {
    id: 1,
    title: "Global Partnership for Sustainable Development Data",
    description: "A network of 300+ partners catalyzing more and better data to achieve the SDGs.",
    impact: "Improved data availability and use in over 50 countries.",
    link: "#"
  },
  {
    id: 2,
    title: "Gavi, the Vaccine Alliance",
    description: "A public-private partnership committed to increasing access to immunisation in poor countries.",
    impact: "Helped immunize over 822 million children since 2000.",
    link: "#"
  },
  {
    id: 3,
    title: "The Global Fund to Fight AIDS, Tuberculosis and Malaria",
    description: "A partnership between governments, civil society, the private sector and people affected by the diseases.",
    impact: "Saved 44 million lives since 2002 through prevention, treatment and care services.",
    link: "#"
  }
]

export default function SuccessStories() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover how partnerships are making a real difference in achieving the Sustainable Development Goals.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {successStories.map((story) => (
            <article key={story.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={story.link}>
                    <span className="absolute inset-0" />
                    {story.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{story.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">Impact</time>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {story.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/all-success-stories" className="text-sm font-semibold leading-6 text-indigo-600">
            View all success stories <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}