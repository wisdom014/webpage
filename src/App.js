// import logo from './logo.svg';
import NavBar from "./components/Navbar.js";
import Service from "./components/gallery.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
