//Prev, etc. figure out
//Clean up CSS/Styling
//General Code Cleanup
//Do info buttons
//Round to the nearest number/hundred (estimate result)
//round running total updates
//maybe make font size smaller?
//double check all math

//AUTO INPUT COMMAS INTO USER-ENTERED ESTIMATE AMOUNT
var el = document.querySelector("input.user_input_amount");
el.addEventListener("keyup", function (event) {
  if (event.which >= 37 && event.which <= 40) return;

  this.value = this.value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

//SLIDERS, INSTANCE 1
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

//JS FOR WIZARD

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
let userAmount = 0;
let runningTotal = 0;
let addedAmount = 0;

console.log(steps[0]);
console.log(steps);

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "b_one") {
      console.log("it worked");
      //This is where the user amount is stored
      //parseInt(str.replace(/,/g, ""), 10);

      //userAmount += parseInt(document.getElementById("user_input").value);
      userAmount = document.getElementById("user_input").value;
      console.log(userAmount + "this is the user amount");

      /**/ //runningTotal += parseInt(document.getElementById("firstName").value);
      //console.log(runningTotal);
      //console.log(parseInt(document.getElementById("user_input").value));
    } else if (button.id == "b_two_b") {
      /**/ addedAmount = pageTwoMath(
        rangesliderOne.value,
        rangesliderTwo.value,
        rangesliderThree.value
      );

      let runningTotalScreenThree = document.getElementById(
        "screen_three_running_total"
      );
      runningTotalScreenThree.innerHTML = runningTotal.toLocaleString("en-US");

      console.log(rangesliderOne.value);
      console.log(rangesliderTwo.value);
      console.log(rangesliderThree.value);
      console.log(runningTotal);
      console.log(addedAmount);
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
      //MATH???
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

      totalToggleAmount = pageFiveMath(
        isChecked_Five_Amount,
        isChecked_Six_Amount,
        isChecked_Seven_Amount,
        isChecked_Eight_Amount
      );
      console.log(runningTotal, "this is the runningTotal NEWWWWW");
      let finalYourEstimate = document.getElementById("your_estimate_styling");
      finalYourEstimate.innerHTML = userAmount;

      let finalOurEstimate = document.getElementById("our_estimate_styling");
      finalOurEstimate_rounded = Math.round(runningTotal);
      finalOurEstimate_tostring =
        finalOurEstimate_rounded.toLocaleString("en-US");
      finalOurEstimate.innerHTML = finalOurEstimate_tostring;
    } else {
      console.log("no button id found");
    }

    changesStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changesStep("previous");

    /*if true then remove addedAmount*/
  });
});

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

/*Create a function for each math problem*/
/* WILL NEED TO CREATE A FUNCTION FOR PERCENTAGE, VS. JUST ADDING FOR THE TOGGLES */
/*FUNCTIONS FOR RUNNING TOTAL*/

function pageTwoMath(basicScreens, dataEntities, complexScreens) {
  let pageTwoTotal =
    basicScreens * 800 + dataEntities * 1000 + complexScreens * 5000;

  runningTotal += pageTwoTotal;
  return runningTotal;
}

function pageThreeMath(hipaa, pci, gdpr, ada) {
  let pageThreeTotal =
    hipaa * 0.08 + (pci + 10000) + (gdpr + 3000) + ada * 0.08;

  runningTotal += pageThreeTotal;

  return runningTotal;
}

/*FIX THIS MATH!!!*/
function pageFourMath(roles, calcs, workflows) {
  let pageFourTotal =
    runningTotal * 0.04 * roles +
    runningTotal * 0.06 * calcs +
    runningTotal * 0.12 * workflows;

  runningTotal += pageFourTotal;

  return runningTotal;
}

function pageFiveMath(webApp, mobileApp, ios, android) {
  let pageFiveTotal =
    webApp + 10000 + mobileApp + 10000 + ios * 0.08 + android * 0.08;

  runningTotal += pageFiveTotal;

  return runningTotal;
}

/*SLIDER*/
/*
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

console.log(slider.value);
*/

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

//TO CHECK IF IT'S ON OR OFF, where input id is switchValue
var isChecked = document.getElementById("switch_one").checked;
console.log(isChecked);

var isChecked = document.getElementById("switch_two").checked;
console.log(isChecked);

var isChecked = document.getElementById("switch_three").checked;
console.log(isChecked);

var isChecked = document.getElementById("switch_four").checked;
console.log(isChecked);

/*SHOW/HIDE OVERLAY TEXT*/

const infoOne = document.getElementById("info_one");

const overlayText = document.getElementById("text_overlay_text_one");

infoOne.addEventListener("mouseenter", function handleMouseOut() {
  // 👇️ if you used visibility property to hide div
  overlayText.style.visibility = "hidden";
});

// ✅ Show hidden DIV on hover
infoOne.addEventListener("mouseover", function handleMouseOver() {
  overlayText.style.display = "block";

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'visible';
});
