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
var flagChange= false;
var flagTicket=false;
var startTime = 0;
var endTime = 0;
var dur0 = "";
var dur1 = "";
var dur2 = "";


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
    endTimer();
    calcTotalDuration("dur0");
    window.location.href = "2ndv1.html?price=" + encodeURIComponent(price);
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
        redirectTo1st();
    });
    myGoBack.appendChild(goBack);
}
function redirectTo1st() {
    endTimer();
    calcTotalDuration("dur1");
    window.location.href = "1stv1.html";
    
}

// Prints currentInput and update opens 3rd.html when satisfied
function displayCurrentInput() {
    myCurrentInput.innerHTML = "Current input: <span class='current-style'>" + current + "</span>";
    myCurrentInput.classList.add("cicontent");

    if (current >= price) {
        endTimer();
        calcTotalDuration("dur1");
        disableCoinButtons();
        change = current - price;
        setTimeout(function () {
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
    window.location.href = "3rdv1.html?change=" + encodeURIComponent(change);
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
            flagChange = true;
            take.classList.add("received");
            if(flagTicket && flagChange){
                endTimer();
                calcTotalDuration("dur2");
                downloadLocalStorage();
            }   
        } else if (str == "ticket" && !flagTicket) {
            flagTicket = true;
            take.classList.add("received");
            if(flagTicket && flagChange){
                endTimer();
                calcTotalDuration("dur2");
                downloadLocalStorage();
            }
        }
    });
    myTake.appendChild(take);
}
//------------------------end of 3rd-----------------------------------------


//initializers
function initialize1st() {
    startTimer();
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
    startTimer();
    displayClickedButtonValue();
    displayCurrentInput();
    createCoin(500);
    createCoin(100);
    createCoin(50);
    createCoin(10);
    createGoBack();
}

function initialize3rd() {
    startTimer();
    displayChange();
    displayTakeButton("change");
    displayTakeButton("ticket");
}

function startTimer(){
    startTime = new Date().getTime();
}
function endTimer(){
    endTime = new Date().getTime();
}

function calcTotalDuration(str){
    var dur = endTime-startTime;
    if(str == "dur0"){
        dur0 = localStorage.getItem("dur0") || "";
        dur0 += dur + ".";
        localStorage.setItem("dur0", dur0);
    } else if (str == "dur1"){
        dur1 = localStorage.getItem("dur1") || "";
        dur1 += dur + ".";
        localStorage.setItem("dur1", dur1);
    } else if (str == "dur2"){
        dur2= localStorage.getItem("dur2") || "";
        dur2 += dur + ".";
        localStorage.setItem("dur2", dur2);
    }
}

function downloadLocalStorage(){
    var localStorageData = "";
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      localStorageData += key + ": " + value + "\n";
    }
    downloadFile(localStorageData, localStorage.getItem("filename"));
}
function downloadFile(content, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
   