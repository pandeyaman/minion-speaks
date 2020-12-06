var inputText = document.querySelector('#input-text');
var btnTransalate = document.querySelector('#btn-translate');
var outputText = document.querySelector('#output-text');
var sampleText = document.querySelector("#sample-text");
var resettext = document.querySelector("#reset-text");
var funFactSpan = document.querySelector('#fact-span');

var facts = [
    "Minions are either one-eyed or two-eyed and all of them wear metallic goggles accommodating the number of eyes.",
    "All minions wear goggles without any specific reasons. And they have been wearing them since their existence in prehistoric era.",
    "Minions without goggles look horrible. Trust me.",
    "Minions have only 3 fingers in each hand.",
    "They have limited hairstyles; tall & short buzz cut, combed center parted, sprout cut, spread out spiky and bald.",
    "Minionese is more than words, like any other languages, it has tone of voice, body language & expressions. Minionese is more pragmatic than semantic.",
    "Though minions were first introduced to us in 2010, they have been living on this earth since forever. They are an ancient and pre-historic race.",
    "Minions have Standard English names; Kevin, Stuart, Dave, Carl, Bob, Donny, Tom, Phil, Steve, Chris, John and many more.",
    "Stuart is the only minion to be identified in all 3 movies; Despicable Me, Despicable Me 2 and Minions retaining the same appearance under his name, Stuart.",
    "Purple and yellow are on opposite sides in color spectrum; hence the evil minions were made purple.",
];

funFactSpan.textContent = "Translate something and we will tell you an intersting fact about Minions.";

const banana = new Audio('./audios/minion-bababa.mp3');
const bello = new Audio('./audios/minion-bello.mp3');
const laugh = new Audio('./audios/minion-laugh.mp3');

var audioArray = [banana, bello, laugh];

function randomFact() {
    var index = Math.floor(Math.random() * 10);
    var fact = facts[index];
    return fact;
}

function randomAudio() {
    var index = Math.floor(Math.random() * audioArray.length);
    var currentAudio = audioArray[index];
    return currentAudio;
}

function errorHandler() {
    alert("This API is rate-limited and can be called only 5 times per hour. Please try again after an hour.");
}

btnTransalate.addEventListener('click', () => {
    var englishText = inputText.value;
    var URL = 'https://api.funtranslations.com/translate/minion.json?text=' + englishText;

    fetch(URL)
        .then(response => response.json())
        .then(json => outputText.innerText = json.contents.translated)
        .catch(errorHandler);

    var audioPlay = randomAudio();
    audioPlay.play();

    var funFact = randomFact();
    funFactSpan.textContent = funFact;
});

sampleText.addEventListener('click', () => {
    inputText.innerText = "";
    inputText.value = 'Hello ! I am a minion and I love Banana !';
});

resettext.addEventListener('click', () => {
    inputText.value = " ";
    outputText.innerText = " ";
    funFactSpan.textContent = "Translate something and we will tell you an intersting fact about Minions.";
});