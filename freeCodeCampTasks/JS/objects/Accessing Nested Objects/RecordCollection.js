/*You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function. */

const recordCollection = {
	2548: {
	  albumTitle: 'Slippery When Wet',
	  artist: 'Bon Jovi',
	  tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
	  albumTitle: '1999',
	  artist: 'Prince',
	  tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
	  artist: 'Robert Palmer',
	  tracks: []
	},
	5439: {
	  albumTitle: 'ABBA Gold'
	}
 };
 
 function updateRecords(records, id, prop, value) {
	if (value === "") {
	  delete records[id][prop];
	} else if (prop !== "tracks") {
	records[id][prop] = value;
	} else {
	  if(records[id].hasOwnProperty("tracks")) {
		 records[id].tracks.push(value);
	  } else {
		 records[id].tracks = [];
		 records[id].tracks.push(value);
	  }
	} 
	 return records;
 }
 
 updateRecords(recordCollection, 5439, 'artist', 'ABBA');