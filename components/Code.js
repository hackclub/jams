import React, { useEffect, useRef, useState } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Box, Button, Flex } from 'theme-ui'

export const InlineCode = ({ children }) => {
  const codeRef = useRef(null)

  useEffect(() => {
    hljs.highlightElement(codeRef.current)
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
  const [expand, setExpand] = useState(true)

  useEffect(() => {
    hljs.highlightElement(codeRef.current)
  }, [children, language])

  return (
    <Flex sx={{ position: 'relative', flexDirection: 'column' }}>
      <pre
        style={{
          borderRadius: '8px',
          fontSize: 16,
          overflow: 'hidden',
          maxHeight: expand ? '100%' : '75vh'
        }}>
        <code ref={codeRef} className={language}>
          {children}
        </code>
      </pre>
      {/*
      <Button
        variant="primary"
        backgroundColor="slate"
        onClick={() => setExpand(!expand)}
        sx={{
          alignSelf: 'center',
          paddingY: 0,
          width: 'fit-content',
          position: 'absolute',
          bottom: '40px'
        }}>
        {expand ? 'Close' : 'Expand'}
      </Button>*/}
    </Flex>
  )
}
