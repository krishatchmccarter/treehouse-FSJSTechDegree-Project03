//Variables
const userName = document.getElementById("name");
const jobTitle = document.getElementById("title");
const jobRoleInput = document.getElementById("other-title");
const shirtColorSet = document.querySelector("#color");
const shirtDesignSet = document.querySelector("#design");
const form = document.querySelector("form");
const email = document.getElementById("mail");
const activity = document.querySelector(".activities");
const activityInput = document.querySelectorAll(".activities label input");
const creditCard = document.getElementById("cc-num");
const zipField = document.getElementById("zip");
const cvvField = document.getElementById("cvv");

//Put the first field in the focus state
userName.focus();

//Add "Other" option to the Job Role section in HTML, set to hidden in JS.  Field will show if JS is disabled.
jobRoleInput.style.display = "none";

//Event listener displays hidden field when "Other" option is selected.
jobTitle.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    jobRoleInput.style.display = "block";
  } else {
    jobRoleInput.style.display = "none";
  }
});
//T-Shirt Info Section. The task is to filter the available Color options by the selected theme in the Design field.

//When the form is initially loaded, update the Color field so that it's clear the user needs to select a theme before selecting a color.

//Hide all color options
for (i = 0; i < shirtColorSet.length; i++) {
  shirtColorSet.options[i].hidden = true;
}

//Update the color field to read Please select a T-shirt theme.
let pleaseSelectOption = document.createElement("option");
pleaseSelectOption.textContent = "Please select a T-shirt theme";
pleaseSelectOption.value = "Please select a T-shirt theme";
pleaseSelectOption.selected = true;
shirtColorSet.insertBefore(pleaseSelectOption, shirtColorSet.firstChild);

//Hide the Color label and select element until a Theme is selected (exceeds task).  Turning these back on is in the Design theme select element event listener below.

shirtColorSet.style.display = "none";
shirtColorSet.previousElementSibling.style.display = "none";

//Use a change event listener on the Design menu select element to listen for changes.  Inside the event listener, use a conditional to determine what to hide, show and update.

//If js puns is selected, hide the three heart js option elements in the color drop down menu, show the three js puns option elements and update the color field to the first available color.

//If heart js is selected, hid the three js puns option elements in the color drop down menu, show the three heart js option elements and update the color field to the first available color.

shirtDesignSet.addEventListener("change", (e) => {
  if (e.target.value === "js puns") {
    for (i = 0; i < shirtColorSet.length; i++) {
      if (shirtColorSet[i].label.includes("JS Puns shirt only")) {
        shirtColorSet.style.display = "block";
        shirtColorSet.previousElementSibling.style.display = "block";
        shirtColorSet.options[i].hidden = false;
        shirtColorSet.options[1].selected = true;
        shirtDesignSet.options[0].hidden = true;
      } else {
        shirtColorSet.style.display = "block";
        shirtColorSet.options[i].hidden = true;
      }
    }
  } else {
    for (i = 0; i < shirtColorSet.length; i++) {
      if (shirtColorSet[i].label.includes("JS shirt only")) {
        shirtColorSet.style.display = "block";
        shirtColorSet.previousElementSibling.style.display = "block";
        shirtColorSet.options[i].hidden = false;
        shirtColorSet.options[4].selected = true;
        shirtDesignSet.options[0].hidden = true;
      } else {
        shirtColorSet.style.display = "block";
        shirtColorSet.options[i].hidden = true;
      }
    }
  }
});

// Create a DOM Element to display the total activity cost

let totalCost = 0;
let totalCostElement = document.createElement("label");
totalCostElement.innerHTML = `Total: $ ${totalCost}`;
activity.appendChild(totalCostElement);

// Add a change event listener to the activity section.
activity.addEventListener("change", (e) => {
  let click = e.target;
  const clickedCost = parseInt(e.target.getAttribute("data-cost"));
  const dayAndTime = e.target.getAttribute("data-day-and-time");
  //if the input element clicked is checked
  if (e.target.checked) {
    //if the clicked box is checked add the activity cost to the total cost and update the DOM Element Text
    totalCost += clickedCost;
    totalCostElement.innerHTML = `Total: $ ${totalCost}`;

    for (let i = 0; i < activityInput.length; i++) {
      if (
        dayAndTime === activityInput[i].getAttribute("data-day-and-time") &&
        click !== activityInput[i]
      ) {
        activityInput[i].disabled = true;
      }
    }
  } else {
    //otherwise (if it was unchecked) subtract from the total cost and update the DOM Element Text
    totalCost -= clickedCost;
    totalCostElement.innerHTML = `Total: $ ${totalCost}`;

    for (let i = 0; i < activityInput.length; i++) {
      if (
        dayAndTime === activityInput[i].getAttribute("data-day-and-time") &&
        click !== activityInput[i]
      ) {
        activityInput[i].disabled = false;
      }
    }
  }
});

//The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
const creditDiv = document.getElementById("credit-card");
const payPalDiv = document.getElementById("paypal");
const bitCoinDiv = document.getElementById("bitcoin");
const paymentSelect = document.querySelector("#payment");

payPalDiv.style.display = "none";
bitCoinDiv.style.display = "none";
paymentSelect.value = "credit card";

//When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.

//When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.

paymentSelect.addEventListener("change", (e) => {
  let paymentSelected = e.target.value;
  if (paymentSelected === "paypal") {
    payPalDiv.style.display = "block";
    bitCoinDiv.style.display = "none";
    creditDiv.style.display = "none";
  } else if (paymentSelected === "bitcoin") {
    payPalDiv.style.display = "none";
    bitCoinDiv.style.display = "block";
    creditDiv.style.display = "none";
  } else if (paymentSelected === "credit card") {
    payPalDiv.style.display = "none";
    bitCoinDiv.style.display = "none";
    creditDiv.style.display = "block";
  }
});

//Prevent user from being able to select the "Select Payment Method" option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.
paymentSelect[0].disabled = true;

//Form Validations using JS: Prevent user from submitting the form unless name, email, activities, CC pass validation (cc only if that payment option is selected).  Create helper functions to validate, call helper functions in eventlistener on form submit.

const userNameValidator = () => {
  const userNameValue = userName.value;
  if (userNameValue.length > 0) {
    userName.classList.remove("error-input");
    userName.previousElementSibling.classList.remove("nameerror-text");

    return true;
  } else {
    userName.classList.add("error-input");
    userName.previousElementSibling.classList.add("nameerror-text");
    userName.focus();
    return false;
  }
};

//validate email input
//uses conditional error message for blank email vs invalid regex (for exceeds)
const emailValidator = () => {
  const emailValue = email.value;
  //Email regex from https://emailregex.com/
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = regExEmail.test(emailValue);
  if (isValidEmail) {
    email.classList.remove("error-input");
    email.previousElementSibling.classList.remove("emailerror-text");
    email.previousElementSibling.classList.remove("emailblankerror-text");
    return true;
  } else {
    if (emailValue.length == 0) {
      email.classList.add("error-input");
      email.previousElementSibling.classList.add("emailblankerror-text");
      email.previousElementSibling.classList.remove("emailerror-text");
      return false;
    } else {
      email.classList.add("error-input");
      email.previousElementSibling.classList.add("emailerror-text");
      email.previousElementSibling.classList.remove("emailblankerror-text");
      return false;
    }
  }
};

//ensure at least one activity checked. using cost as criteria since that already runs based on checkbox input
const activityValidator = () => {
  if (totalCost !== 0) {
    activity.classList.remove("error-input");
    activity.classList.remove("activityerror-text");
    return true;
  } else {
    activity.classList.add("error-input");
    activity.classList.add("activityerror-text");
    return false;
  }
};

//CC Validation. Needs to run only if CC selected.  Above already have listener on Select element that shows credit div if Credit Card is selected. Use keyup event listener on credit div to trigger credit, zip and cvv validation.

const ccValidator = () => {
  const CreditCardNumber = document.getElementById("cc-num").value;
  const regExCreditCard = /^[0-9]{13,16}$/;
  const isValidCreditCard = regExCreditCard.test(CreditCardNumber);

  if (isValidCreditCard) {
    creditCard.classList.remove("error-input");
    creditCard.previousElementSibling.classList.remove("ccerror-text");
    return true;
  } else {
    creditCard.classList.add("error-input");
    creditCard.previousElementSibling.classList.add("ccerror-text");
    return false;
  }
};

const zipValidator = () => {
  const zipValue = document.getElementById("zip").value;
  const regExZip = /^[0-9]{5}$/;
  const isValidZip = regExZip.test(zipValue);

  if (isValidZip) {
    zipField.classList.remove("error-input");
    zipField.previousElementSibling.classList.remove("ziperror-text");
    return true;
  } else {
    zipField.classList.add("error-input");
    zipField.previousElementSibling.classList.add("ziperror-text");
    return false;
  }
};

const cvvValidator = () => {
  const cvvValue = document.getElementById("cvv").value;
  const regExCvv = /^[0-9]{3}$/;
  const isValidCvv = regExCvv.test(cvvValue);

  if (isValidCvv) {
    cvvField.classList.remove("error-input");
    cvvField.previousElementSibling.classList.remove("cvverror-text");
    return true;
  } else {
    cvvField.classList.add("error-input");
    cvvField.previousElementSibling.classList.add("cvverror-text");
    return false;
  }
};
//Real time error message on email input (for exceeds)
email.addEventListener("keyup", (e) => {
  emailValidator();
});

form.addEventListener("submit", (e) => {
  userNameValidator;
  emailValidator;
  activityValidator;

  if (!userNameValidator()) {
    e.preventDefault();
    console.log("The userNameValidator failed KristiLou");
  }

  if (!emailValidator()) {
    e.preventDefault();
    console.log("The emailvalidation failed KristiLou");
    email.focus();
  }

  if (!activityValidator()) {
    e.preventDefault();
    console.log("The activityvalidation failed KristiLou");
    activityInput[0].focus();
  }

  if (paymentSelect[1].selected) {
    ccValidator;
    zipValidator;
    cvvValidator;
    if (!ccValidator()) {
      e.preventDefault();
      console.log("The ccvalidation failed KristiLou");
      creditCard.focus();
    }
    if (!zipValidator()) {
      e.preventDefault();
      console.log("The zipvalidation failed KristiLou");
      zipField.focus();
    }
    if (!cvvValidator()) {
      e.preventDefault();
      console.log("The cvvvalidation failed KristiLou");
    }
  }
});
