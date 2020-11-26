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

    //when user presses start or next, the we change the countries in the question
    useEffect(() => getCountries(), [countryArray, numberAnswered])

    //retrieves 4 random countries from the countryArray
    const getCountries = () => {
        let countryObjects = []
        let i = 0
        while (i < 4) {
            countryObjects.push(countryArray[Math.floor(Math.random() * countryArray.length)])
            i++
        }
        // console.log(numberAnswered, countryObjects)
        setCurrentCountries(countryObjects)
    }

    return (
        <div id="quizcard">
            {/* ensures that when numberAnswered is even we rotate between Capital and Flag questions */}
            {
                numberAnswered % 2 === 0 ?
                    <CapitalQuestion props={currentCountries ? currentCountries : null} />
                    : <FlagQuestion props={currentCountries ? currentCountries : null} />
            }
            {/* caps the question number at 10. when clicked, incremements question number */}
            {
                numberAnswered < 10 ?
                    <button onClick={() => {
                        setNumberAnswered(numberAnswered + 1);
                    }}>Next</button>
                    : null
            }
        </div>
    )
}

export default QuizCard