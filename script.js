document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;

    if (userInput.trim() === "") {
        alert("Please enter something!");
        return;
    }

    document.getElementById('userAnswer').textContent = userInput;
    document.getElementById('response').classList.remove('hidden');
});
