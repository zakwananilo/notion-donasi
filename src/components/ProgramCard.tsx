import { plainToDecimal } from '@/utils/string'
import Link from 'next/link'
import React from 'react'

type Props = {
  program: any
}

function ProgramCard({ program }: Props) {
  return (
    <div className="program-card">
      <div className="program-card-content">
        <div className="program-card-cover">
          <img src={program.cover}/>
        </div>

        <div className="program-card-body">
          <p className="program-card-title">{program.name}</p>

          <p className="program-card-creator">
            Donasi oleh <b className="program-card-creator-name">{program.creator_name || 'Galang Perjuangan'}</b>
          </p>

          <p className="program-card-description">{program.description}</p>

          <div className="program-card-donater">
            <div className="program-card-donater-counter">
              <p className="program-card-donater-counter-title">
                Jumlah Donatur
              </p>
              <p className="program-card-donater-counter-value">
                {plainToDecimal(0)} Donatur
              </p>
            </div>

            <div className="program-card-donater-amount">
              <p className="program-card-donater-amount-title">
                Jumlah Penerima Donasi
              </p>
              <p className="program-card-donater-amount-value">
                Rp {plainToDecimal(0)} / <b>Rp {plainToDecimal(program.donationTarget)}</b>
              </p>
            </div>
          </div>
          
          <a
              href="#"
              className="program-card-button"
            >
              Donasi Sekarang
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard