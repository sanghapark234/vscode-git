//Loading <div>
var myTicket = document.getElementById("myTicket");
var myCoin = document.getElementById("myCoin");
var myGoBack = document.getElementById("myGoBack");
var myRequest = document.getElementById("myRequest");
var myCurrentInput = document.getElementById("myCurrentInput");

//global
var price = 0;
var current = 0;
var change = 0;
var isCoinClickable = true;


function createGoBack(){
    var goBack = document.createElement("button");
    goBack.classList.add("bs");
    goBack.innerHTML = "Go Back";
    goBack.addEventListener("click", function (){
        if(current != 0){
            alert("Take " + current);
        }
        window.location.href = "1st.html";
    });
    myGoBack.appendChild(goBack);
    }

// Button creating function
function createButton(cost) {
    var ticket = document.createElement("button");
    ticket.classList.add("bs");
    ticket.innerHTML = cost;
    ticket.addEventListener("click", function () {
        price = cost;
        redirectTo2nd();
    });
    myTicket.appendChild(ticket);
}

function displayCurrentInput() {
    myCurrentInput.innerHTML = "Current input: " + current;
    myCurrentInput.classList.add("cis");

    if (current >= price) {
        disableCoinButtons();
        change = current - price;
        setTimeout(function () {
            alert("Good");
            redirectTo3rd();
        }, 800);
    } 
}

function createCoin(value) {
    var coin = document.createElement("button");
    coin.classList.add("cs");
    coin.innerHTML = value;
    coin.addEventListener("click", function () {
        current += value;
        displayCurrentInput();
    });
    myCoin.appendChild(coin);
}

function disableCoinButtons() {
    var coinButtons = myCoin.getElementsByTagName("button");
    for (var i = 0; i < coinButtons.length; i++) {
        coinButtons[i].disabled = true;
    }
}



// making buttons iteratively
for (var i = 1; i <= 20; i++) {
    var cost = i * 30;
    createButton(cost);
}

// redirecting 2nd.html with updated price value
function redirectTo2nd() {
    window.location.href = "2nd.html?price=" + encodeURIComponent(price);
}

function redirectTo3rd() {
    window.location.href = "3rd.html?change=" + encodeURIComponent(change);
}

function displayChange() {
    var urlParams = new URLSearchParams(window.location.search);
    var encodedChange = urlParams.get("change");
    change = decodeURIComponent(encodedChange);
    var bravo = document.getElementById("bravo");
    bravo.innerHTML = "Change is: " + change;
}

// display price and ...
function displayClickedButtonValue() {
    var urlParams = new URLSearchParams(window.location.search);
    price = decodeURIComponent(urlParams.get("price"));
    myRequest.innerHTML = "Please insert: " + price;
    myRequest.classList.add("rs");
}


function displayTakeButton(str) {
    var flag = true; //True when not received yet
    var myTake = document.getElementById("myTake");
    var take = document.createElement("button");
    take.classList.add("ts");
    take.innerHTML = "Take the " + str;
    take.addEventListener("click", function () {
        if (flag == true) {
            alert("You received the " + str);
            flag = false;
        } else {
            alert("You have already received the " + str);
        }
    });

    myTake.appendChild(take);
}

function initialize2nd(){
    displayClickedButtonValue();
    displayCurrentInput();
    createCoin(500);
    createCoin(100);
    createCoin(50);
    createCoin(10);
    createGoBack();
}