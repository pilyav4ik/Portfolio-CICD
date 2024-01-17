import Contacts from "./components/contacts";
import Hero from "./components/hero/page";
import LocomotiveScroll from 'locomotive-scroll';
import Services from "./components/services";
import Projects from "./components/Projects";
import PreloaderMod from "./components/PreloaderMod";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PreloaderMod />
      <Hero />
      <Projects />
      <Contacts />
    </main>
  )
}
