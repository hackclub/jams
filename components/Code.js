import React, { useEffect, useRef, useState, useLayoutEffect} from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Box, Button, Flex } from 'theme-ui'


function isOverflown(element) {
  console.log(element.scrollHeight)
  console.log(element.clientHeight)
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
 }
export const CodeBlock = ({ children, className }) => {
  const codeRef = useRef(null)
  const preRef = useRef(null)
  const language = className ? className.replace('super-', '') : ''
  const [expand, setExpand] = useState(false)

  var [close_text, updateClose] = useState('')
 
  var [expand_text, updateExpand] = useState('')



  useEffect(() => {
    const element = document.getElementById('Button');
    const parent = document.getElementById('Flex');
    hljs.highlightElement(codeRef.current)
    
    if(preRef != null){
      
     if(isOverflown(preRef.current)){

      updateClose('Close')
      updateExpand('Expand'  )

     }
    }
    
    
  

  }, [children, language, close_text, expand_text])
  
 
    //console.log(isOverflowing)
    return (
      
      <Flex id = 'Flex' sx={{ position: 'relative', flexDirection: 'column' }}>
      { (
        <Button
          variant="primary"
          backgroundColor="slate"
          id = 'Button'
          onClick={() => setExpand(!expand)}
          sx={{
            alignSelf: 'end',
            paddingY: 0,
            width: 'fit-content',
            position: 'absolute',
            right: '20px',
            top: '20px',
          }}>
          {expand ? close_text : expand_text} 
        </Button>
      )}
       
        <pre
          style={{
            marginTop : '10px',
            borderRadius: '8px',
            fontSize: 16,
            overflow: expand ? 'clip' : 'scroll', //change to 'clip' if needed
            maxHeight: expand ? '5%' : '75vh'
          }}
          id = {'ref'}
          ref = {preRef}
          
          >
        
              <code id={'code'} ref={codeRef} className={language}>
                {children}
              </code>
            
            
          
        </pre>
        
      </Flex>
    )

    
  }
  



