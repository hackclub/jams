// components/Image.js

import React from 'react';

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: "400px", borderRadius: "8px", maxWidth: "calc(100vw - 32px)", display:"block", height: 'auto' }} />
);

export default Image;
