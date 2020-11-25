import { useState, useEffect } from 'react'
// import { countryArray } from '../data'

function QuizCard() {

    const [countryArray, setCountryArray] = useState([])
    const [score, setScore] = useState(0)
    const [answered, setAnswered] = useState(false)

    // useEffect

    const setCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resp => resp.json())
            .then(data => {
                setCountryArray(data.map(country => ({ "name": country.name, "capital": country.capital, "flag": country.flag })))
            })
    }

    const getCountry = () => {
        let countryObject = countryArray[Math.floor(Math.random() * countryArray.length)]

    }

    return (
        <div>
            <h2>{getCountry()}</h2>
        </div>
    )
}

export default QuizCard