// Get elements
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const specificQuestion = document.getElementById('specificQuestion');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const extraInputs = document.getElementById('extraInputs');
const submitSpecificButton = document.getElementById('submitSpecificButton');
const importanceQuestion = document.getElementById('importanceQuestion');
const importanceList = document.getElementById('importanceList');
const canYouDoItQuestion = document.getElementById('canYouDoItQuestion');
const yesDoItButton = document.getElementById('yesDoItButton');
const noDoItButton = document.getElementById('noDoItButton');
const finalMessage = document.getElementById('finalMessage');
const beKindMessage = document.getElementById('beKindMessage');
const aphorismText = document.getElementById('aphorism');
const toDoList = document.getElementById('toDoList');

// Store the items and allow them to be updated
let specificItems = [];

// Aphorisms array
const aphorisms = [
    // Add your 30 aphorisms here (same as before)
];

// When user clicks submit for the first time
submitButton.addEventListener('click', function() {
    if (userInput.value.trim() === "") {
        alert("Please enter something!");
        return;
    }
    specificQuestion.classList.remove('hidden');  // Show specificity question
});

// If user clicks YES (to provide more specific input)
yesButton.addEventListener('click', function() {
    specificQuestion.classList.add('hidden');
    extraInputs.classList.remove('hidden');  // Show extra input fields
});

// If user clicks NO (to skip specifics)
noButton.addEventListener('click', showDoItQuestion);

// When user clicks submit after entering more specific input
submitSpecificButton.addEventListener('click', function() {
    // Get the values from the specific inputs
    specificItems = [
        document.getElementById('item1').value,
        document.getElementById('item2').value,
        document.getElementById('item3').value,
        document.getElementById('item4').value,
        document.getElementById('item5').value
    ];

    // Display the importance question and list items
    extraInputs.classList.add('hidden');
    displayImportanceQuestion();
});

function displayImportanceQuestion() {
    importanceQuestion.classList.remove('hidden');
    importanceList.innerHTML = '';

    // Show the list with buttons to remove items
    specificItems.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<p>${index + 1}. ${item} <button class="remove
