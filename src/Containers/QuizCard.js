import { useState, useEffect } from 'react'
// import { countryArray } from '../data'

function QuizCard() {

    const [countryArray, setCountryArray] = useState([])
    const [score, setScore] = useState(0)
    const [answered, setAnswered] = useState(false)

    // useEffect

    useEffect(async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        const countries = data.map(country => ({ "name": country.name, "capital": country.capital, "flag": country.flag }))
        setCountryArray(countries)
    }, [])

    const getCountry = () => {
        let countryObject = countryArray[Math.floor(Math.random() * countryArray.length)]
        console.log(countryObject)
    }

    return (
        <div>
            <h2>{getCountry()}</h2>
        </div>
    )
}

export default QuizCard