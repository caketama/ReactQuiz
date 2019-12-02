import React from "react";

function NumberDisplay(props) {
  return <p>{props.value}</p>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <p key={number.toString()} value={number} />
  ));
  return <div>{listItems}</div>;
}

export default NumberDisplay;
