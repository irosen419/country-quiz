import { useState, useEffect } from 'react'
import '../SCSS/QuizCard.scss'

function QuizCard() {

    const [countryArray, setCountryArray] = useState([])
    const [currentCountry, setCurrentCountry] = useState(null)
    const [score, setScore] = useState(0)
    const [answered, setAnswered] = useState(false)

    useEffect(async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        const countries = data.map(country => ({ "name": country.name, "capital": country.capital, "flag": country.flag }))
        setCountryArray(countries)
    }, [])

    const getCountry = () => {
        let countryObject = countryArray[Math.floor(Math.random() * countryArray.length)]
        setCurrentCountry(countryObject)
        console.log(currentCountry)
    }

    return (
        <div id="quizcard">
            <h2>{ }</h2>
        </div>
    )
}

export default QuizCard