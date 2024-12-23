// selecting elements
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const calculateButton = document.querySelector('#calculate');
const clearButton = document.querySelector('#clear');

const result = document.querySelector('#result');

calculateButton.addEventListener('click', () => {
  const bmi = Number(weight.value) / ((Number(height.value) / 100) ** 2)
  const roundedBMI = Math.round(bmi * 100) / 100
  result.innerHTML = `Result: ${roundedBMI}`
});