import React, { useState, useEffect } from 'react';

import supportsWebP from 'supports-webp';

export default function ImgWebp(props) {
  const { className, src, alt } = props
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    supportsWebP.then(supported => {
      if (supported)
        setImgSrc(src.split('.').slice(0, -1) + '.webp');
    });
  });
  return (
    <img className={className} src={imgSrc} alt={alt} />
  )
}
