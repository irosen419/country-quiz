function CapitalQuestion({ countries }) {

    return (
        <div id="question-card">
            <h1>Capital Question</h1>
            {countries && countries[0] ? <h2 id="question">{countries[0].capital} is the capital of...</h2> : null}
        </div>
    )
}

export default CapitalQuestion