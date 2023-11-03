import React from 'react';
import student_img_1 from '../Assets/student-img-1.png';
import student_img_2 from '../Assets/student-img-2.jpg';
import student_img_4 from '../Assets/student-img-4.png';

let JEE_Advance, JEE_Mains, Neet, Foundation;

const Course_Data = [
  JEE_Mains = [{
    subject:"JEE Mains",
    details:[{
        id: 1,
        student_img: { student_img_1 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2025',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 2,
        student_img: { student_img_4 },
        status: 'Admission Open',
        class: 'Class 12th Students',
        target_year: 'Target Year is 2024',
        heading: '- One Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 1,
        student_img: { student_img_2 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2023',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      }]}],
  JEE_Advance = [{
    subject:"JEE Advance",
    details:[{
        id: 1,
        student_img: { student_img_2 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2025',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 2,
        student_img: { student_img_1 },
        status: 'Admission Open',
        class: 'Class 12th Students',
        target_year: 'Target Year is 2024',
        heading: '- One Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 1,
        student_img: { student_img_4 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2023',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      }]}],
  Neet = [{
    subject:"NEET",
    details:[{
        id: 1,
        student_img: { student_img_4 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2025',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 2,
        student_img: { student_img_1 },
        status: 'Admission Open',
        class: 'Class 12th Students',
        target_year: 'Target Year is 2024',
        heading: '- One Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 1,
        student_img: { student_img_2 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2023',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      }]}],
  Foundation = [{
    subject:"Foundation",
    details:[{
        id: 1,
        student_img: { student_img_2 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2025',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 2,
        student_img: { student_img_2 },
        status: 'Admission Open',
        class: 'Class 12th Students',
        target_year: 'Target Year is 2024',
        heading: '- One Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      },
      {
        id: 1,
        student_img: { student_img_4 },
        status: 'Admission Open',
        class: 'Class 11th Students',
        target_year: 'Target Year is 2023',
        heading: '- Two Year Programme -',
        sub_heading: 'Your Path to Academic Excellence and Future Achievement'
      }]}]
];

export default Course_Data;