// components/Dropdown.js
import Icon from '@hackclub/icons'

import { useState } from 'react';
import { Box } from 'theme-ui'
export default function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{marginBottom: "8px"}}>
      <Box onClick={toggleOpen} sx={{alignItems: "center",  cursor: "pointer", display: "flex", padding: '8px', borderRadius: "32px", border: "#e0e6ed 1px solid", backgroundColor: "#fff"}}>
        <Icon style={{marginLeft: "8px", marginRight: "8px", flexShrink:0}} glyph={!isOpen ? "down-caret" : "up-caret"}/>
        {title}
      </Box>
      {isOpen && 
      <Box sx={{backgroundColor: 'snow', marginTop: "16px", p: '16px', border: "#e0e6ed 1px solid", borderRadius: "16px"}}>
        {children}
      </Box>}
    </div>
  );
}
