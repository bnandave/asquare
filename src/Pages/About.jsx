import React from 'react';
import About_Us from '../Components/About_Us/About_Us';
import History from '../Components/History/History';
import Achivements from '../Components/Achivements/Achivements';
import Faculty from '../Components/Faculty/Faculty';
import Testimonials from '../Components/Testimonials/Testimonials';
import Result from '../Components/Result/Result';
import Introduction from '../Components/Introduction/Introduction';

function About() {
  return (
    <div>
      <About_Us />
      <History />
      <Achivements />
      <Faculty />
      <Testimonials />
      <Result />
      <Introduction />
    </div>
  );
}

export default About;
