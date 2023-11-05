import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Success from './Components/Success/Success';
import About from './Components/About/About.jsx';
import Courses from './Components/Courses/Courses.jsx';
import Faculty from './Components/Faculty/Faculty.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Result from './Components/Result/Result.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Success />
      <About />
      <Courses />
      <Faculty />
      <Testimonials />
      <Result />
      <FAQ />
    </div>
  );
}

export default App;
