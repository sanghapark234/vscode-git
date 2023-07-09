//Loading <div>s
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
var st;
var flagChange = false;
var flagTicket = false;


//----for 1st---------
function createButton(cost, dest) {
    var ticket = document.createElement("button");
    ticket.classList.add("ticket");
    ticket.innerHTML = cost + "<br>" + dest;
    ticket.addEventListener("click", function () {
        price = cost;
        st = dest;
        redirectTo2nd(cost, dest);
    });
    myTicket.appendChild(ticket);
}
function redirectTo2nd(price, dest) {
    window.location.href = "2ndv2.html?price="
        + encodeURIComponent(price) + "&dest=" + encodeURIComponent(dest);
}
//---end of 1st----------


//-------------for 2nd--------------
//-------------for 2nd--------------
function createGoBack() {
    var goBack = document.createElement("button");
    goBack.classList.add("backbtn");
    goBack.innerHTML = "Go Back";
    goBack.addEventListener("click", function () {
        if (current != 0) {
            alert("Take " + current);
        }
        window.location.href = "1stv2.html";
    });
    myGoBack.appendChild(goBack);
}

// Prints currentInput and update opens 3rd.html when satisfied
function displayCurrentInput() {
    myCurrentInput.innerHTML = "Current input: <span class='current-style'>" + current + "</span>";
    myCurrentInput.classList.add("cicontent");
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
    coin.classList.add("coinbtn");
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

function redirectTo3rd() {
    window.location.href = "3rdv2.html?change=" + encodeURIComponent(change);
}


// display price and ...
function displayClickedButtonValue() {
    var urlParams = new URLSearchParams(window.location.search);
    price = decodeURIComponent(urlParams.get("price"));
    st = decodeURIComponent(urlParams.get("dest"));
    myRequest.innerHTML = "Please insert: " + price + " for " + st;
    myRequest.classList.add("request");
}

//----------end of 2nd--------------------------------
//----------end of 2nd--------------------------------


//-------------------------for 3rd---------------------------------------

function displayChange() {
    var urlParams = new URLSearchParams(window.location.search);
    var encodedChange = urlParams.get("change");
    change = decodeURIComponent(encodedChange);
    var bravo = document.getElementById("bravo");
    bravo.innerHTML = "Change is: " + change;
}

function displayTakeButton(str) {
    var myTake = document.getElementById("myTake");
    var take = document.createElement("button");
    take.classList.add("takebtn");
    take.innerHTML = "Take the " + str;
    if (str == "change" && change == 0) {
        flagChange = true;
        take.classList.add("received");
    }
    take.addEventListener("click", function () {
        if (str == "change" && !flagChange) {
            alert("You received " + change);
            flagChange = true;
            detectEnd();
            take.classList.add("received");
        } else if (str == "ticket" && !flagTicket) {
            alert("You received the " + str);
            flagTicket = true;
            detectEnd();
            take.classList.add("received");
        }
    });
    myTake.appendChild(take);
}
//------------------------end of 3rd-----------------------------------------


//initializers
function initialize1st() {
    createButton(350, "Aloha");
    createButton(350, "Brand");
    createButton(450, "Cobra");
    createButton(450, "Drake");
    createButton(600, "Ethic");
    createButton(600, "Fever");
    createButton(780, "Giant");
    createButton(780, "Hydra");
    createButton(900, "Idaho");
    createButton(900, "Japan");
    createButton(1040, "Korea");
    createButton(1040, "Lolipop");
    createButton(1220, "Mobile");
    createButton(1220, "Noah");
    createButton(1500, "Opera");
    createButton(1500, "Park");


}


function initialize2nd() {
    displayClickedButtonValue();
    displayCurrentInput();
    createCoin(500);
    createCoin(100);
    createCoin(50);
    createCoin(10);
    createGoBack();
}

function initialize3rd() {
    displayChange();
    displayTakeButton("change");
    displayTakeButton("ticket");
}

function detectEnd() {
    if (flagTicket && flagChange) {
      var timestamp = new Date().getTime();
      alert(timestamp);
    }
  }