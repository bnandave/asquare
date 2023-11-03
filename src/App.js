import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Success from './Components/Success/Success';
import About from './Components/About/About.jsx';
import Courses from './Components/Courses/Courses.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Success />
      <About />
      <Courses/>
    </div>
  );
}

export default App;
