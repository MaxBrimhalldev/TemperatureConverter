document.querySelector('#what').addEventListener("click", convertkf)
document.querySelector('#where').addEventListener("click", convertkc)

//kelvin to fahrenheit
function convertkf (){
// find value
	const kelvinf = document.querySelector('#kf').value
// convert value
	const convertedTotal = (9/5 * (kelvinf -273.15)) +32
// Display value
	document.querySelector('#kelvinRead').innerText = convertedTotal
}
//kelvin to celsius
function convertkc (){
// find value
	const kelvinc = document.querySelector('#kc').value
// convert value
	const convertedTotal = kelvinc - 273.15
// Display value
	document.querySelector('#kelvincRead').innerText = convertedTotal
}