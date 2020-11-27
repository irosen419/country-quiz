import { useState, useEffect } from 'react'
import AnswerChoice from '../Components/AnserwChoice'

function FlagQuestion({ countries }) {

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
            <h1>Flag Question</h1>
            {
                countries && countries[0] ?
                    <>
                        <img src={countries[0].flag} alt={`Flag of ${countries[0].name}`} />
                        <h3>Which country does this flag belong to?</h3>
                    </>
                    : null
            }

            {wrongAnswers ? console.log(wrongAnswers) : null}
        </div>
    )
}

export default FlagQuestion