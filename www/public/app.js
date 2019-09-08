//Kurgamemnon 07092019
//Generate the random number and test with console.log.
//I missed the brackets off Math.random caused all manner of head scratching.
var secret = Math.floor((Math.random())  * 100 + 1);
var guess = 0;
$("#button").click(function(){
        guess = document.getElementById("userInput").value;
        console.log(guess);
        guess = parseInt("guess", 10);
        console.log(guess);
        console.log(typeof guess);
    //guess is returning a string, but it won't convert to an int. Nan when I try to parse it.
 })
console.log(guess);