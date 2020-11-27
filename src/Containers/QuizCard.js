import { useState, useEffect } from 'react'
import CapitalQuestion from './CaptalQuestion'
import FlagQuestion from './FlagQuestion'
import '../SCSS/QuizCard.scss'

function QuizCard({ countries }) {


    const [currentCountries, setCurrentCountries] = useState(null)
    const [score, setScore] = useState(0)
    const [numberAnswered, setNumberAnswered] = useState(0)



    //when user presses start or next, the we change the countries in the question
    useEffect(() => {
        getCountries()
    }, [])

    useEffect(() => {
        getCountries()
    }, [numberAnswered])

    //retrieves 4 random countries from the countryArray
    const getCountries = () => {
        let countryObjects = []
        let i = 0
        while (i < 4) {
            countryObjects.push(countries[Math.floor(Math.random() * countries.length)])
            i++
        }
        console.log(numberAnswered, countryObjects)
        setCurrentCountries(countryObjects)
    }

    const renderQuestions = () => {
        console.log(currentCountries)
        return (numberAnswered % 2 === 0 ?
            < CapitalQuestion countries={currentCountries} type="capital" />
            : <FlagQuestion countries={currentCountries} type="flag" />)
    }

    return (
        <div id="quiz-card">
            {/* {console.log("Countries: ", countryArray)} */}
            {/* ensures that when numberAnswered is even we rotate between Capital and Flag questions */}
            {   currentCountries ?
                renderQuestions()
                : null
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