'use client'

import Row from "@/components/grid/Row"
import Text from "@/components/typography/Text"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import ImageCustom from "@components/image/Image"
import Link from "next/link"
import { useState } from "react"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header className="header">
      <div className="header-body">
        <div className="header-imagebox">
          <a href="/">
            <Image 
              src="/img/logo.png"
              alt="KGN Galang Perjuangan"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </a>
        </div>

        <button className="header-expand-nav-wrap-button" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars}/>
        </button>

        <div className={`header-nav-wrap ${isNavOpen ? 'show' : ''}`}>
          <ul className="header-nav">
            <li>
              <a href="#">
                <Text size="md" weight={500}>Tentang Kami</Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="md" weight={500}>Program Donasi</Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="md" weight={500}>Berita</Text>
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="header-donate-button"
          >
            Donasi Sekarang
          </a>

          <a href="#" className="header-login-button">
            Masuk / Daftar
          </a>
          
        </div>
      </div>
    </header>
  )
}

export default Header