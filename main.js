// RANDOM WORDS GAME
// main file for this example

//ARRY EXAMPLE
let randomWords = ['Endless', 'Field', 'the', 'action', 'have', 'you', 'seen', 'and', 
'going', 'town', 'people', 'boom', 'back', 'foward', 'left', 'right', 'sane', 'bob', 'chris', 'samuel', 72, 10, 90]

// OBJECT
const randomSentence = {
    words: randomWords,
    sentence : randomWords.join(' ').slice(0, this.number),
    number: 5
}

// get button 
const newButton = document.getElementById("genSentence");
newButton.addEventListener("click", function() {
    const newRandomSequence = randomiseWord(randomWords);
    console.log(newRandomSequence);
    generateWords(newRandomSequence);
});

// FUNCTION EXAMPLE

function randomiseWord(words){
    words = randomWords.sort(() => Math.random() - 0.5);
    randomSentence.sentence = words.join(' ').slice(0, randomSentence.number);
    return randomWords;
}

function generateWords(wordsToDisplay){
    console.log('clicked');
    const displayText  = document.querySelector('#display-text');
    displayText.innerHTML = wordsToDisplay.join(',').replace(/,\s*$/, "");
}

