// components/Image.js

import React from 'react'

const Image = ({ src, alt }) => (
  // Guide images come from arbitrary hosts and do not provide dimensions.
  // oxlint-disable-next-line nextjs/no-img-element
  <img
    src={src}
    alt={alt}
    style={{
      maxWidth: '100%',
      maxHeight: '50vh',
      // maxWidth: "calc(100vw - 32px)",
      objectFit: 'contain',
      borderRadius: '8px',
      display: 'block'
    }}
  />
)

export default Image
