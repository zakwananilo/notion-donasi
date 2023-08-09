'use server'

import Header from "@/sections/home/Header";
import About from "@/sections/home/About";
import Program from "@/sections/home/Program";
import Partner from "@/sections/home/Partner";
import Footer from "@/sections/home/Footer";
import Hero from "@/sections/home/Hero";

export default async function HomePage() {
  return (
    <main>
      <Header/>

      <Hero/>

      <About/>

      <Program/>

      <Partner/>
      
      <Footer/>
    </main>
  )
}
