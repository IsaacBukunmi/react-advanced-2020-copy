import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter - Having the second parameter (dependency list - empty array []) makes the useEffect hook only runs on the initial render *** To rectify this and make it run multiple times, add value to the array.

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  // useEffect is used when we want to set up side effect which is some work outside the component which runs after every render
  
  useEffect(() => {
    console.log('call useEffect')
    // hooks cannot be called conditionally(i.e hooks in a conditional) but conditionals can be set in a hooks
    if(value >= 1){
      document.title = `New Message(${value})`
    }
  }, [value])

  console.log('render component')
  return(
    <>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value+1)}>Click me</button>
    </>
  )
};

export default UseEffectBasics;
