//--for index.html----------

function submitForm(event) {
    event.preventDefault();
    var charValue = document.getElementById("charInput").value;
    if(charValue == 'A' || charValue == 'a'){
        window.location.href = "1stv1.html";
    } else if(charValue == 'B' || charValue == 'b'){
        window.location.href = "1stv2.html";
    } else{
        alert("Enter a valid version");
    }

}

function setFileName() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    time = year.toString() + "_" + month.toString()+"_"+day.toString()+"_"+
    hr.toString()+"_" +min.toString()+ "_"+ sec.toString()+"_A";
    localStorage.setItem("filename", time);
}

function initIndex(){
    localStorage.clear();
    setFileName();
}