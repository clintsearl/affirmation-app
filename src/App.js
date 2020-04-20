import React, { useEffect, useState } from 'react';

import './App.css';
// import {usefetchAff} from './fetchComponent';

function App() {

  // usefetchAff(Url)
  const Url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`
  const [affirmation, setAff] = useState([])
  
  useEffect(()=> {
      fetch(Url)
         .then(response => response.json())
         .then( data => setAff(data.quote))
},[Url])


console.log(affirmation.quoteText)

return (
    
    <div className="App">
      <header className="App-header">
      
        <h1>
         Rate the Quote!
        </h1>
        <div>{affirmation.quoteText}</div>
        <div>{affirmation.quoteAuthor}</div>
      </header>
    </div>
  );
}

export default App;
