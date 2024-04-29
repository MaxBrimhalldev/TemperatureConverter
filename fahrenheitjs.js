document.querySelector('#how').addEventListener("click", convertfk)
document.querySelector('#better').addEventListener("click", convertf)

// fahrenheit to celsius
function convertf (){
// find value
	const farenheit = document.querySelector('#c').value
// convert value
	const convertedTotal = (farenheit - 32) * 5 / 9
// Display value
	document.querySelector('#celsiusRead').innerText = convertedTotal
}

//fahrenheit to kelvin
function convertfk (){
// find value
	const kelvinfk = document.querySelector('#fk').value
// convert value
	const convertedTotal = (5/9*(kelvinfk-32)) + 273.15
// Display value
	document.querySelector('#kelvinfkRead').innerText = convertedTotal
}