import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef, useState } from "react";
import Home from "./sections/Home";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import { useEffect } from "react";

function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }, [])
  

  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true, 
            smartphone: {
              smooth: true
            },
            tablet: {
              smooth: true
            }
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
            {!loaded && <Loader />}
          </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main data-scroll-container className="App" ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      
      </ThemeProvider>
    </>
  );
}

export default App;
