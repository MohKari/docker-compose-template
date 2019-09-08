//Kurgamemnon 07092019
//Generate the random number and test with console.log.
//I missed the brackets off Math.random caused all manner of head scratching.
var secret = Math.floor((Math.random())  * 100 + 1);
var guess = 0;
$("#button").click(function(){
        var guess = document.getElementById("userInput").value;
        //guess = parseInt("guess", 10);
        console.log(guess);
 })
console.log(guess);