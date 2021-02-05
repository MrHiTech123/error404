function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var code = ['blue', 'green', 'red', 'yellow'];
function setup() {
  createCanvas(1, 1);
}
function enter() {
  if (document.getElementById('enteredcode').value == '664189107143880') {
    document.getElementById('colorcode').innerHTML = 'Try: ' + code.join(', ');
  }
  else {
    document.getElementById('colorcode').innerHTML = 'Try: ' + [code[Math.floor(Math.random() * 4)], code[Math.floor(Math.random() * 4)], code[Math.floor(Math.random() * 4)], code[Math.floor(Math.random() * 4)]].join(', ');
  }
}