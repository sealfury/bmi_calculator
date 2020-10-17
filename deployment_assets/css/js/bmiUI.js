const calculateBMImetric = () => {
    let weightInput = document.getElementById("weightkg")
    let heightInput = document.getElementById("heightcm")
    let resultsMetric = calculateMetricBMI(parseInt(weightInput.value), parseInt(heightInput.value))
    let message = getBMIClassification(parseFloat(resultsMetric))
    let displayResultsElement = document.getElementById('resultsMetric')
    displayResultsElement.innerHTML = `<h2>Your BMI Value Is: ${resultsMetric} and you are deemed ${message}</h2>`
}

const calculateBMIimperial = () => {
    let weightInput = document.getElementById("weightlbs")
    let heightInput = document.getElementById("heightinch")
    let resultsImperial = calculateImperialBMI(parseInt(weightInput.value), parseInt(heightInput.value))
    let message = getBMIClassification(parseFloat(resultsImperial))
    let displayResultsElement = document.getElementById('resultsImperial')
    displayResultsElement.innerHTML = <h2>Your BMI Value Is: ${resultsImperial} and you are deemed ${message}</h2>
}