/*We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny. */
function forecast(arr) {

	let forecast = arr.slice(2, 4);
	arr = forecast
		return arr;
	}
 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));