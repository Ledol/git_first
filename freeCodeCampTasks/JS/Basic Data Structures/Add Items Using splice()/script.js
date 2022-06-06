/*
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places. */
function htmlColorNames(arr) {
	const salmon = 'DarkSalmon';
	const almond = 'BlanchedAlmond';
	arr.splice(0, 2, salmon, almond);
	return arr;
 }
 
 console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));