// 1. Представление
let view = {
	displayMessage: function(msg) {
		let messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
// Добавляется информация о попадании.
	displayHit: function(location) {
		let cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
// Добавляется информация о промахе.
	displayMiss: function(location) {
		let cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

// 2. Модель
let model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	ships: [
				{locations: [0, 0, 0], hits: ["", "", ""]},
				{locations: [0, 0, 0], hits: ["", "", ""]},
				{locations: [0, 0, 0], hits: ["", "", ""]}
			],
// Функция воспроизведения выстрела
	fire: function(guess) {
		for(let i = 0; i < this.numShips; i++) {
			let ship = this.ships[i];
			let index = ship.locations.indexOf(guess);
			if (index >= 0) {
				// Есть попадание!
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");

				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship");
					this.shipsSunk++;
				}
				return true;
			}
		}
		// Промах
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
	},
// Потопление корабля
	isSunk: function(ship) {
		for (let i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},
// Расстановка кораблей. Проверка на перекрытие
generateShipLocations: function() {
	let locations;
	for (let i = 0; i < this.numShips; i++) {
		do {
			locations = this.generateShip();
		} while (this.collision(locations));
		this.ships[i].locations = locations;
	}
},
// Случайная генерация позиции кораблей
generateShip: function() {
	let direction = Math.floor(Math.random() * 2);
	let row, col;
// Формируется первое значение расположение корабля
	if (direction === 1) { // ГОРИЗОНТАЛЬНОЕ
		row = Math.floor(Math.random() * this.boardSize);
		col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
	} else {
		row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		col = Math.floor(Math.random() * this.boardSize);
	}
		// Устанавливается 3 значения для каждого кораблся, по горизонтали и вертикали.
		let newShipLocations = [];
		for (let i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		} 
		return newShipLocations; // Когда все позиции сгенерированы, метод возвращает массив.
},

// Проверка кораблей на перекрытие друг друга
collision: function (locations) {
	for (let i = 0; i < this.numShips; i++) {
		let ship = model.ships[i];
		for (let j = 0; j < locations.length; j++) {
			if (ship.locations.indexOf(locations[j]) >= 0) {
				return true;
			}
		}
	}
	return false;
}
};

// Подключение кнопки fire для отправки данных
function init() {
	let fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	let guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}

// 3. Контроллер
let controller = {
	guesses: 0,
// Информация о потоплении всех кораблей
	processGuess: function(guess) {
		let location = parseGuess(guess);
		if (location) {
			this.guesses++;
			let hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " +
				this.guesses + " guesses");
				}
		}
	}
};
// Перевод поля для ввода букв в цифры, а также проверка и передача значений
function parseGuess(guess) {
	let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		firstChar = guess.charAt(0);
		let row = alphabet.indexOf(firstChar);
		let column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}

// Подключение клавиши enter для отправки данных
function handleKeyPress(e) {
	let fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}
// Передача информации контроллеру
function handleFireButton() {
	let guessInput = document.getElementById("guessInput");
	let guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}
window.onload = init;


