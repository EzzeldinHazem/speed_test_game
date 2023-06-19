// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dopendencies",
    "Death",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

//Setting Levels
const lvls = {
    "Easy": 7,
    "Normal": 5,
    "Hard": 3
};

//Default Levels
let defaultLevelName = "Easy"; //Change Level Frome Here
let defaultLevelSecounds = lvls[defaultLevelName];

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".massage .lvl");
let secondsSpan = document.querySelector(".massage .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMassage = document.querySelector(".finish");

// Setting Levels Name + Secounds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSecounds;
timeLeftSpan.innerHTML = defaultLevelSecounds;
scoreTotal.innerHTML = words.length;

//Disable Paste Event
input.onpaste = function () {
    return false;
}

// Start Game
startButton.onclick = function () {
    this.remove();
    input.focus()
    // Generate Word Function
    genWords()
}

function genWords () {
    // Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove WordFrom Array
    words.splice(wordIndex, 1);
    // Show The Random Word
    theWord.innerHTML = randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML = '';
    // Generate Words
    for (let i =0; i < words.length; i++) {
        // Create Div Element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // Call Start Play Function
    startPlay()
}

function startPlay () {
    timeLeftSpan.innerHTML = defaultLevelSecounds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            // Stop Timer
            clearInterval(start);
            // Compare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                // Empty Input Field
                input.value = '';
                // Increase Score
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    // Call Generate Word Function
                    genWords();
                } else {
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Game Over 😑");
                span.appendChild(spanText);
                finishMassage.appendChild(span);
            }
        }
    }, 1000)
}