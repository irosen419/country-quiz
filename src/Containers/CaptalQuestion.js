import { useState, useEffect } from 'react'
import AnswerChoice from '../Components/AnserwChoice'

function CapitalQuestion({ countries, type }) {

    const [answer, setAnswer] = useState(null)
    const [wrongAnswers, setWrongAnswers] = useState(null)

    useEffect(() => {
        console.log("HERE")
        if (countries) {
            setAnswer(countries[0])
            setWrongAnswers(countries.slice(1, 4))
        }
    }, [])

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    const mapAnswers = () => {
        let answers = wrongAnswers.concat([answer])
        answers = shuffle(answers).map(country => <AnswerChoice answer={country.name} />)
        return answers
    }

    return (
        <div id="question-card">
            {
                countries ?
                    <>
                        { console.log("Countries: ", countries[0])}
                        < h2 id="question">{countries[0].capital} is the capital of...</h2>
                    </>
                    :
                    null
            }
            { wrongAnswers ? mapAnswers() : null}
        </div >
    )
}

export default CapitalQuestion