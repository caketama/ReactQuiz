import React, { useState } from "react";

export default function NumberButton() {
  const [output, setOutput] = useState([]);
  const iterable = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
  ];

  const createNumber = (number) => {
    return <p>{number}</p>;
  };


  const showNumbers = () => {
    setOutput(iterable.map(createNumber));
  };

  return (
    <div>
      <button onClick={e => showNumbers()}>Number Button</button>
    { output }
    </div>
  )
};
