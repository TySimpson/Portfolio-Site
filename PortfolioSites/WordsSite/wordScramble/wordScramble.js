difficulty = ""
words = []
streak = 0;
document.getElementById("streak").innerHTML = "Streak: " + streak
document.getElementById("refreshButton").style.display="none";
document.getElementById("inputBox").style.display="none";
document.getElementById("submitButton").style.display="none";
document.getElementById("streak").style.display="none";

function wordList(){
    if(difficulty === "easy"){
        return words = ["bake","four","good","zero","tree","keep","game","ride","hope","need","word","five","best","huge","race","lace","mars","hide","cold","stay"]
    }
    else if(difficulty === "medium"){
        return words = ["accept", "animal", "artist","beyond","castle","choose","depend","doctor","driver","golden","island","leader","luxury","manner","rescue","search","season","tender","victim","wealth"]
    }
    else if(difficulty === "hard"){
        return words = ["accepted", "adjacent","advanced","bachelor","business","calendar","chemical","database","daylight","educated","engineer","graduate","industry","innocent","informed","maximize","measured","movement","religion","sensible","tomorrow"]
    }
}

//Scramble function credited to Brian Tittl on Youtube.
function scramble(string){
    var a = string.split(""),
        n = a.length

    for(var i = n - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i - 1));
        var temp = a[i];
        a[i] = a[j]
        a[j] = temp;
    }
    scrambledFinish = a.join("")
    if(scrambledFinish !== string){
        return scrambledFinish
    } else { null }
}

function play(){
    if(difficulty != ""){
        document.getElementById("inputBox").style.display="inline";
        document.getElementById("submitButton").style.display="inline";

        //Removes Button From View
        button = document.getElementById("play")
        button.remove();

        //Triggers Countdown
        countDownEl.innerHTML="15 seconds remaining"
        interval = setInterval(updateCountdown, 1000)

        //Chooses Random Word from List and Scrambles
        scrambledWord = document.getElementById("scrambledWord")
        randomIndex = Math.floor(Math.random() * (wordList().length))
        chosenWord = wordList()[randomIndex];
        scrambledWord.innerHTML = scramble(chosenWord)
    }
}

function checkSubmission(){
    submission = document.getElementById("inputBox").value.toLowerCase()
    //If There is an Acceptable Solution, Determines if correct or not and makes visual adjustments accordingly.
    if(submission.length >= 1){
        document.getElementById("submitButton").remove()
        if(submission === chosenWord){
            document.getElementById("results").innerHTML = "🎉 Correct! 🎉"
            document.getElementById("results").style.color="rgb(81, 216, 81)"
            document.getElementById("inputBox").style.borderColor="rgb(81, 216, 81)"
            document.getElementById("refreshButton").style.display="inline"
            //increaseStreak();
            clearInterval(interval)
        }
        else if(document.getElementById("results")!== submission){
            document.getElementById("results").innerHTML = "Wrong. It was: " + chosenWord
            document.getElementById("results").style.color="rgb(255, 60, 46)"
            document.getElementById("inputBox").style.borderColor="rgb(255, 60, 46)"
            document.getElementById("refreshButton").style.display="inline"
            //decreaseStreak();
            clearInterval(interval)

        }
    } else {
        document.getElementById("results").innerHTML = "Please enter a word."
    }
}


//Streak Feature is For Future Use  |  Need to learn more about live refreshing without full page refresh.
function increaseStreak(){
    streak++;
    document.getElementById("streak").innerHTML = "Streak: " + streak;
}
function decreaseStreak(){
    streak = 0;
    document.getElementById("streak").innerHTML = "Streak: " + streak;
}


//Function and Variables for Recording Countdown
let time = 14;
const countDownEl = document.getElementById("countdown")

function updateCountdown(){
    countDownEl.innerHTML = time + " seconds remaining"
    if(time <= 0){
        document.getElementById("inputBox").remove();
        countDownEl.remove();
        document.getElementById("submitButton").remove();
        document.getElementById("scrambledWord").innerHTML = "The word was: " + chosenWord + ". Try again."
        document.getElementById("scrambledWord").style.color="rgb(255, 60, 46)";
        document.getElementById("refreshButton").style.display="inline";
        //decreaseStreak();
    }
    console.log(time)
    time--;
}

//Submit if Enter is Pressed
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        checkSubmission();
    }
});

function swapStyleSheet() {
    if (document.getElementById("lightSwitch").checked == false || localStorage.getItem("mode") == "light") {
        document.getElementById("pageStyle").setAttribute('href', "dark.css");
        localStorage.setItem("mode", "dark");
    }
    else if(document.getElementById("lightSwitch").checked == true || localStorage.getItem("mode") == "dark"){
        document.getElementById("pageStyle").setAttribute('href', "wordScramble.css");
        localStorage.setItem("mode", "light");
    } 
}
