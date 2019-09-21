//Kurgamemnon 07092019
//Generate a random number between 1 and 100.
var secret = Math.floor((Math.random())  * 100 + 1);
//Get user input and store it as a number. 
//It's local scope so can't be accessed outside of the function.
$("#button").click(function(){
        var guess = document.getElementById("userInput").valueAsNumber;
    //Check if number is a valid number between 1 and 100
    if(Number.isNaN(guess)){
        document.getElementById("gameOutput").innerHTML = "That is not a number!";
    }
    else if (guess <=0 || guess >=101){
        document.getElementById("gameOutput").innerHTML = "That number is not between 1 and 100!";
    }
    //Compare guess to secret and give user output.
    else if (guess > secret){
        document.getElementById("gameOutput").innerHTML = "Too high plaese guess again";
    }
    else if (guess < secret){
        document.getElementById("gameOutput").innerHTML = "Too low please guess again";
    }
    else if (guess = secret){
        document.getElementById("gameOutput").innerHTML = "Well done you have guessed correctly";
    }
})