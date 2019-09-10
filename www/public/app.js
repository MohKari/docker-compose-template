//Kurgamemnon 07092019
//Generate a random number between 1 and 100.
var secret = Math.floor((Math.random())  * 100 + 1);
//Get user input and store it as a number. 
//It's local scope so can't be accessed outside of the function.
$("#button").click(function(){
        var guess = document.getElementById("userInput").valueAsNumber;
})