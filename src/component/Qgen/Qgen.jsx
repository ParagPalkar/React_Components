import React, { useEffect, useState } from 'react'
import './Qgen.css'

const Qgen = () => {
  const [quotesArray, setQuotesArray] = useState('empty');
  const [counter , setCounter] = useState(0);
  
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then(json => {
      setQuotesArray(json);  
    })  
  },[]);

  function getNewQuote () {
    (counter < quotesArray.length-1) ? 
    setCounter(counter + 1) : 
    setCounter(0) ; 
    
    
  }
  

  return (
    <div className='main' >
        <h1>Quote Generator</h1>
        <section  >
            <h3>"{quotesArray[counter].text}"</h3>
            <i>- {quotesArray[counter].author}</i>
            <button onClick={getNewQuote}>New Quote</button>
        </section>
    </div>
  )
}

export default Qgen