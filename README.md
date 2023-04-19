
# React Component with Cypress Tests
This is a simple React component called TestComponent with some basic UI elements and functionality, including a form, a modal, a hidden div, and a new toggle button. It also includes Cypress tests for the component.

## Installation
To run this project locally, you'll need to have Node.js and npm installed on your system. Then, follow these steps:

Clone the repository: git clone https://github.com/ozgur-okt/react-cypress

Change into the project directory:

`cd react-cypress`

Install dependencies: 

`npm install`

Usage:

To run the app and the tests, use the following command:

`npm run start`

This will start the app at http://localhost:3000 and open Cypress, where you can run the tests.

## Component Details

### The TestComponent includes the following UI elements and functionality:

* A h1 element with the ID "logo" that displays the app name.
* A p element with the ID "greeting" that displays a welcome message.
* A button element that displays an alert when clicked.
* A form element with two input fields (a text input and an email input) and a submit button.
* A p element with the ID "success" that is hidden by default, but displays a success message when the form is submitted.
* An a element with the ID "about-link" that links to the About page.
* A div element with the ID "modal" that is hidden by default, but displays a modal with a "Close" button when the "Open Modal" button is clicked.
* A button element with the ID "open-modal" that displays the modal when clicked.
* A div element with the ID "red-box" that displays a red box with dimensions of 100px by 100px.
* A ul element with three li elements.
* A div element with the ID "hidden-element" that is hidden by default, but displays a message when the "Show hidden element" button is clicked.
* A button element with the ID "show-button" that shows the hidden element when clicked.


## Cypress Tests
### The TestComponent includes the following Cypress tests:

* should display logo and greeting: verifies that the "logo" and "greeting" elements are displayed on the page.

* should display alert when button is clicked: verifies that an alert is displayed when the button is clicked.

* should display success message when form is submitted: fills out and submits the form, and verifies that the success message is displayed.

* should navigate to About page: verifies that clicking on the "About" link navigates to the About page.

* should display modal when open modal button is clicked: verifies that clicking on the "Open Modal" button displays the modal.

* should close modal when close button is clicked: opens the modal and verifies that clicking on the "Close" button closes the modal.

* should show hidden element when show button is clicked: verifies that clicking on the "Show hidden element" button displays the hidden element.

