/*Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings. */

const myMusic = [
	{
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [
		 "CD",
		 "8T",
		 "LP"
	  ],
	  "gold": true
	},
	 /*Добавлен в массив данных, еще один объект */
	{
	  "artist": "Scorpions",
	  "title": "Acoustica",
	  "release_year": 2001,
	  "formats": [
		 "CD",
		 "8T",
		 "LP",
		 "VHS"
	  ],
	  "gold": false
	},
 ];
console.log(myMusic);