import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import React from 'react'

const TagList = () => {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <aside className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 py-4">
        {pathname.startsWith('/blog') ? (
          <h3 className="font-bold uppercase text-primary-500">All Posts</h3>
        ) : (
          <Link
            href={`/blog`}
            className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            All Posts
          </Link>
        )}
        <ul>
          {sortedTags.map((t) => {
            return (
              <li key={t} className="my-3">
                {pathname.split('/tags/')[1] === slug(t) ? (
                  <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                    {`${t} (${tagCounts[t]})`}
                  </h3>
                ) : (
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {`${t} (${tagCounts[t]})`}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default TagList
