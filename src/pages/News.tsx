import React from 'react'

const news = [
  {
    id: 1,
    title: 'UN High-Level Political Forum on Sustainable Development 2023',
    excerpt: 'Global leaders gather to review progress on SDGs, with a focus on SDG 17 partnerships.',
    date: '2023-07-10',
    category: 'Event',
    author: 'United Nations',
  },
  {
    id: 2,
    title: 'New Global Partnership Launched to Accelerate SDG Financing',
    excerpt: 'Major financial institutions join forces to mobilize resources for sustainable development projects.',
    date: '2023-06-15',
    category: 'Partnership',
    author: 'SDG Finance Coalition',
  },
  {
    id: 3,
    title: 'Technology Transfer Initiative Boosts Capacity in Developing Countries',
    excerpt: 'Innovative program facilitates knowledge sharing and tech adoption to support SDG implementation.',
    date: '2023-05-22',
    category: 'Technology',
    author: 'Global Tech Alliance',
  },
]

export default function News() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">News and Updates</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed about the latest developments, events, and initiatives related to SDG 17.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.date} className="text-gray-500">
                  {item.date}
                </time>
                <a
                  href={`#category-${item.category.toLowerCase()}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {item.category}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`#news-${item.id}`}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={`#author-${item.author.toLowerCase().replace(' ', '-')}`}>
                      <span className="absolute inset-0" />
                      {item.author}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}