// components/Image.js

import React from 'react';

const Image = ({ src, alt }) => (
  <img
    src={src} alt={alt}
    style={{
      width: "100%",
      // maxWidth: "calc(100vw - 32px)",
      maxHeight: "512px",
      objectFit: "cover",
      borderRadius: "8px",
      display:"block",
    }}
  />
);

export default Image;
