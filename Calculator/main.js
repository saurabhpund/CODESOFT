const display = document.getElementById("display");

display.value = 0;

const appendToDisplay = (input) => {
	if (display.value === "0") {
		display.value = input;
	} else {
		display.value += input;
	}
};

const keyPress = document.addEventListener("keydown", function (event) {
	const key = event.key;
	if (key.match(/[0-9\.\+\-\*\/\(\)]/)) {
		appendToDisplay(key);
	} else if (key === "Backspace") {
		clearLast();
	} else if (key === "Enter") {
		calculate();
	}
});

const clearLast = () => {
	let displayValue = display.value;

	if (displayValue.length > 0) {
		displayValue = displayValue.slice(0, -1);
		display.value = displayValue;
	}
	if (displayValue.length === 0) {
		display.value = 0;
	}
};

const clearDisplay = () => {
	display.value = 0;
};

const calculate = () => {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
};
