function analyze(){
    inputBoxData = document.getElementById("inputBox").value
    inputOrganized = inputBoxData.split(" ")
    feedback = document.getElementById("feedback")
    wordsToGo = document.getElementById("wordsToGo")

    console.log(inputOrganized)
    //Display How Many Words Typed
    if(inputOrganized.length == 1){
        feedback.innerHTML = "You entered " + inputOrganized.length + " word!"
    }
    else { feedback.innerHTML = "You entered " + inputOrganized.length + " words!"}
    //Random Useless Fact So the Page isnt So Boring
    if(inputOrganized.length <= 2100000){
        wordsRemaining = 2100000 - inputOrganized.length
        wordsToGo.innerHTML = "You are only " + wordsRemaining + " words short of the length of the worlds longest novel, Artamène ou Le Grand Cyrus."
    } else {
        wordsExceeding = inputOrganized.length - 2100000
        wordsToGo.innerHTML = "You have written " + wordsExceeding + " more than the worlds longest novel, Artamène ou Le Grand Cyrus!"}
}