import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export const InlineCode = ({ children }) => {
  const codeRef = useRef(null)

  useEffect(() => {
    hljs.highlightBlock(codeRef.current)
  }, [children])

  return (
    <pre style={{ borderRadius: '8px', overflow: 'hidden' }}>
      <code
        ref={codeRef}
        style={{ color: '#c9d1d9', backgroundColor: '#0d1117' }}>
        {children}
      </code>
    </pre>
  )
}

export const CodeBlock = ({ children, className }) => {
  const codeRef = useRef(null)
  const language = className ? className.replace('language-', '') : ''

  useEffect(() => {
    hljs.highlightBlock(codeRef.current)
  }, [children, language])

  return (
    <pre style={{ borderRadius: '8px', fontSize: 16, overflow: 'hidden' }}>
      <code ref={codeRef} className={language}>
        {children}
      </code>
    </pre>
  )
}
