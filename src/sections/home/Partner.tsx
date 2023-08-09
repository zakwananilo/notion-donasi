import Image from 'next/image'
import React from 'react'

function Partner() {
  return (
    <div className="partner">
      <p className="partner-title">Partner Perjuangan</p>
      <div className="partner-logo">
        <Image
          src="/img/logo_gerindra.png"
          alt="Logo Gerindra"
          width={97}
          height={105}
        />

        <Image
          src="/img/logo_kgn.png"
          alt="Logo KGN"
          width={296}
          height={66}
        />
      </div>
    </div>
  )
}

export default Partner