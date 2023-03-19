var screen = document.getElementById("screen");

let myDEG = document.getElementById("deg");
let isDEG = false;
let originalText = myDEG.innerText;

myDEG.addEventListener("click", function () {
  if (isDEG) {
    myDEG.innerText = originalText;
    isDEG = false;
  } else {
    myDEG.innerText = "RAD";
    isDEG = true;
  }
});

let mySecond = document.getElementById("second");
let isSecond = false;

let squareFunction = document.getElementById("square");
let squareRootFunction = document.getElementById("square-root");
let powerFunction = document.getElementById("power");
let powerOf10Function = document.getElementById("power-of-10");
let logFunction = document.getElementById("log");
let lnFunction = document.getElementById("ln");

let originalSquare = squareFunction.innerHTML;
let originalSquareRoot = squareRootFunction.innerHTML;
let originalPower = powerFunction.innerHTML;
let originalPowerOf10 = powerOf10Function.innerHTML;
let originalLog = logFunction.innerHTML;
let originalLn = lnFunction.innerHTML;

mySecond.addEventListener("click", function () {
  if (isSecond) {
    squareFunction.innerHTML = originalSquare;
    squareFunction.onclick = square;

    squareRootFunction.innerHTML = originalSquareRoot;
    squareRootFunction.onclick = squareRoot;

    powerFunction.innerHTML = originalPower;
    powerFunction.onclick = power;

    powerOf10Function.innerHTML = originalPowerOf10;
    powerOf10Function.onclick = powerOf10;

    logFunction.innerHTML = originalLog;
    logFunction.onclick = logarithm;

    lnFunction.innerHTML = originalLn;
    lnFunction.onclick = ln;

    isSecond = false;
  } else {
    squareFunction.innerHTML = "<i>x</i><sup>3</sup>";
    squareFunction.onclick = cube;

    squareRootFunction.innerHTML = "<sub><big><sup>3</sup>&radic;<i>x</i></big></sub>";
    squareRootFunction.onclick = cubeRoot;

    powerFunction.innerHTML = "<sub><big><sup><i>y</i></sup>&radic;<i>x</i></big></sub>";
    powerFunction.onclick = yRootOfx;

    powerOf10Function.innerHTML = "2<sup><i>x</i></sup>";
    powerOf10Function.onclick = twoPowerX;

    logFunction.innerHTML = "log<i><sub>y</sub>x</i>";
    logFunction.onclick = logyx;

    lnFunction.innerHTML = "e<sup><i>x</i></sup>";
    lnFunction.onclick = ePowerx;

    isSecond = true;
  }
});

function fe() {
  let number = parseFloat(screen.value);
  screen.value = number.toExponential();
}

localStorage.setItem("memory", 0);
var memoryRecall = parseFloat(localStorage.getItem("memory"));

function memory_clear() {
  localStorage.removeItem("memory");
  memoryRecall = 0;
}

function memory_recall() {
  memoryRecall = parseFloat(localStorage.getItem("memory"));
  screen.value = memoryRecall;
}

function memory_add() {
  localStorage.setItem("memory", parseFloat(memoryRecall) + eval(screen.value));
  memoryRecall = parseFloat(localStorage.getItem("memory"));
}

function memory_subtract() {
  localStorage.setItem("memory", parseFloat(memoryRecall) - eval(screen.value));
  memoryRecall = parseFloat(localStorage.getItem("memory"));
}

function memory_store() {
  localStorage.setItem("memory", eval(screen.value));
  memoryRecall = eval(screen.value);
}

function display(displayValues) {
  screen.value += displayValues;
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

function exp() {
  let number = parseFloat(screen.value);
  screen.value = number + "e+0";
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

function power() {
  display('^')
}

function powerOf10() {
  display('10^')
}

function logarithm() {
  screen.value = Math.log10(screen.value);
}

function ln() {
  screen.value = Math.log(screen.value);
}

function changeSign() {
  screen.value = -1 * screen.value;
}

function equal() {
  if (screen.value.includes("^")) {
    screen.value = eval(screen.value.replace(/\^/g, "**"));
  }

  if (screen.value.includes("yroot")) {
    let [baseValue, rootValue] = screen.value.split("yroot");
    let x = parseFloat(baseValue);
    let y = parseFloat(rootValue);
    screen.value = Math.pow(x, 1/y);
  }

  if (screen.value.includes("log base")) {
    let [logValue, baseValue] = screen.value.split("log base");
    let x = parseFloat(logValue);
    let y = parseFloat(baseValue);
    screen.value = Math.log(x) / Math.log(y);
  }

  screen.value = eval(screen.value);
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function cosec() {
  screen.value = Math.cosec(screen.value);
}

function sec() {
  screen.value = Math.sec(screen.value);
}

function cot() {
  screen.value = Math.cot(screen.value);
}

function floor() {
  screen.value = Math.floor(screen.value);
}

function ceiling() {
  screen.value = Math.ceil(screen.value);
}

function random() {
  screen.value = Math.random();
}

function cube() {
  screen.value = Math.pow(screen.value, 3);
}

function cube() {
  screen.value = Math.pow(screen.value, 3);
}

function cubeRoot() {
  screen.value = Math.cbrt(screen.value, 3);
}

function yRootOfx() {
  display('yroot');
}

function twoPowerX() {
  display('2^');
}

function logyx() {
  display('log base');
}

function ePowerx() {
  screen.value = Math.pow(2.718281828, screen.value);
}
