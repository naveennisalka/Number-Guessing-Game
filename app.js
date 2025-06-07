let randomNum = Math.floor(Math.random() * 10) + 1;
let count = 3;
function reset() {
    count = 3;
    document.getElementById("subText").style = "display: none;";
    document.getElementById("button").innerText = "Guess";
    document.getElementById("input").value = null;
    randomNum = Math.floor(Math.random() * 10) + 1;
}
function onClickButton() {
    if (document.getElementById("button").innerText != "ReStart") {
        if (count > 0) {
            let inputNum = Number(document.getElementById("input").value);
            if (inputNum == randomNum) {
                document.getElementById("subText").className = "alert alert-success";
                document.getElementById("subText").innerText = "Congratulations! You guessed the right number.";
                document.getElementById("subText").style = "display: visible;";
                if (document.getElementById("button").innerText == "ReStart") {
                    reset();
                }
                if (document.getElementById("button").innerText == "Guess") {
                    document.getElementById("button").innerText = "ReStart";
                }
            } else if (inputNum < randomNum) {
                document.getElementById("subText").innerHTML = "Number is too Low! Try again.<br>You have " + count + " attempts remaining.";
                document.getElementById("subText").className = "alert alert-warning";
                document.getElementById("subText").style = "display: visible;";
                count--;
            } else if (inputNum > randomNum) {
                document.getElementById("subText").innerHTML = "Number is too high! Try again.<br>You have " + count + " attempts remaining.";
                document.getElementById("subText").className = "alert alert-warning";
                document.getElementById("subText").style = "display: visible;";
                count--;
            }
        } else {
            document.getElementById("subText").innerHTML = "Oops! You've run out of attempts.<br> The correct number was " + randomNum;
            document.getElementById("subText").className = "alert alert-danger";
            document.getElementById("subText").style = "display: visible;";
            if (document.getElementById("button").innerText == "ReStart") {
                reset();
            }
            if (document.getElementById("button").innerText == "Guess") {
                document.getElementById("button").innerText = "ReStart";
            }
        }
    }else{
        document.getElementById("button").innerText = "Guess";
        reset();
    }
}