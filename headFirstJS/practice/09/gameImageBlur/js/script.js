window.onload = init;
function init() {
	let images = document.getElementsByTagName("img");
	for(let i = 0; i < images.length; i++) {
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = reblur;
	}
	// let image0 = document.getElementById("zero");
	// image0.onclick = showImageZero;
	// let image1 = document.getElementById("one");
	// image1.onclick = showImageOne;
	// let image2 = document.getElementById("two");
	// image2.onclick = showImageTwo;
	// let image3 = document.getElementById("three");
	// image3.onclick = showImageThree;
	// let image4 = document.getElementById("four");
	// image4.onclick = showImageFour;
	// let image5 = document.getElementById("five");
	// image5.onclick = showImageFive;
};

function showAnswer (eventObj) {
	let image = eventObj.target;
	let name = image.id;
	name = name + ".jpg";
	image.src = "img/" + name;
}
function reblur(eventObj) {
	let image = eventObj.target;
	let name = image.id;
	name = name + "blur.jpg";
	image.src = "img/" + name;
}
// function showImageZero() {
// 	let image = document.getElementById("zero");
// 	image.src = "img/zero.jpg";
// }
// function showImageOne() {
// 	let image = document.getElementById("one");
// 	image.src = "img/one.jpg";
// }
// function showImageTwo() {
// 	let image = document.getElementById("two");
// 	image.src = "img/two.jpg";
// }
// function showImageThree() {
// 	let image = document.getElementById("three");
// 	image.src = "img/three.jpg";
// }
// function showImageFour() {
// 	let image = document.getElementById("four");
// 	image.src = "img/four.jpg";
// }
// function showImageFive() {
// 	let image = document.getElementById("five");
// 	image.src = "img/five.jpg";
// }