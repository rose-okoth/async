// Level One

const countriesAPI = 'https://restcountries.eu/rest/v2/all'

const countriesData = async() => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        countries.forEach(country => {
            languages = ""
            country.languages.forEach(languageItem => {
                languages += languageItem.name + ", "
            })
            console.log("Country: " + country.name + " Capital:  " + country.capital + " Languages: " + languages + " Population: " + country.population + " Area: " + country.area)
        })
    } catch (err) {
        console.log(err)
    }
}
countriesData()