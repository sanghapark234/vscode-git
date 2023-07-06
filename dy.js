var myButton = document.getElementById("myButton");
var myCoin = document.getElementById("myCoin");
var price = 0;
var currentInput = 0;
var change = 0;

//Button creating function
function createButton(cost) {
    var button = document.createElement("button");
    button.classList.add("bs");
    button.innerHTML = cost;
    button.addEventListener("click", function () {
        price = cost;
        passTo2ndPage();        
    });
    myButton.appendChild(button);
}
function displayCurrentInput(){
    var input = document.getElementById("currentInput");
    input.innerHTML = "Current input: " + currentInput;
    input.classList.add("cis");
    if(currentInput >= price){
        change = currentInput-price;
        setTimeout(function () {
            alert("good");
            passTo3rdPage();
        }, 800);
    }
}

function createCoin(value){    
    var coin = document.createElement("button");
    coin.classList.add("cs");
    coin.innerHTML = value;
    coin.addEventListener("click", function() {
    currentInput += value;
    displayCurrentInput();
    });
    myCoin.appendChild(coin);
}

//making buttons iteratively
for (var i = 1; i <= 30; i++) {
    var cost = i * 30;
    createButton(cost);
}



//redirecting 2nd.html with price variable
function passTo2ndPage(){
    window.location.href = "2nd.html?price=" + encodeURIComponent(price);
}
function passTo3rdPage(){
    window.location.href="3rd.html?change=" + encodeURIComponent(change);
}


function displayChange(){
    var urlParams = new URLSearchParams(window.location.search);
    var encodedChange = urlParams.get("change");
    change = decodeURIComponent(encodedChange);
    var bravo = document.getElementById("bravo");
    bravo.innerHTML = "Change is: " + change;

}

//display price and ...


function displayClickedButtonValue() {
    var urlParams = new URLSearchParams(window.location.search);
    price = decodeURIComponent(urlParams.get("price"));
    var result = document.getElementById("result");
    result.innerHTML = "Please insert: " + price;
    result.classList.add("rs");
}

function displayTakeButton(str){
    var flag = 0;
    var myTake = document.getElementById("myTake");
    var take = document.createElement("button");
    take.classList.add("ts");
    take.innerHTML = "Take the " + str;
    take.addEventListener("click", function() {
    if(flag ==0){
        alert("You recieved the " + str);
        flag++;
    } else{
        alert("You have already recieved the " + str);
        }
    });
    myTake.appendChild(take);
}


