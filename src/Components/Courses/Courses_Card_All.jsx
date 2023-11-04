import React, { useState } from 'react';
import './Courses.css';
import '../style.css';
import Courses_Card from './Courses_Card';

function Courses_Card_All(props) {
  let input = 'JEE Mains';
  const buttonStyle = {
    backgroundColor: '#ffdd00',
    padding: '4px 12px',
    borderRadius: '30px',
    color: 'white',
    fontWeight: '700',
    letterSpacing: '2px'
  };

  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick1 = (index) => {
    setSelectedItem(index);
  };

  function name(item, index) {
    return selectedItem === index ? buttonStyle : null;
  }

  const listItems = ['JEE Mains', 'JEE Advance', 'NEET', 'MHT CET'];
  if (props[0].subject == input) {
    input = props[0].details;
    return (
      <div>
        <div className="flex-centre-bet subject_list">
          {listItems.map((item, index) => (
            <li
              key={index}
              style={name(item, index)}
              onClick={() => handleItemClick1(index)}
            >
              {item}
            </li>
          ))}
        </div>
        <div className="card_container">{input.map(Courses_Card)};</div>
      </div>
    );
  }
}

export default Courses_Card_All;
