import { useState, useEffect } from 'react'
import QuizCard from './Containers/QuizCard'

function App() {
  const [start, setStart] = useState(false)
  const [countryArray, setCountryArray] = useState([])

  //retrieves all countries from the API
  //country data is formated as an Object, only taking name, capital and flag image
  //sets state with countries, using Hooks
  useEffect(async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()
    const countries = data.map(country => ({ "name": country.name, "capital": country.capital, "flag": country.flag }))
    setCountryArray(countries)
  }, [])

  return (
    <div className="App">
      <h1>Country Quiz</h1>


      {start && countryArray.length > 0 ? <QuizCard countries={countryArray} /> : null}
      {start ? null : <button onClick={() => setStart(true)}>Start</button>}
    </div>
  );
}

export default App;
