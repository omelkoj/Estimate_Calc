const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

console.log(steps[0]);
console.log(steps);

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changesStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changesStep("previous");
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

/*INDEX 3*/
/*
const Form1 = document.getElementById("Form1");
const Form2 = document.getElementById("Form2");
const Form3 = document.getElementById("Form3");

const Next1 = document.getElementById("Next1");
const Next2 = document.getElementById("Next2");
const Back1 = document.getElementById("Back1");
const Back2 = document.getElementById("Back2");

const progress = document.getElementById("progress");

Next1.onclick = function () {
  Form1.style.left = "-450px";
  Form2.style.left = "40px";
  progress.style.width = "240px";
};

Back1.onclick = function () {
  Form1.style.left = "40px";
  Form2.style.left = "450px";
  progress.style.width = "120px";
};

Next2.onclick = function () {
  Form2.style.left = "-450px";
  Form3.style.left = "40px";
  progress.style.width = "360px";
};

Back2.onclick = function () {
  Form2.style.left = "40px";
  Form3.style.left = "450px";
  progress.style.width = "240px";
};

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
