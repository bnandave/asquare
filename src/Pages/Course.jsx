import React from 'react';
import Course_hero from '../Components/Course_Hero/Course_hero';
import Course_Details from '../Components/Course_Details/Course_Details';
import Testimonials from '../Components/Testimonials/Testimonials'

function Course() {
  return (
    <div>
      <Course_hero />
      <Course_Details />
      <Testimonials/>
    </div>
  );
}

export default Course;
