import Header from './header/Header';
import About from './about/About';
import Experience from './experience/Experience';
import Project from './project/Project';
import Form from './form/Form';
import Education from './education/Education';
import Footer from './footer/Footer'
import "./App.js"

function App() {
  return (
    <div className="App">
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
