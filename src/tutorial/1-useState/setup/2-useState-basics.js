import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState);
  const [text, setText] = useState('random title')
  // Runs when the app is rendered even before clickng on a button
  const handleClick = () => {
    text =='random title' ? setText('Hello World') : setText('random title');
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
          change title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
