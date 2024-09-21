// components/Link.js

import React from 'react'


const Link = ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

export default Link
