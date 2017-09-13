var wordsLeft = "none";
var currentWord = "";
var highscore = 999999999999999999999999999999999999;
var getRight = new Audio('getRight.wav');
var getWrong = new Audio('getWrong.wav');
var time = 0;

function getWord() {
  var words = [
    "fork",
    "flashy",
    "opposite",
    "trick",
    "empty",
    "wreck",
    "change",
    "seemly",
    "abaft",
    "stitch",
    "wandering",
    "trust",
    "march",
    "husky",
    "rich",
    "fear",
    "snotty",
    "debt",
    "furtive",
    "face",
    "ashamed",
    "kaput",
    "launch",
    "snore",
    "first",
    "pedal",
    "push",
    "servant",
    "strong",
    "sheet",
    "limping",
    "warlike",
    "cakes",
    "baseball",
    "zinc",
    "laugh",
    "interfere",
    "doubtful",
    "bear",
    "amuck",
    "queen",
    "mushy",
    "reflect",
    "note",
    "squeal",
    "juggle",
    "street",
    "macho",
    "bells",
    "appliance",
    "lewd",
    "vigorous",
    "boundary",
    "shake",
    "tame",
    "muddled",
    "popcorn",
    "kick",
    "precious",
    "unbiased",
    "pollution",
    "elated",
    "torpid",
    "five",
    "lunch",
    "pop",
    "force",
    "secretive",
    "step",
    "wrist",
    "pet",
    "wiggly",
    "grip",
    "gaping",
    "callous",
    "dolls",
    "title",
    "unable",
    "war",
    "nerve",
    "scrape",
    "repeat",
    "shocking",
    "entertaining",
    "miniature",
    "touch",
    "copper",
    "income",
    "recognise",
    "stage",
    "splendid",
    "mindless",
    "toys",
    "beg",
    "sore",
    "distinct",
    "mitten",
    "angle",
    "example",
    "root",
    "field",
    "tray",
    "furniture",
    "horn",
    "tin",
    "balance",
    "miss",
    "bike",
    "vulgar",
    "accidental",
]

var randomNumber = Math.floor(Math.random()*words.length);
var randomWord = words[randomNumber];
return randomWord;

}

document.getElementById('start').onclick = function() {
  document.getElementById('mainmenu').style.display = "none";
  document.getElementById('game').style.display = "block";
  document.getElementById('playerInput').value = "";
  document.getElementById('playerInput').select();
  wordsLeft = 20;
  currentWord = getWord();
  document.getElementById('worddisplay').innerText = currentWord;
  timer = setInterval(countUp, 250);
  function countUp() {
    time += .25;
    console.log(time)
  }
}

document.getElementById('form').onsubmit = function() {
  event.preventDefault();

  var playerInput = document.getElementById('playerInput').value;
  document.getElementById('playerInput').value = "";

  if (playerInput == currentWord) {
    wordsLeft -= 1;
    document.getElementById('wordsleft').innerText = "Words Left: " + wordsLeft;
    getRight.play();
    currentWord = getWord();
    document.getElementById('worddisplay').innerText = currentWord;
  }
  else {
    getWrong.play();
  }

  if (wordsLeft == 0) {
    document.getElementById('endscreen').style.display = "block";
    document.getElementById('game').style.display = "none";
    clearInterval(timer);
    document.getElementById('timedisplay').innerText = "Time Taken: " + time + "s";
    if (time < highscore) {
      highscore = time;
    }
    document.getElementById('highscore').innerText = "Best Score: " + highscore + "s";
  }
}

document.getElementById('back').onclick = function() {
  document.getElementById('mainmenu').style.display = "block";
  document.getElementById('endscreen').style.display = "none";
  time = 0;
}
