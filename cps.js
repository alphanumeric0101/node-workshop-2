function firstLetter(input, callBack) {
 callBack(input[0]);
}

firstLetter('word', function(x) {
 console.log(x);
});

function lastLetter(input, callBack) {
 callBack(input[input.length - 1]);
}

lastLetter('word', function(x) {
 console.log(x);
});


function firstAndLastLetter(input, callIt) {
 firstLetter(input, function(x) {
  lastLetter(input, function(y){
   callIt(x+y);
  });
 });
}

firstAndLastLetter("hello", function(newStr) {
 console.log(newStr);
})