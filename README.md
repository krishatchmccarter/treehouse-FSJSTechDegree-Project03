My Treehouse FSJS TechDegree Project 3 - Interactive Form, by Kris Hatch-McCarter.

Using JavaScript and CSS to enhance an interactive registration form for a fictional "FullStack Conf.".

Concepts in this project:
Form Elements
Using Selectors on Form Elements
DOM Manipulation
Creating Elements
Conditionals
Event Listeners
Regular Expressions
Styling Elements with CSS Pseduocode

This project takes supplied HMTL/CSS files for a basic form and uses JavaScript and CSS to add customized and conditional behavior and interactivity.

Validation is created with functions using Regular expressions to test requirements for each field. The validation is triggered with event listeners on the Name, email, activity, credit card, zip and cvv fields as well as in the submit handler. CSS and Javascript are used to provide helpful error messages and formatting (turn the border around the error fields red).

The form loads focusing on the first text field, Name. The validation for the name field triggers on change so an error is not triggered on load. If a value has been entered and deleted, or the form submitted without a value, the listener triggers on change to remove the error dynamically in real time.

The Email field validation is with a keyup event listener that looks for a null or invalid email address. The error message is conditional depending on if the field is null ("Email address cannot be blank") or formatted improperly ("Please enter a valid email address").

There is an event listener on the Job Role select element so that if the "other" choice is selected, an input field appears for the user to enter "Your Job Role".

In the T-Shirt Info section, the color theme is hidden by default and the design theme only shows Select Theme by default. There is en event listener on the Design select element so that when it is selected, the "Select Theme" option disappears and only the two available shirt designs are available. Depending on which shirt design is selected, the color menu appears with the available colors for that selection.

In the activities section there is a change event listener to run validation and calculate the total cost of the selected workshops/diasable activity selections with conflicting times. The validation requires at least one activity be selected.

The credit card, zip and cvv validation is run only if the payment select condition is Credit Card. The validations are in keyup event listeners so any error messages appear and disappear depending on input.

The individual validation function are added to the submit event listener for the form. If the Name, Email or Activity validation are in the submit handler to run always. The credit card, zip and cvv validation in the submit handler only runs if the payment selection is Credit Card.
