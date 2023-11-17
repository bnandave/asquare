import React, { useState } from 'react';
import './Course_Details.css';
import '../style.css';
import point_icon_img3 from '../Assets/point-icon-3.png';
import point_icon_img2 from '../Assets/point-icon-2.png';
import teacher_img_2 from '../Assets/teacher-img-2.png';
import result_poster from '../Assets/result-poster.jpg';
import { useInView } from 'react-intersection-observer';

function Course_Details() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  let [index, setIndex] = useState(1);

  return (
    <div className="Course_Details">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
        <span className="block_aaa"></span>
        <h1>
          Course Details<span></span>
        </h1>
      </div>
      <div className="c_d_selector">
        <ul>
          <li
            onClick={() => setIndex(1)}
            className={index == 1 ? 'li_selected li_btn' : 'li_btn'}
          >
            Course Description
          </li>
          <li
            onClick={() => setIndex(2)}
            className={index == 2 ? 'li_selected li_btn' : 'li_btn'}
          >
            Planner
          </li>
          <li
            onClick={() => setIndex(3)}
            className={index == 3 ? 'li_selected li_btn' : 'li_btn'}
          >
            Fees Structure
          </li>
          <li
            onClick={() => setIndex(4)}
            className={index == 4 ? 'li_selected li_btn' : 'li_btn'}
          >
            Teaching Methodologies
          </li>
          <li
            onClick={() => setIndex(5)}
            className={index == 5 ? 'li_selected li_btn' : 'li_btn'}
          >
            Results & Testimonials
          </li>
        </ul>
      </div>
      {/* Course Content Code bellow */}
      <div className="course_description">
        <p className="c_d_title">Course Decription of NEET</p>
        <p className="c_d_text">
          MOTION has long been distinguished for providing the Best Classroom
          Coaching, Online Learning Facility and getting excellent results. The
          curriculum is specifically designed for the NEET 2026 aspirants along
          with their 11th & Board preparations. To strengthen the foundation,
          conceptual knowledge and enhance the academic skills this course is
          the best option. The course helps the aspirants with better
          understanding of the examination pattern and ensure their success in
          the NEET with ease through a year-long curriculum.
        </p>
        <div className="course_highlights">
          <p className="c_d_title c_highlight_title">Course Highlights</p>
          <div className="c_h_points_container">
            <div>
              <img src={point_icon_img3} alt="icon" />
              <p>Structured Academic Planner for NEET 2026.</p>
            </div>
            <div>
              <img src={point_icon_img3} alt="icon" />
              <p>Complete Syllabus Coverage of Class 11th.</p>
            </div>
            <div>
              <img src={point_icon_img3} alt="icon" />
              <p>Complete Syllabus Coverage of Class 11th.</p>
            </div>
            <div>
              <img src={point_icon_img3} alt="icon" />
              <p>One on One doubt solving support & Regular Test facility.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="planner">
        <p className="c_d_title planner_title">Planner</p>
        <div className="planner_point">
          <div>
            <img src={point_icon_img2} />
            <p>
              8000+ Questions Practice accessible in both Online and Offline
              mode.
            </p>
          </div>
          <div>
            <img src={point_icon_img2} />
            <p>35+ Test Papers Will Conduct for Practice.</p>
          </div>
          <div>
            <img src={point_icon_img2} />
            <p>
              Free Access of Learning App which contain Live Class & Recorded
              Video Lectures, Video Solutions, PYQ'S & Other Support.
            </p>
          </div>
        </div>
        <div className="planner_bottom">
          <button className="c_d_btn">Enroll Now</button>
          <button className="c_d_btn">Planner</button>
        </div>
      </div>
      <div className="fees">
        <p className="c_d_title fees_title">
          Course Fee for 11th Class- Targeting NEET 2026
        </p>
        <div className="fees_container">
          <p className="fees_text">Classroom Program</p>
          <div className="fees_bottom">
            <p>
              CLASSROOM Mode is available for student who wants to study in
              offline center
            </p>
            <p>₹ 49,999 /-</p>
            <button className="c_d_btn">Pay Now</button>
          </div>
        </div>
      </div>
      <div className="teaching">
        <div className="t_top">
          <p className="c_d_title">
            BEST CLASSROOM PROGRAM FOR NEET PREPARATION
          </p>
          <img src={teacher_img_2} alt="img" />
        </div>
        <div className="t_bottom">
          <div className="t_bottom_card">
            <img src={point_icon_img3} alt="icon" />
            <div>
              <p className="c_d_points">Regular Yearlong Classroom Program</p>
              <p>
                Our classroom programs are very interactive and are designed
                with such proficiency that no extra study material is needed to
                achieve your desired success in NEET.
              </p>
            </div>
          </div>
          <div className="t_bottom_card">
            <img src={point_icon_img3} alt="icon" />
            <div>
              <p className="c_d_points">Topic wise DPPs and Question Bank</p>
              <p>
                It helps with boosting the confidence of students for facing
                National Level competitive exams by providing subject-wise and
                topic-wise questions with solutions.
              </p>
            </div>
          </div>
          <div className="t_bottom_card">
            <img src={point_icon_img3} alt="icon" />
            <div>
              <p className="c_d_points">
                Test Your Performance With Motion Online Test Series
              </p>
              <p>
                Online Test Series (OTS) is designed according to NEET Main +
                Advanced and NEET exam pattern that stimulates the actual
                examination environment and provides an opportunity to revise
                every concept thoroughly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="c_d_result">
        <p className="c_d_title">NEET Result-2023</p>
        <img src={result_poster} alt="img" />
        <button className="c_d_btn">Enroll Now</button>
      </div>
    </div>
  );
}

export default Course_Details;
