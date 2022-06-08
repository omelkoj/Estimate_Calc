//Prev, etc. figure out
//Clean up CSS/Styling
//Do info buttons
//Display innerHTML in various places
//Leave out email
//user input comma situation
//Round to the nearest number (estimate result)
//Change slider default to lowest number
//Increase slider range to 50 - change start to 0!
//create a range for final result

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
      userAmount += parseInt(document.getElementById("user_input").value);
      console.log(userAmount + "this is the user amount");

      /**/ //runningTotal += parseInt(document.getElementById("firstName").value);
      //console.log(runningTotal);
      console.log(parseInt(document.getElementById("user_input").value));
    } else if (button.id == "b_two_b") {
      /**/ addedAmount = pageTwoMath(
        rangesliderOne.value,
        rangesliderTwo.value,
        rangesliderThree.value
      );

      let runningTotalScreenThree = document.getElementById(
        "screen_three_running_total"
      );
      runningTotalScreenThree.innerHTML = runningTotal;

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
      runningTotalScreenFour.innerHTML = runningTotal;
    } else if (button.id == "b_four_b") {
      //MATH???
      totalSliderAmountTwo = pageFourMath(
        rangesliderFour.value,
        rangesliderFive.value,
        rangesliderSix.value
      );
      console.log(runningTotal, "this is the runningTotal NEWESTTT");
    } else if (button.id == "b_five_b") {
      var isChecked_Five = document.getElementById("switch_five").checked;
      console.log(isChecked_Five);

      var isChecked_Six = document.getElementById("switch_six").checked;
      console.log(isChecked_Six);

      var isChecked_Seven = document.getElementById("switch_seven").checked;
      console.log(isChecked_Seven);

      var isChecked_Eight = document.getElementById("switch_eight").checked;
      console.log(isChecked_Eight);

      if (isChecked_Five == false) {
        isChecked_Five = -10000;
      } else if (isChecked_Five == true) {
        isChecked_Five = 0;
      } else if (isChecked_Six == false) {
        isChecked_Six = -10000;
      } else if (isChecked_Six == true) {
        isChecked_Six = 0;
      } else if (isChecked_Seven == false) {
        isChecked_Seven = 0;
      } else if (isChecked_Seven == true) {
        isChecked_Seven = 0;
      } else if (isChecked_Eight == false) {
        isChecked_Eight = -8000;
      } else if (isChecked_Eight == true) {
        isChecked_Eight = 0;
      } else {
        console.log("DIS TOGGLE STATEMENT NO WORK");
      }

      totalToggleAmount = pageFiveMath(
        isChecked_Five,
        isChecked_Six,
        isChecked_Seven,
        isChecked_Eight
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

function pageFourMath(numberRoles, calcs, workflows) {
  let pageFourTotal = numberRoles * 0.04 + calcs * 0.06 + workflows * 0.12;

  runningTotal += pageFourTotal;

  return runningTotal;
}

function pageFiveMath(webApp, mobileApp, crossCompile, iosAndroid) {
  let pageFiveTotal =
    webApp + 10000 + mobileApp * 10000 + crossCompile + iosAndroid + 8000;

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

/*INDEX 2*/

/*const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = formSteps.findIndex((step) => {
  step.classList.contains("active");
});

console.log(currentStep);

if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
}

multiStepForm.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1;
  }
});

function showCurrentStep() {
  formSteps[currentStep].classList.add("active");
}*/
