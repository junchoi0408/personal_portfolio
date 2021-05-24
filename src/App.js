import Navbar from './navbar/Navbar';
import Header from './header/Header';
import About from './about/About';
import Experience from './experience/Experience';
import Project from './project/Project';
import Form from './form/Form';
import Education from './education/Education';
import Footer from './footer/Footer'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <About />
      <Experience />
      <Education />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
