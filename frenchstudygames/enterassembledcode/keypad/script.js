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
function randcolor() {
  return colorcode[Math.floor(Math.random() * colorcode.length)];
}
var enteredcode = '';
var code = '664189107143880';
var buttons = '';
var colorcode = ['blue', 'green', 'red', 'yellow'];
for (var i = 0; i < 10; i++) {
  buttons += '<button onclick="enteredcode += \''+ i +'\';document.getElementById(\'entered\').innerHTML = enteredcode;document.getElementById(\'colorcodegiven\').innerHTML = \'\';">'+ i +'</button>';
  if (i == 4) {
    buttons += '<br>';
  }
}
document.getElementById('buttons').innerHTML = buttons;