/** @format */

bt1 = document.getElementById("bt1");
bt1.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt2 = document.getElementById("bt2");
bt2.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt3 = document.getElementById("bt3");
bt3.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt4 = document.getElementById("bt4");
bt4.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt5 = document.getElementById("bt5");
bt5.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt6 = document.getElementById("bt6");
bt6.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt7 = document.getElementById("bt7");
bt7.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt8 = document.getElementById("bt8");
bt8.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt9 = document.getElementById("bt9");
bt9.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt0 = document.getElementById("bt0");
bt0.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
btmul = document.getElementById("bt*");
btmul.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
btdiv = document.getElementById("bt/");
btdiv.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
btdot = document.getElementById("bt.");
btdot.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
bt1plus = document.getElementById("bt+");
bt1plus.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});
btmin = document.getElementById("bt-");
btmin.addEventListener("click", (event) => {
	document.getElementById("result").value += event.target.value;
});

input = document.getElementById("result");

document.onkeydown = function (event) {
	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;

	// Target each keypress and update the input screen

	if (key_press == 1) {
		input.value += key_press;
	}
	if (key_press == 2) {
		input.value += key_press;
	}
	if (key_press == 3 || key_code == 32) {
		input.value += key_press;
	}
	if (key_press == 4) {
		input.value += key_press;
	}
	if (key_press == 5) {
		input.value += key_press;
	}
	if (key_press == 6 && event.shiftKey == false) {
		input.value += key_press;
	}
	if (key_press == 7) {
		input.value += key_press;
	}
	if (key_press == 8 && event.shiftKey == false) {
		input.value += key_press;
	}
	if (key_press == 9) {
		input.value += key_press;
	}
	if (key_press == 0) {
		input.value += key_press;
	}
};

btc = document.getElementById("c");
btc.addEventListener("click", () => {
	input.value = " ";
});

btequ = document.getElementById("bt=");
btequ.addEventListener("click", () => {
	var q = eval(input.value);
	document.getElementById("result").value = q;
});

function calculate() {
	var p = document.getElementById("result").value;
	var q = eval(p);
	document.getElementById("result").value = q;
}
