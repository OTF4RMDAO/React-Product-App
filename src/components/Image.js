import React from 'react';

function Image() {
  const productImage = "https://i.pinimg.com/736x/f3/5d/a3/f35da3a0f4c2f5b2efe9dc798195c6de.jpg";  // Your image URL
  
  return <img src={productImage} alt="Product" style={{ width: '100%' }} />;
}

export default Image;
