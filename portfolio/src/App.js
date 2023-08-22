import logo from './logo.svg';
import './App.css';
import About from "./components/about/About";
import Contact from "./components/Contact";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
