# Preparation for Checkpoint

The repo has everything needed to use MUI if you want to but it's not a must.
Just make sure that the website looks good :smile:

## Task 1 - `Cars.jsx`

1. When clicking on a car, I want the text to turn green.
   Just like we did in the assessment.
1. I want to be able to add a new car to the list with the help of the input and button available.
1. Make sure that new cars added are also turned green when clicking on them.

> Hint: Maybe create a new component called Car for each individual car that can hold a state.

## Task 2 - `Swanson.jsx`

1. Get quotes from Ron Swanson using this API: `http://ron-swanson-quotes.herokuapp.com/v2/quotes` and show that quote on the website.
1. Add a button that gives us a new quote when clicking on it.

## Task 3 - `Competition.jsx`

1. Using `https://kontests.net/api/v1/all`, display the ongoing/upcoming competitions in a nice way.
1. Add an input field that filters the displayed competitions depending on the name of the competitions.

## Task 4 - `Fridge.jsx`

1. Display the items we have in our fridge.
1. Add a form with two `<input/>` and a `button`.
   One for the item and one for the amount.
   This form will describe what we want to take from the fridge.
   When submitting, update the state accordingly.
   If we don't have that item or enough `count` of that item, display it for the user in a nice way.
