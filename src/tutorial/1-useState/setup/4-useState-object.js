import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Random Message',
  })
  return <h2>useState object example</h2>;
};

export default UseStateObject;
