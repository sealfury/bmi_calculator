const calculateMetricBMI = (weight, height) => {
    let result
    result = (weight / ((height / 100) * (height / 100))).toFixed(2)


    return result
}

const calculateImperialBMI = (weight, height) => {
    let result
    result = ((weight / (height * height)) * 703)

    return result
}

const getBMIClassification = (value) => {
    if (value < 18.5) {
        return "Underweight"
    } else if (value < 25) {
        return "Normal weight"
    } else if (value < 30) {
        return "Overweight"
    } else if (value < 35) {
        return "Obesity Class 1"
    } else if (value < 40.1) {
        return "Obesity Class 2"
    } else {
        return "Extreme Obesity Class 3"
    }
}