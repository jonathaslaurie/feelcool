// Get elements
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const specificQuestion = document.getElementById('specificQuestion');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const extraInputs = document.getElementById('extraInputs');
const submitSpecificButton = document.getElementById('submitSpecificButton');
const canYouDoItQuestion = document.getElementById('canYouDoItQuestion');
const yesDoItButton = document.getElementById('yesDoItButton');
const noDoItButton = document.getElementById('noDoItButton');
const finalMessage = document.getElementById('finalMessage');
const beKindMessage = document.getElementById('beKindMessage');
const aphorismText = document.getElementById('aphorism');

// Aphorisms array
const aphorisms = [
    "You’re braver than you believe, stronger than you seem, and smarter than you think. - Winnie the Pooh",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "There is a crack in everything, that’s how the light gets in. - Leonard Cohen",
    "Feelings are just visitors. Let them come and go. - Phillipa Perry",
    "It's not denial. I'm just selective about the reality I accept. - Calvin and Hobbes"
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
submitSpecificButton.addEventListener('click', showDoItQuestion);

// Function to show "Can you get this done" question
function showDoItQuestion() {
    extraInputs.classList.add('hidden');
    specificQuestion.classList.add('hidden');
    canYouDoItQuestion.classList.remove('hidden');  // Show final question
}

// When user answers YES to "Can you get this done?"
yesDoItButton.addEventListener('click', function() {
    canYouDoItQuestion.classList.add('hidden');
    const randomAphorism = aphorisms[Math.floor(Math.random() * aphorisms.length)];
    aphorismText.textContent = randomAphorism;
    finalMessage.classList.remove('hidden');  // Show final message with aphorism
});

// When user answers NO to "Can you get this done?"
noDoItButton.addEventListener('click', function() {
    canYouDoItQuestion.classList.add('hidden');
    beKindMessage.classList.remove('hidden');  // Show alternative final message
});
