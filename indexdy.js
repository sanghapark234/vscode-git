//--for index.html----------
localStorage.clear();
function submitForm(event) {
    event.preventDefault();
    var charValue = document.getElementById("charInput").value;
    var numberValue = document.getElementById("numberInput").value;
    var str = numberValue.toString() + charValue.toString();
    localStorage.setItem("ID/version", str);
    if(charValue == 'A'){
        window.location.href = "1stv1.html";
    } else if(charValue == 'B'){
        window.location.href = "1stv2.html";
    } else{
        alert("Enter valid character of version")
    }

}