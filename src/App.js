import React, { useEffect, useState } from 'react';
import Contact from './form'
import './App.css';
// import {usefetchAff} from './fetchComponent';

function App() {

  // usefetchAff(Url)
  
   const Url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`
  // const Url = "https://quotes.rest/quote/random?language=en&limit=1"
  const [affirmation, setAff] = useState([])
  
  useEffect(()=> {
      fetch(Url)
         .then(response => response.json())
         .then( data => setAff(data.quote))
},[Url])


console.log()
return (
    
    <div className="App">
      <header className="App-header">
        <h1>
         Rate the Quote!
        </h1>
      </header>
      <div className="Quote">
        <div>{affirmation.quoteText}</div>
        <div>{affirmation.quoteAuthor}</div>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
