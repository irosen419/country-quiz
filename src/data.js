let countryArray

fetch('https://restcountries.eu/rest/v2/all')
    .then(resp => resp.json())
    .then(data => {
        countryArray = data.map(country => ({ "name": country.name, "capital": country.capital, "flag": country.flag }))
    })

export { countryArray }