import React from 'react';
// import Navbar from '../Components/Navbar/Navbar';
// import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Success from '../Components/Success/Success';
import About from '../Components/About/About.jsx';
import Courses from '../Components/Courses/Courses.jsx';
import Faculty from '../Components/Faculty/Faculty.jsx';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import Result from '../Components/Result/Result.jsx';
import FAQ from '../Components/FAQ/FAQ.jsx';
import Updates from '../Components/Live_Updates/Updates.jsx';
import Introduction from '../Components/Introduction/Introduction.jsx';
import Form from '../Components/Form/Form.jsx';
// import Change from '../Components/Change/Change.jsx';
// import Footer from '../Components/Footer/Footer.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <Success />
      <About />
      <Courses />
      <Faculty />
      <Testimonials />
      <Result />
      <FAQ />
      <Updates />
      <Introduction />
      <Form />
    </div>
  );
}

export default Home;
