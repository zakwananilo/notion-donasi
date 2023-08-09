'use client'

import Image from '@/components/image/Image'
import React, { useEffect, useState } from 'react'

function Hero() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop((window.innerWidth > 768));
  }, [])
  
  return (
    <Image
        src={`${isDesktop ? '/img/banner.png' : '/img/banner_mobile.png'}`}
        alt="Banner"
        width="100%"
        height={640}
      />
  )
}

export default Hero