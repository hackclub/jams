// components/Image.js

import React from 'react';

const Image = ({ src, alt }) => (
  <img
    src={src} alt={alt}
    style={{
      maxWidth: "100%",
      maxHeight: "50vh",
      // maxWidth: "calc(100vw - 32px)",
      objectFit: "contain",
      borderRadius: "8px",
      display:"block",
    }}
  />
);

export default Image;
