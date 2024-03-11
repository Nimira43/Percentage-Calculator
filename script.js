const percentageSlider = document.getElementById('percentageSlider')
const percentageValue = document.getElementById('percentageValue')
 percentageSlider.addEventListener('input', () => 
    percentageValue.textContent = `${percentageSlider.value}%`)

const calculatePercentage = () => {
    const percentSlider = document.getElementById('percentageSlider').value
    const baseNumber = document.getElementById('baseNumber').value
    if (baseNumber === '') {
        alert('Enter a number')
        return
    }
    const result = (parseFloat(baseNumber) * parseFloat(percentSlider) / 100).toFixed(2)
    document.getElementById('result').innerHTML = `Result: ${result}`
}