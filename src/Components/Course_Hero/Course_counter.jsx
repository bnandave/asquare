import React, { useState, useEffect } from 'react';

function Counter(props) {
  var [sign, setSign] = useState('');
  var [count, setCount] = useState(0);
  const time = 3000;
  const interval = time / props.maxCount;
  useEffect(() => {
    const timer = setInterval(() => {
      if (count > props.maxCount) {
        setSign('+');
        return;
      }
      setCount(count++);
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex-centre-bet" key={props.id}>
      <p>{`${props.p1} ${props.sign}`}</p>
      <p>{props.p2}</p>
    </div>
  );
}

export default Counter;
