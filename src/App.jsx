import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";



const App = () => {
  return <div>
     <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
    <section id="Services"><Parallax type="services"/></section>
    
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    
    </div>;
};

export default App