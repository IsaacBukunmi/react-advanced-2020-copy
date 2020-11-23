import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => { 
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if(res.status >= 200 && res.status <= 299){
          return res.json()
        }else{
          setIsLoading(false);
          setIsError(true)
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const{login} = user;
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error)) // This only catches the network error not 404 error
  }, [])

  if(isLoading){
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  if(isError){
    return(
      <div>
        <h1>Error...</h1>
      </div>
    )
  }
  return (
    <h2>{user}</h2>
  );
};

export default MultipleReturns;
