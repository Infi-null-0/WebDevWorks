// welcome
console.log("Retro Calculator v1.0 -- INITIALIZED");

// vars
let str = "";
let display = document.getElementById("display");
display.innerText = "HELLO WORLD";
// functions

function clearDisplay() {
  str = "";
  display.innerText = str;
}

function del() {
  str = str.slice(0, -1);
  display.innerText = str;
}

function concatenate(key) {
  str += key;
  display.innerText = str;
}

function calculate() {
  // 24.1.2004
  if (str == "24.1.2004") {
    clearDisplay();
    display.innerText = "💗✨ UI ✨💗";
    return;
  }
  // catch exception - SyntaxError
  try {
    eval(str);
  } catch (e) {
    if (e instanceof SyntaxError) {
      clearDisplay();
      display.innerText = "ERR";
      return;
    }
  }
  let ans = eval(str);

  str = " ";
  display.innerText = ans;
}
