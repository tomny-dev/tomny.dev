import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import ShowcasePage from "./components/Showcase";

function App() {
  const [showingShowcase, setShowingShowcase] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      setShowingShowcase(window.location.hash !== "" && window.location.hash !== "#home");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      <Navbar onShowcaseClick={() => (window.location.hash = "#showcase")} />
      {!showingShowcase ? (
        <>
          <About />
          <Projects />
        </>
      ) : (
        <ShowcasePage />
      )}
    </>
  );
}

export default App;
