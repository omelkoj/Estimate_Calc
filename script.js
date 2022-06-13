//AUTO INPUT COMMAS INTO USER-ENTERED ESTIMATE AMOUNT
var el = document.querySelector("input.user_input_amount");
el.addEventListener("keyup", function (event) {
  if (event.which >= 37 && event.which <= 40) return;

  this.value = this.value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

//SLIDERS

//SLIDER 1
const rangesliderOne = document.getElementById("sliderRangeOne");
const outputOne = document.getElementById("demoOne");
outputOne.innerHTML = rangesliderOne.value;

rangesliderOne.oninput = function () {
  outputOne.innerHTML = this.value;
};

console.log(rangesliderOne.value);

//SLIDER 2
const rangesliderTwo = document.getElementById("sliderRangeTwo");
const outputTwo = document.getElementById("demoTwo");
outputTwo.innerHTML = rangesliderTwo.value;

rangesliderTwo.oninput = function () {
  outputTwo.innerHTML = this.value;
};

console.log(rangesliderTwo.value);

//SLIDER 3
const rangesliderThree = document.getElementById("sliderRangeThree");
const outputThree = document.getElementById("demoThree");
outputThree.innerHTML = rangesliderThree.value;

rangesliderThree.oninput = function () {
  outputThree.innerHTML = this.value;
};

console.log(rangesliderThree.value);

//SLIDER 4
const rangesliderFour = document.getElementById("sliderRangeFour");
const outputFour = document.getElementById("demoFour");
outputFour.innerHTML = rangesliderFour.value;

rangesliderFour.oninput = function () {
  outputFour.innerHTML = this.value;
};

console.log(rangesliderFour.value);

//SLIDER 5
const rangesliderFive = document.getElementById("sliderRangeFive");
const outputFive = document.getElementById("demoFive");
outputFive.innerHTML = rangesliderFive.value;

rangesliderFive.oninput = function () {
  outputFive.innerHTML = this.value;
};

console.log(rangesliderFive.value);

//SLIDER 6
const rangesliderSix = document.getElementById("sliderRangeSix");
const outputSix = document.getElementById("demoSix");
outputSix.innerHTML = rangesliderSix.value;

rangesliderSix.oninput = function () {
  outputSix.innerHTML = this.value;
};

console.log(rangesliderSix.value);

//WIZARD FUNCTIONALITY/FUNCTIONS FOR CALCULATIONS
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

let userAmount = 0;
let runningTotal = 0;
let addedAmount = 0;
let totalToggleAmount = 0;
let totalSliderAmountTwo = 0;
let totalToggleAmountTwo = 0;

let subtractAmount = 0;
let subtractToggleAmount = 0;
let subtractSliderAmountTwo = 0;
let subtractToggleAmountTwo = 0;

let pageTwoTotal = 0;
let pageThreeTotal = 0;
let pageFourTotal = 0;
let pageFiveTotal = 0;

console.log(steps[0]);
console.log(steps);

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "b_one") {
      console.log("it worked");

      userAmount = document.getElementById("user_input").value;
      console.log(userAmount + "this is the user amount");
    } else if (button.id == "b_two_b") {
      addedAmount = pageTwoMath(
        rangesliderOne.value,
        rangesliderTwo.value,
        rangesliderThree.value
      );

      let runningTotalScreenThree = document.getElementById(
        "screen_three_running_total"
      );
      runningTotalScreenThree.innerHTML = runningTotal.toLocaleString("en-US");

      console.log(runningTotal, "this is the runningTotal NEW");
    } else if (button.id == "b_three_b") {
      let isChecked_One = document.getElementById("switch_one");
      console.log(isChecked_One.checked);

      let isChecked_Two = document.getElementById("switch_two");
      console.log(isChecked_Two.checked);

      let isChecked_Three = document.getElementById("switch_three");
      console.log(isChecked_Three.checked);

      let isChecked_Four = document.getElementById("switch_four");
      console.log(isChecked_Four.checked);

      let isChecked_One_Amount = 0;
      let isChecked_Two_Amount = 0;
      let isChecked_Three_Amount = 0;
      let isChecked_Four_Amount = 0;

      if (isChecked_One.checked == false) {
        isChecked_One_Amount = 0;
      } else {
        isChecked_One_Amount = runningTotal;
      }

      if (isChecked_Two.checked == false) {
        isChecked_Two_Amount = -10000;
      } else {
        isChecked_Two_Amount = runningTotal;
      }

      if (isChecked_Three.checked == false) {
        isChecked_Three_Amount = -3000;
      } else {
        isChecked_Three_Amount = runningTotal;
      }

      if (isChecked_Four.checked == false) {
        isChecked_Four_Amount = 0;
      } else {
        isChecked_Four_Amount = runningTotal;
      }

      console.log(
        isChecked_One_Amount,
        isChecked_Two_Amount,
        isChecked_Three_Amount,
        isChecked_Four_Amount
      );

      totalToggleAmount = pageThreeMath(
        isChecked_One_Amount,
        isChecked_Two_Amount,
        isChecked_Three_Amount,
        isChecked_Four_Amount
      );

      console.log(runningTotal, "this is the runningTotal NEWWWWW");
      let runningTotalScreenFour = document.getElementById(
        "screen_four_running_total"
      );
      runningTotalScreenFour.innerHTML = runningTotal.toLocaleString("en-US");
    } else if (button.id == "b_four_b") {
      totalSliderAmountTwo = pageFourMath(
        rangesliderFour.value,
        rangesliderFive.value,
        rangesliderSix.value
      );

      console.log(runningTotal, "this is the runningTotal NEWESTTT");

      let runningTotalScreenFive = document.getElementById(
        "screen_five_running_total"
      );
      runningTotalScreenFive.innerHTML = runningTotal.toLocaleString("en-US");
    } else if (button.id == "b_five_b") {
      var isChecked_Five = document.getElementById("switch_five");
      console.log(isChecked_Five);

      var isChecked_Six = document.getElementById("switch_six");
      console.log(isChecked_Six);

      var isChecked_Seven = document.getElementById("switch_seven");
      console.log(isChecked_Seven);

      var isChecked_Eight = document.getElementById("switch_eight");
      console.log(isChecked_Eight);

      let isChecked_Five_Amount = 0;
      let isChecked_Six_Amount = 0;
      let isChecked_Seven_Amount = 0;
      let isChecked_Eight_Amount = 0;

      if (isChecked_Five.checked == false) {
        isChecked_Five_Amount = -10000;
      } else {
        isChecked_Five_Amount = runningTotal;
      }

      if (isChecked_Six.checked == false) {
        isChecked_Six_Amount = -10000;
      } else {
        isChecked_Six_Amount = runningTotal;
      }

      if (isChecked_Seven.checked == false) {
        isChecked_Seven_Amount = 0;
      } else {
        isChecked_Seven_Amount = runningTotal;
      }

      if (isChecked_Eight.checked == false) {
        isChecked_Eight_Amount = 0;
      } else {
        isChecked_Eight_Amount = runningTotal;
      }

      totalToggleAmountTwo = pageFiveMath(
        isChecked_Five_Amount,
        isChecked_Six_Amount,
        isChecked_Seven_Amount,
        isChecked_Eight_Amount
      );

      console.log(runningTotal, "this is the runningTotal NEWWWWW");
      let finalYourEstimate = document.getElementById("your_estimate_styling");
      finalYourEstimate.innerHTML = userAmount;

      let finalOurEstimate = document.getElementById("our_estimate_styling");
      let finalOurEstimate_rounded = roundNearest100(runningTotal);
      let finalOurEstimate_tostring =
        finalOurEstimate_rounded.toLocaleString("en-US");
      finalOurEstimate.innerHTML = finalOurEstimate_tostring;
    } else {
      console.log("no button id found");
    }

    changesStep("next");
  });
});

//"PREVIOUS" BUTTONS/SUBTRACT VALUES SO AS NOT TO REPEAT FUNCTION ON "NEXT" BUTTON
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "b_three_a") {
      subtractAmount = pageTwoMathSubtract(addedAmount);
    } else if (button.id == "b_four_a") {
      subtractToggleAmount = pageThreeMathSubtract(pageThreeTotal);
    } else if (button.id == "b_five_a") {
      subtractSliderAmountTwo = pageFourMathSubtract(pageFourTotal);
    } else if (button.id == "b_six_a") {
      subtractToggleAmountTwo = pageFiveMathSubtract(pageFiveTotal);
    }
    changesStep("previous");
  });
});

//FORM FUNCTIONALITY
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
  let index = 0;
  const active = document.querySelector("form .step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  steps[0].classList.add("active");
});

function changesStep(btn) {
  let index = 0;
  const active = document.querySelector("form .step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "previous") {
    index--;
  }
  steps[index].classList.add("active");
}

/*FUNCTIONS FOR KEEPING TRACK OF RUNNING TOTAL*/
function pageTwoMath(basicScreens, dataEntities, complexScreens) {
  pageTwoTotal =
    basicScreens * 800 + dataEntities * 1000 + complexScreens * 5000;

  runningTotal = Math.round(10 * runningTotal) / 10;
  runningTotal += pageTwoTotal;
  console.log("ROUNDED" + runningTotal);
  return roundNearest10(runningTotal);
}

function pageThreeMath(hipaa, pci, gdpr, ada) {
  pageThreeTotal = hipaa * 0.08 + (pci + 10000) + (gdpr + 3000) + ada * 0.08;

  runningTotal = Math.round(10 * runningTotal) / 10;
  runningTotal += pageThreeTotal;
  console.log("ROUNDED" + runningTotal);
  return roundNearest10(runningTotal);
}

function pageFourMath(roles, calcs, workflows) {
  pageFourTotal =
    runningTotal * 0.04 * roles +
    runningTotal * 0.06 * calcs +
    runningTotal * 0.12 * workflows;

  runningTotal = Math.round(10 * runningTotal) / 10;
  runningTotal += pageFourTotal;
  console.log("ROUNDED" + runningTotal);
  return roundNearest10(runningTotal);
}

function pageFiveMath(webApp, mobileApp, ios, android) {
  pageFiveTotal =
    webApp + 10000 + mobileApp + 10000 + ios * 0.08 + android * 0.08;

  runningTotal = Math.round(10 * runningTotal) / 10;
  runningTotal += pageFiveTotal;
  console.log("ROUNDED" + runningTotal);
  return roundNearest10(runningTotal);
}

/*"PREVIOUS" SCREEN SUBTRACTION FUNCTIONS*/
function pageTwoMathSubtract(amountOne) {
  let pageTwoTotalSubtract = amountOne;

  runningTotal -= pageTwoTotalSubtract;
  return runningTotal;
}

function pageThreeMathSubtract(amountTwo) {
  let pageThreeTotalSubtract = amountTwo;

  runningTotal -= pageThreeTotalSubtract;
  return runningTotal;
}

function pageFourMathSubtract(amountThree) {
  let pageFourTotalSubtract = amountThree;

  runningTotal -= pageFourTotalSubtract;
  return runningTotal;
}

function pageFiveMathSubtract(amountFour) {
  let pageFiveTotalSubtract = amountFour;

  runningTotal -= pageFiveTotalSubtract;
  return runningTotal;
}

/*TOGGLES*/
function ButtontoggleOne() {
  var t = document.getElementById("switch_one");
  t.classList.toggle("checkbox");
}

function ButtontoggleTwo() {
  var t = document.getElementById("switch_two");
  t.classList.toggle("checkbox");
}

function ButtontoggleThree() {
  var t = document.getElementById("switch_three");
  t.classList.toggle("checkbox");
}

function ButtontoggleFour() {
  var t = document.getElementById("switch_four");
  t.classList.toggle("checkbox");
}

/*ROUNDING FUNCTIONS*/
function roundNearest100(num) {
  return Math.ceil(num / 100) * 100;
}

function roundNearest10(numTwo) {
  return Math.ceil(numTwo / 10) * 10;
}

/*SHOW/HIDE OVERLAY TEXT FUNCTIONS*/
/*SCREEN TWO OVERLAY FUNCTIONS*/
const infoOne = document.getElementById("info_one");
const overlayTextOne = document.getElementById("text_overlay_text_one");

const infoTwo = document.getElementById("info_two");
const overlayTextTwo = document.getElementById("text_overlay_text_two");

const infoThree = document.getElementById("info_three");
const overlayTextThree = document.getElementById("text_overlay_text_three");

infoOne.addEventListener("mouseover", function handleMouseOver() {
  overlayTextOne.style.display = "block";
});

infoOne.addEventListener("mouseout", function handleMouseOut() {
  overlayTextOne.style.display = "none";
});

infoTwo.addEventListener("mouseover", function handleMouseOver() {
  overlayTextTwo.style.display = "block";
});

infoTwo.addEventListener("mouseout", function handleMouseOut() {
  overlayTextTwo.style.display = "none";
});

infoThree.addEventListener("mouseover", function handleMouseOver() {
  overlayTextThree.style.display = "block";
});

infoThree.addEventListener("mouseout", function handleMouseOut() {
  overlayTextThree.style.display = "none";
});

/*SCREEN THREE OVERLAY FUNCTIONS*/
const infoFour = document.getElementById("info_four");
const overlayTextFour = document.getElementById("text_overlay_text_four");

const infoFive = document.getElementById("info_five");
const overlayTextFive = document.getElementById("text_overlay_text_five");

const infoSix = document.getElementById("info_six");
const overlayTextSix = document.getElementById("text_overlay_text_six");

const infoSeven = document.getElementById("info_seven");
const overlayTextSeven = document.getElementById("text_overlay_text_seven");

infoFour.addEventListener("mouseover", function handleMouseOver() {
  overlayTextFour.style.display = "block";
});

infoFour.addEventListener("mouseout", function handleMouseOut() {
  overlayTextFour.style.display = "none";
});

infoFive.addEventListener("mouseover", function handleMouseOver() {
  overlayTextFive.style.display = "block";
});

infoFive.addEventListener("mouseout", function handleMouseOut() {
  overlayTextFive.style.display = "none";
});

infoSix.addEventListener("mouseover", function handleMouseOver() {
  overlayTextSix.style.display = "block";
});

infoSix.addEventListener("mouseout", function handleMouseOut() {
  overlayTextSix.style.display = "none";
});

infoSeven.addEventListener("mouseover", function handleMouseOver() {
  overlayTextSeven.style.display = "block";
});

infoSeven.addEventListener("mouseout", function handleMouseOut() {
  overlayTextSeven.style.display = "none";
});

/*SCREEN FOUR OVERLAY FUNCTIONS*/
const infoEight = document.getElementById("info_eight");
const overlayTextEight = document.getElementById("text_overlay_text_eight");

const infoNine = document.getElementById("info_nine");
const overlayTextNine = document.getElementById("text_overlay_text_nine");

const infoTen = document.getElementById("info_ten");
const overlayTextTen = document.getElementById("text_overlay_text_ten");

infoEight.addEventListener("mouseover", function handleMouseOver() {
  overlayTextEight.style.display = "block";
});

infoEight.addEventListener("mouseout", function handleMouseOut() {
  overlayTextEight.style.display = "none";
});

infoNine.addEventListener("mouseover", function handleMouseOver() {
  overlayTextNine.style.display = "block";
});

infoNine.addEventListener("mouseout", function handleMouseOut() {
  overlayTextNine.style.display = "none";
});

infoTen.addEventListener("mouseover", function handleMouseOver() {
  overlayTextTen.style.display = "block";
});

infoTen.addEventListener("mouseout", function handleMouseOut() {
  overlayTextTen.style.display = "none";
});

/*SCREEN FIVE OVERLAY FUNCTIONS*/
const infoEleven = document.getElementById("info_eleven");
const overlayTextEleven = document.getElementById("text_overlay_text_eleven");

const infoTwelve = document.getElementById("info_twelve");
const overlayTextTwelve = document.getElementById("text_overlay_text_twelve");

const infoThirteen = document.getElementById("info_thirteen");
const overlayTextThirteen = document.getElementById(
  "text_overlay_text_thirteen"
);

const infoFourteen = document.getElementById("info_fourteen");
const overlayTextFourteen = document.getElementById(
  "text_overlay_text_fourteen"
);

infoEleven.addEventListener("mouseover", function handleMouseOver() {
  overlayTextEleven.style.display = "block";
});

infoEleven.addEventListener("mouseout", function handleMouseOut() {
  overlayTextEleven.style.display = "none";
});

infoTwelve.addEventListener("mouseover", function handleMouseOver() {
  overlayTextTwelve.style.display = "block";
});

infoTwelve.addEventListener("mouseout", function handleMouseOut() {
  overlayTextTwelve.style.display = "none";
});

infoThirteen.addEventListener("mouseover", function handleMouseOver() {
  overlayTextThirteen.style.display = "block";
});

infoThirteen.addEventListener("mouseout", function handleMouseOut() {
  overlayTextThirteen.style.display = "none";
});

infoFourteen.addEventListener("mouseover", function handleMouseOver() {
  overlayTextFourteen.style.display = "block";
});

infoFourteen.addEventListener("mouseout", function handleMouseOut() {
  overlayTextFourteen.style.display = "none";
});
