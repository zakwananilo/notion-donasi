import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-col max-w-[356px]">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={180}
          height={53}
          loading="lazy"
          sizes="(max-width: 600px) 100vw, 50vw"
        />

        <p className="longtext">
          Selamat datang dalam Aplikasi Galang Perjuangan. Sebuah aplikasi layanan penggalangan dana untuk perjuangan politik demi perbaikan kondisi Bangsa, Negara dan Rakyat Indonesia. 
        </p>
      </div>

      <div className="footer-col">
        <p className="title">Galang Perjuangan</p>
        <a href="/about">Tentang Kami</a>
        <a href="/program">Program Donasi</a>
        <a href="/news">Berita</a>
      </div>

      <div className="footer-col">
        <p className="title">Kontak Kami</p>
        <p>Kantor : Lorem Ipsum</p>
        <p>Call Center : +62 081223456789</p>
        <p>Email : galangperjuangan@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer