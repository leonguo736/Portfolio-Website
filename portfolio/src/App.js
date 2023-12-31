import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Courses } from "./components/Courses";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Courses />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;