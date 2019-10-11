//Kurgamemnon 07092019
//Generate a random number between 1 and 100.
var secret = Math.floor((Math.random())  * 100 + 1);

//Get user input and store it as a number. 
//It's local scope so can't be accessed outside of the function.
$("#button").click(function(){
    
    // get value
    var guess = $("#userInput").val();
        
    //Check if number is a valid number between 1 and 100
    if (Number.isNaN(guess)){
        gameOutput("That is not a number!");
    }
    else if (guess <=0 || guess >=101){
        gameOutput("That number is not between 1 and 100!");
    }
    //Compare guess to secret and give user output.
    else if (guess > secret){
        gameOutput("Too high please guess again.");
    }
    else if (guess < secret){
        gameOutput("Too low please guess again.");
    }
    else {
        gameOutput("Well done you have guessed correctly.");
    }
 
})

// function to quickly write to screen.
function gameOutput(message){
    $("#gameOutput").html(message);
}
