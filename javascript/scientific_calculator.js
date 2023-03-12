var screen = document.getElementById("screen");

function display(values) {
  screen.value += values;
}

function pi() {
  screen.value = Math.PI;
}

function euler() {
  screen.value = 2.718281828;
}

function allClear() {
  screen.value = "";
}

function backspace() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function square() {
  screen.value = Math.pow(screen.value, 2);
}

function reciprocal() {
  screen.value = 1 / screen.value;
}

function mod() {
  if (screen.value < 0) {
    screen.value = -1 * screen.value;
  }
}

function exponential() {
  let exp = 2.718281828;
  screen.value = Math.pow(exp, screen.value);
}

function squareRoot() {
  screen.value = Math.sqrt(screen.value);
}

function factorial() {
  let num = screen.value;
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  screen.value = fact;
}

function powerOf10() {
  screen.value = Math.pow(10, screen.value);
}

function logarithm() {
  screen.value = Math.log10(screen.value);
}

function ln() {
  screen.value = Math.log(screen.value);
}

function equal() {
  screen.value = eval(screen.value);
}
