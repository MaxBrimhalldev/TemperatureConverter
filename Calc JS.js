// conversion buttons
document.querySelector('#zebra').addEventListener("click", convert)
document.querySelector('#when').addEventListener("click", convertck)

 //celsius to farenheit
function convert(){
// find value
	const celsius = document.querySelector('#f').value
// convert value
	const convertedValue = celsius * 9/5 + 32
// Display value
	document.querySelector('#saySomething').innerText = convertedValue
}
//celsius to kelvin
function convertck (){
// find value
	const kelvinck = document.querySelector('#ck').value
// convert value
	const convertedTotal = Number(kelvinck) + Number(273.15)
// Display value
	document.querySelector('#kelvinckRead').innerText = convertedTotal
}