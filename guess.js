let randomn = randomfun();
let chancesnum = 100;
let hscore = 0;
// console.log(randomn);
function randomfun() {
    return Math.floor(Math.random() * 100) + 1;
}
function check() {
    let number = document.getElementById("number").value;
    // console.log(randomn);
    // console.log("input:" + number);
    //checking higher 
    if (number === "") {
        alert("Enter any number as input!!!\nThe input is empty!\nAnyhow you lost 1 chance already. Be careful next time!");
        document.getElementById("chance").innerText = --chancesnum;
        console.log(chancesnum);

    }
    else if ((number > 100) || (number < 1)) {
        // document.getElementById("chance").innerText = chancesnum;
        alert("Enter valid number!!\nThe range is between 1 and 100");
        document.getElementById("chance").innerText = --chancesnum;

    }
    else if (number > randomn) {
        document.getElementById("message").innerText = "Your Guess Is High!";
        chancesnum = chancesnum - 1;
        document.getElementById("chance").innerText = chancesnum;
    }


    else if (number < randomn) {
        document.getElementById("message").innerText = "Your Guess Is Low!";
        chancesnum = chancesnum - 1;
        document.getElementById("chance").innerText = chancesnum;
    }
    else {
        document.getElementById("message").innerText = "🤩🤩 Hurray You Won 🤩🤩";
        document.body.style.backgroundColor = "green";
        document.getElementById("qbox").innerHTML = randomn;
        document.getElementById("chance").innerText = --chancesnum;
        document.getElementById("submit").style.display = "none";
        document.getElementById("number").style.backgroundColor = "green";
        if (chancesnum > hscore) {
            hscore = chancesnum;
            document.getElementById("highscore").innerHTML = hscore;
        }

    }

    //checking chances
    if (chancesnum < 1) {
        document.getElementById("message").innerHTML = "😥😥You Lost The Game😥😥";
        document.getElementById("submit").style.display = "none";
        alert("uh-oh!! The Game is Over!!\nPlay Again⚽");
    }
}
function playagain() {
    randomn = randomfun();
    // console.log(randomn);
    document.getElementById("message").innerHTML = "Start Guessing...";
    document.body.style.backgroundColor = "rgba(35, 2, 2, 0.997)";
    document.getElementById("submit").style.display = "block";
    document.getElementById("number").style.backgroundColor = "rgba(35, 2, 2, 0.997)";
    chancesnum = 100;
    document.getElementById("chance").innerText = chancesnum;
    document.getElementById("highscore").innerHTML = hscore;
    document.getElementById("qbox").innerHTML = "?";
    document.getElementById("number").value = "";
}



