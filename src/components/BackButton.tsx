import React from 'react'
import Image from './image/Image'

function BackButton() {
  return (
    <a href="/" className="flex items-center">
      <Image src="/img/icon/back.svg" width={12} height={12}/>
      &nbsp;&nbsp;
      Kembali
    </a>
  )
}

export default BackButton