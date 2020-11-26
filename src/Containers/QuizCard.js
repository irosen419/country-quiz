import { useState, useEffect } from 'react'
import CapitalQuestion from './CaptalQuestion'
import FlagQuestion from './FlagQuestion'
import '../SCSS/QuizCard.scss'

function QuizCard() {

    const [countryArray, setCountryArray] = useState([])
    const [currentCountries, setCurrentCountries] = useState(null)
    const [score, setScore] = useState(0)
    const [numberAnswered, setNumberAnswered] = useState(0)

    //retrieves all countries from the API
    //country data is formated as an Object, only taking name, capital and flag image
    //sets state with countries, using Hooks
    useEffect(async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        const countries = data.map(country => ({ "name": country.name, "capital": country.capital, "flag": country.flag }))
        setCountryArray(countries)
    }, [])

    //keeps track of question number
    useEffect(() => console.log(numberAnswered), [numberAnswered])

    //retrieves 4 random countries from the countryArray
    const getCountries = () => {
        let countryObjects = []
        let i = 0
        while (i < 4) {
            countryObjects.push(countryArray[Math.floor(Math.random() * countryArray.length)])
            i++
        }
        setCurrentCountries(countryObjects)
    }

    return (
        <div id="quizcard">
            <h2>{ }</h2>
            <button onClick={() => {
                getCountries();
                setNumberAnswered(numberAnswered + 1);
            }}>Next</button>
        </div>
    )
}

export default QuizCard