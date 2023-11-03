import React, { useEffect, useState } from 'react';
import College_Data from './College_Data';
import './Success.css';

function Success() {
  var [name, setName] = useState(College_Data[0]);
  var num = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      num++;
      if (num >= College_Data.length) {
        num = 0;
      }
      setName(College_Data[num]);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="success">
      <p>Our Students Secure Seats at</p>
      <p>{name}</p>
    </div>
  );
}

export default Success;
