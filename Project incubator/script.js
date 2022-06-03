const MIN = 0;
const MAX = 100;
const ATTEMPTS_NUMBER = 10;

const RANDOM_NUMBER = getRandomNumber(); 
const PLAYER_NAME = getPlayerName();

function getRandomNumber () {
	const randomNumber = Math.round(Math.random()*100);
	return randomNumber;
}

function getPlayerName() {
	const playerName = prompt("Как тебя зовут?");
	return playerName;
}

console.log(RANDOM_NUMBER);
console.log(PLAYER_NAME);

const game = (min, max, attemptsNumber, playerName, randomNumber) => {
	alert(`Привет, ${playerName}!
	Я загадал целое число от ${min} до ${max}
	Тебе надо угадать его с ${attemptsNumber} попыток.
	Поехали?`);
	for (let index = 1; index <= attemptsNumber; index++) {
			const playerAnswer = prompt("Какое число, я загадал?", "");
			if (playerAnswer > randomNumber) {
				alert(`Мое число меньше.
				У тебя осталось ${attemptsNumber - index} попыток`);
			} else if (playerAnswer < randomNumber) {
				alert(`Мое число больше.
				У тебя осталось ${attemptsNumber - index} попыток`);
			} else {
				alert(`Поздравляю! Это правильный ответ!`);
				return;
			}
	}
	alert(`Ты не справился за ${attemptsNumber} попыток.
	Тебе надо пройти суровую школу IT-INCUBATOR!`);
};

game(MIN, MAX, ATTEMPTS_NUMBER, PLAYER_NAME, RANDOM_NUMBER);