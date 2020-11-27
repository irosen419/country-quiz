function FlagQuestion({ countries }) {

    return (
        <div>
            <h1>Flag Question</h1>
            {
                countries && countries[0] ?
                    <>
                        <img src={countries[0].flag} alt={`Flag of ${countries[0].name}`} />
                        <h3>Which country does this flag belong to?</h3>
                    </>
                    : null
            }
        </div>
    )
}

export default FlagQuestion