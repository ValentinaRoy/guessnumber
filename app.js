var systemguess = Math.floor(Math.random()*100)+1
function guessnumber()
{   
    var number = document.getElementById("num").value
    if(number === '' || number>100 || number<1)
    {
        console.log('Invalid Input');
        document.getElementById("out").innerText = "Invalid Input";
    }
    else{
        var number = parseInt(document.getElementById("num").value)
        if(number===systemguess){
            console.log("Congrats , you are correct");
            document.getElementById("out").innerHTML = "Congrats , you are correct";
        }
        else if (number>systemguess){
            console.log("Guess a smaller number");
            document.getElementById("out").innerText = "Guess a smaller number";
        }
        else {
            console.log("Guess a larger number");
            document.getElementById("out").innerText = "Guess a larger number";
        }
    }
}
var data = document.getElementById("out")

