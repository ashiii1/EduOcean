import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'

import 'prismjs/themes/prism-solarizedlight.css'


interface CodeSnippetProps {
  code: string
  language: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  )
}

export default CodeSnippet;
export{}
