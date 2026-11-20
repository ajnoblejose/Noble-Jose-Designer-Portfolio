import Hero from '../components/sections/Hero';
import SelectedWork from '../components/sections/SelectedWork';
import About from '../components/sections/About';
import WhatIDo from '../components/sections/WhatIDo';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <SelectedWork />
      <About />
      <WhatIDo />
      <Experience />
      <Contact />
    </main>
  );
}
