// components/Image.js

import React from 'react';

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ maxWidth: '490px', display:"block", height: 'auto' }} />
);

export default Image;
