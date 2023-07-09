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


//----for 1st---------
function createButton(cost) {
    var ticket = document.createElement("button");
    ticket.classList.add("ticket");
    ticket.innerHTML = cost;
    ticket.addEventListener("click", function () {
        price = cost;
        redirectTo2nd();
    });
    myTicket.appendChild(ticket);
}
function redirectTo2nd() {
    window.location.href = "2nd.html?price=" + encodeURIComponent(price);
}
//---end of 1st----------


//-------------for 2nd--------------
//-------------for 2nd--------------
function createGoBack() {
    var goBack = document.createElement("button");
    goBack.classList.add("gbs");
    goBack.innerHTML = "Go Back";
    goBack.addEventListener("click", function () {
        if (current != 0) {
            alert(current + "is returned");
        }
        window.location.href = "1st.html";
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
    window.location.href = "3rd.html?change=" + encodeURIComponent(change);
}


// display price and ...
function displayClickedButtonValue() {
    var urlParams = new URLSearchParams(window.location.search);
    price = decodeURIComponent(urlParams.get("price"));
    myRequest.innerHTML = "Please insert: " + price;
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
    var flag = true; //True when not received yet
    var myTake = document.getElementById("myTake");
    var take = document.createElement("button");
    take.classList.add("takebtn");
    take.innerHTML = "Take the " + str;
    var onClick = function () {
        if (flag == true) {
            alert("You received the " + str);
            flag = false;
            take.classList.add("received");
            take.removeEventListener("click", onClick); 
        } 
    }
    take.addEventListener("click", onClick);
    if(str =="change" && change==0){
        flag = false;
        take.removeEventListener("click", onClick);
        take.classList.add("received");
    }
    
    myTake.appendChild(take);
}
//------------------------end of 3rd-----------------------------------------


//initializers
function initialize1st() {
    createButton(350);
    createButton(450);
    createButton(600);
    createButton(780);
    createButton(900);
    createButton(1040);
    createButton(1220);
    createButton(1500);
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