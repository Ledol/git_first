/*Abbreviate a Two Word Name */
function abbrevName(name){
		let initial = name.split(' ');
		return initial[0].charAt(0).toUpperCase() + '.' + 
		initial[1].charAt(0).toUpperCase();
}