'use client'

import React from 'react'

const Utterances = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return
      }
      const scriptElem = document.createElement('script')
      scriptElem.src = 'https://utteranc.es/client.js'
      scriptElem.async = true
      scriptElem.setAttribute('repo', 'dokimion24/dokimion-blog')
      scriptElem.setAttribute('issue-term', 'title')
      scriptElem.setAttribute('theme', 'github-light')
      scriptElem.setAttribute('label', 'blog-comment')
      scriptElem.crossOrigin = 'anonymous'
      elem.appendChild(scriptElem)
    }}
  />
)

export default Utterances
