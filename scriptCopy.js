//JS FOR WIZARD

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
let runningTotal = 0;
let addedAmount = 0;

console.log(steps[0]);
console.log(steps);

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "b_one") {
      console.log("it worked");
      /**/ runningTotal += parseInt(document.getElementById("firstName").value);
      console.log(runningTotal);
    } else if (button.id == "b_two_b") {
      /**/ addedAmount = pageTwoMath(
        2,
        3,
        5
      ); /*how do I know what to pass in?*/
      console.log(runningTotal);
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
/*FUNCTIONS FOR RUNNING TOTAL*/

function pageTwoMath(complexScreens, dataEntities, basicScreens) {
  let thisTotal =
    basicScreens * 100 + dataEntities * 100 + complexScreens * 100;

  runningTotal += thisTotal;
  return thisTotal;
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

//NEW SLIDER
const rangeslider = document.getElementById("sliderRange");
const output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function () {
  output.innerHTML = this.value;
};

console.log(rangeslider.value);

/*TOGGLES*/
function Buttontoggle() {
  var t = document.getElementById("123");
  t.classList.toggle("myClass");
}

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
