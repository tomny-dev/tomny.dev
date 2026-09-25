import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main className="portfolio-main">
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
