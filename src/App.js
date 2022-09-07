import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"
import useScript from "./useScript"




function App(url) {
  
  useScript(url)

  return (

<>
<canvas id="canvas" className='w-full h-screen absolute z-0' /> 
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
   
    </>

  );
}

export default App;
