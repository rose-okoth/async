const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Average cat weight 

const fetchCatData = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()

        let totalAverageWeight = 0;

        cats.forEach(cat => {
            weightArray = cat.weight.metric.split("-")
            averageWeight = (parseInt(weightArray[0]) + parseInt(weightArray[1])) / 2
            totalAverageWeight += averageWeight
        })

        averageMetricWeight = totalAveragegWeight / cats.length
        console.log("The average weight is " + averagegMetricWeight.toFixed(2) + " Kgs")

    } catch (err) {
        console.log(err)
    }
}

fetchCatData()

//Largest countries

