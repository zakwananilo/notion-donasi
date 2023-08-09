import React from 'react'
import ProgramBoard from '@/components/ProgramBoard'

function Program() {
  return (
    <div className="program">
      <p className="title">Donasi Galang Perjuangan</p>
      <p className="description">
      Kami mengajak saudara semuanya bergabung dalam gerakan penggalangan dana rakyat @GalangPerjuangan ini. Kita korbankan sedikit harta kita, senilai sebungkus rokok atau dua bungkus mie instant. Kita biayai sendiri calon-calon pemimpin kita yang bersih, cerdas dan berintegritas. Kita kalahkan kandidat calon pemimpin yang zalim dan tersandera kepentingan pemodal. 
      Kita kembalikan Indonesia Raya kembali merdeka dan berdaulat. 
      </p>
      
      <ProgramBoard/>
    </div>
  )
}

export default Program