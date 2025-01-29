import About from "./components/about/page";
import Contact from "./components/contact/page";
import Hero from "./components/hero/page";
import MenuPage from "./components/menu/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <MenuPage/>
      <About/>
      <Contact/>
    </div>
  );
}
