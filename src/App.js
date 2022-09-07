import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"
import useScript from "./useScript"




function App() {
  
  // useScript(url)

  return (



    <div className="relative z-0">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
   
  

  );
}

export default App;
