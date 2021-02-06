//Variables
const name2 = document.getElementById("name");
const nameRequired = name2.required;
const jobTitle = document.getElementById("title");
const jobRoleInput = document.getElementById("other-title");
const shirtColorSet = document.querySelector("#color");
const shirtDesignSet = document.querySelector("#design");

//Put the first field in the focus state
name2.focus();

//Add "Other" option to the Job Role section.
//Set input field to initially hidden but will display if JavaScript is disabled.
jobRoleInput.style.display = "none";

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

//Use a change event listener on the Design menu select element to listen for changes.  Inside the event listener, use a conditional to determine what to hide, show and update.

//If js puns is selected, hide the three heart js option elements in the color drop down menu, show the three js puns option elements and update the color field to the first available color.

//If heart js is selected, hid the three js puns option elements in the color drop down menu, show the three heart js option elements and update the color field to the first available color.

shirtDesignSet.addEventListener("change", (e) => {
  if (e.target.value === "js puns") {
    for (i = 0; i < shirtColorSet.length; i++) {
      if (shirtColorSet[i].label.includes("JS Puns shirt only")) {
        shirtColorSet.options[i].hidden = false;
        shirtColorSet.options[1].selected = true;
      } else {
        shirtColorSet.options[i].hidden = true;
      }
    }
  } else {
    for (i = 0; i < shirtColorSet.length; i++) {
      if (shirtColorSet[i].label.includes("JS shirt only")) {
        shirtColorSet.options[i].hidden = false;
        shirtColorSet.options[4].selected = true;
      } else {
        shirtColorSet.options[i].hidden = true;
      }
    }
  }
});

// Create a DOM Element to display the total activity cost
const activity = document.querySelector(".activities");
let totalCost = 0;
let totalCostElement = document.createElement("label");
totalCostElement.innerHTML = `Total: $ ${totalCost}`;
activity.appendChild(totalCostElement);
const activityInput = document.querySelectorAll(".activities label input");

//console.log(totalCost);
//console.log(totalCostElement);

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

//NOTE: The user should not be able to select the "Select Payment Method" option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.
paymentSelect[0].disabled = true;

//Form validation messages Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or even better for the user would be if a red text message appeared near the field.

//The following fields should have some obvious form of an error indication: Name field, Email field, Register for Activities checkboxes (at least one must be selected), Credit Card number (Only if Credit Card payment method is selected), Zip Code (Only if Credit Card payment method is selected), CVV (Only if Credit Card payment method is selected)

//Note: Error messages or indications should not be visible by default. They should only show upon submission, or after some user interaction.

//Note: Avoid use alerts for your validation messages.

//Note: If a user tries to submit an empty form, there should be an error indication or message displayed for the name field, the email field, the activity section, and the credit card fields if credit card is the selected payment method.

// Create isvalid functions that return true if pass regex. Placing inside keyup listener that allows real-time validation.

// name (can't be blank)
//email address
//Create event listener on email field
document.getElementById("mail").addEventListener("keyup", (e) => {
  const email = document.getElementById("mail").value;
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Email regex from https://emailregex.com/
  const isValidEmail = regExEmail.test(email);
  console.log(isValidEmail);
  if (!isValidEmail) {
    e.preventDefault();
    //create error message element (red + tooltip)
    return false;
  } else {
    //remove error message element
    return true;
  }
});

// activities (at least one box checked)
// Credit Card Num (13-16 digits) only validated if the payment method is "credit card"
document.getElementById("cc-num").addEventListener("keyup", (e) => {
  const CreditCard = document.getElementById("cc-num").value;
  const regExCreditCard = /^[0-9]{13,16}$/;
  const isValidCreditCard = regExCreditCard.test(CreditCard);
  console.log(CreditCard);
  console.log(isValidCreditCard);
  if (!isValidCreditCard) {
    e.preventDefault();
    //create error message element
    return false;
  } else {
    //remove error message element
    return true;
  }
});

// Zip (5 digits)
// CCV (3 digits).

//For each validator function each will
//use a conditional to check if the input value meets the requirements for that input
//if the criteria are not met, add an error indicator and return false (turn the input border red and append the dom near the input to give a message to show when the field is invalid and hide when the field is valid)

//if the criteria are met, remove any error indicators and return false

// In your form listener, check for if all the validator functions are true, and if so submit the form, if not prevent default behavior
