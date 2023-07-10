//--for index.html----------
var time = "";

function submitForm(event) {
    event.preventDefault();
    var charValue = document.getElementById("charInput").value;
    if(charValue == 'A' || charValue == 'a'){
        window.location.href = "1stv1.html";
    } else if(charValue == 'B'){
        window.location.href = "1stv2.html";
    } else{
        alert("Enter a valid version");
    }

}

function setFileName() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    time = h.toString()+"_" +m.toString()+ "_"+ s.toString();
    localStorage.setItem("filename", time);
}

function initIndex(){
    localStorage.clear();
    setFileName();
}