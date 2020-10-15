const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(parseInt(weightInput.value), parseInt(heightInput.value))
    let message = getBMIClassification(parseFloat(results))
    let displayResultsElement = document.getElementById('results')
    displayResultsElement.innerHTML = `<h2>Your BMI Value Is: ${results} and you are deemed ${message}</h2>`
}