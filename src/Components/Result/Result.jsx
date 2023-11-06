import './Result.css';
import '../style.css';
import point_icon_2 from '../Assets/point-icon-2.png';
import arrow_logo_2 from '../Assets/arrow-logo-2.png';
import result_poster from '../Assets/result-poster.jpg';

function Result() {
  return (
    <div className="result">
      <div className="result_left">
        <div class="title_aaa">
          <span class="block_aaa"></span>
          <h1>
            Result<span></span>
          </h1>
        </div>
        <p className="subtitle result_subtitle">
          Our Students' Exceptional Results and Success Stories
        </p>
        <div className="result_points">
          <div>
            <img src={point_icon_2} alt="logo" />
            <p>Top-Scorers</p>
          </div>
          <div>
            <img src={point_icon_2} alt="logo" />
            <p>Consistency</p>
          </div>
          <div>
            <img src={point_icon_2} alt="logo" />
            <p>Successful JEE Mains results year after year</p>
          </div>
          <div>
            <img src={point_icon_2} alt="logo" />
            <p>National Recognition</p>
          </div>
          <button>Know More</button>
        </div>
      </div>
      <div className="result_right">
        <img src={result_poster} alt="img" />
        <img src={arrow_logo_2} alt="logo" />
        <img src={arrow_logo_2} alt="logo" />
      </div>
    </div>
  );
}

export default Result;
