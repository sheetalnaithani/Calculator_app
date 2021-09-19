let inputScreen = document.getElementById("inputScreen");
buttons = document.querySelectorAll("button");
let inputScreenValue = "";

for (item of buttons) {
  item.addEventListener("click", function (event) {
    buttonText = event.target.innerText;
    // console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      //   console.log(buttonText);
      inputScreenValue = inputScreenValue + buttonText;
      inputScreen.value = inputScreenValue;
      8 + 9;
    } else if (buttonText == "C") {
      inputScreenValue = "";
      inputScreen.value = inputScreenValue;
    } else if (buttonText == "=") {
      inputScreen.value = eval(inputScreenValue);
    } else {
      inputScreenValue = inputScreenValue + buttonText;
      inputScreen.value = inputScreenValue;
    }
  });
}

let theme = document.getElementById("swap");

theme.addEventListener("click", () => {
  let dayTheme = document.getElementById("calcBody");
  dayTheme.classList.toggle("calc-day");
  inputScreen.classList.toggle("input-day");
});
