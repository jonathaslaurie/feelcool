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

// 30 Creative and Inspiring Aphorisms
const aphorisms = [
    "Art is everything you don’t have to do. - Brian Eno",
    "The only unbearable thing is that nothing is unbearable. - Arthur Rimbaud",
    "To live is to pass from one space to another, while doing your very best not to bump yourself. - Roland Barthes",
    "There’s a bit of magic in everything, and then some loss to even things out. - Lou Reed",
    "You can play a shoestring if you're sincere. - John Coltrane",
    "Life isn’t some vertical or horizontal line — you have your own interior world, and it's not limited by where you are. - Patti Smith",
    "I don't know where I'm going from here, but I promise it won't be boring. - David Bowie",
    "I am not sick. I am broken. But I am happy as long as I can paint. - Frida Kahlo",
    "Ring the bells that still can ring, forget your perfect offering. - Leonard Cohen",
    "The world is a hellish place, and bad writing is destroying the quality of our suffering. - Tom Waits",
    "I have made my world and it is a much better world than I ever saw outside. - Philip Glass",
    "A painting is not a picture of an experience; it is an experience. - Mark Rothko",
    "Find what you love and let it kill you. - Charles Bukowski",
    "Whatever it is you're seeking won’t come in the form you're expecting. - Haruki Murakami",
    "Do not fear mistakes — there are none. - Miles Davis",
    "If you surrendered to the air, you could ride it. - Toni Morrison",
    "The aim of education is the knowledge, not of facts, but of values. - William S. Burroughs",
    "Arrange whatever pieces come your way. - Virginia Woolf",
    "Whenever you're writing something that's reflective, you have to put yourself through some sort of ordeal just to understand the way you're feeling.. - Damon Albarn",
    "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete. - Buckminster Fuller",
    "Escape from the architecture of paranoia requires nothing less than the invention of new forms of freedom. - Rem Koolhaas",
    "Life shrinks or expands in proportion to one's courage. - Anaïs Nin",
    "The place in which I’ll fit will not exist until I make it. - James Baldwin",
    "They always say time changes things, but you actually have to change them yourself. - Andy Warhol",
    "Paradise is exactly like where you are right now… only much, much better. - Laurie Anderson",
    "A dream you dream alone is only a dream. A dream you dream together is reality. - Yoko Ono",
    "I can't understand why people are frightened of new ideas. I'm frightened of the old ones. - John Cage",
    "The more time you spend contemplating what you should have done... you lose valuable time planning what you can and will do. - Tilda Swinton",
    "You've got to learn to leave the table when love’s no longer being served. - Nina Simone",
    "Architecture should speak of its time and place, but yearn for timelessness. - Frank Gehry"
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
        listItem.innerHTML = `<p>${index + 1}. ${item} <button class="removeButton" data-index="${index}">${index + 1} is not that important</button></p>`;
        importanceList.appendChild(listItem);
    });

    // Add event listeners to the dynamically created buttons
    document.querySelectorAll('.removeButton').forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = this.getAttribute('data-index');
            specificItems.splice(itemIndex, 1);  // Remove the unimportant item
            alert("Then fuck it - let's take that off the list, you can do it tomorrow.");
            displayImportanceQuestion();  // Re-render the list
        });
    });
}

// Function to show "Can you get this done" question
function showDoItQuestion() {
    importanceQuestion.classList.add('hidden');
    canYouDoItQuestion.classList.remove('hidden');  // Show final question
}

// When user answers YES to "Can you get this done?"
yesDoItButton.addEventListener('click', function() {
    canYouDoItQuestion.classList.add('hidden');
    displayFinalToDoList();
    const randomAphorism = aphorisms[Math.floor(Math.random() * aphorisms.length)];
    aphorismText.textContent = randomAphorism;
    finalMessage.classList.remove('hidden');  // Show final message with aphorism
});

function displayFinalToDoList() {
    toDoList.innerHTML = '';  // Clear any existing list items
    specificItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        toDoList.appendChild(listItem);
    });
}

// When user answers NO to "Can you get this done?"
noDoItButton.addEventListener('click', function() {
    canYouDoItQuestion.classList.add('hidden');
    beKindMessage.classList.remove('hidden');  // Show alternative final message
});
