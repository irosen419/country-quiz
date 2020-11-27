import { useState, useEffect } from 'react'

function CapitalQuestion({ countries }) {

    const [answer, setAnswer] = useState(null)
    const [wrongAnswers, setWrongAnswers] = useState(null)

    useEffect(() => {
        if (countries) {
            setAnswer(countries[0])
            setWrongAnswers(countries.slice(1, 4))
        }
    }, [countries])

    return (
        <div id="question-card">
            <h1>Capital Question</h1>
            {
                countries && countries[0] ?
                    <h2 id="question">{countries[0].capital} is the capital of...</h2>
                    : null
            }
            {wrongAnswers ? console.log(wrongAnswers) : null}
        </div>
    )
}

export default CapitalQuestion