import React from 'react';
import './History.css';
import '../style.css';
import history_illustrator from '../Assets/history-illustrator.png';
import { useInView } from 'react-intersection-observer';

function History() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div className="history">
      <div
        ref={viewRef}
        className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
      >
        <span className="block_aaa"></span>
        <h1>
          Our History<span></span>
        </h1>
      </div>
      <p className="subtitle">A Legacy of Educational Excellence</p>
      <div>
        <p className="paragraph">
          Founded with a vision to empower students and ignite their academic
          potential, Asquare Classes has a rich history of dedication and
          achievement. For over [number of years] years, we have been committed
          to delivering top-notch education and guiding countless students
          toward success. Our journey has been marked by continuous growth, a
          relentless pursuit of excellence, and a passion for nurturing young
          minds. Today, we stand as a testament to our unwavering dedication to
          education, with a legacy of remarkable achievements and countless
          success stories that inspire us to reach even greater heights in the
          future. Throughout our history, Asquare Classes has achieved numerous
          milestones that reflect our commitment to education. From consistently
          producing top rankers in competitive exams to expanding our reach to
          [mention any significant achievements, such as opening multiple
          branches or winning awards], every achievement has been a testament to
          our mission of fostering excellence in learning.
        </p>
        <img src={history_illustrator} alt="img" />
      </div>
    </div>
  );
}

export default History;
