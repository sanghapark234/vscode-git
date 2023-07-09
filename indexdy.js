//--for index.html----------
function submitForm(event) {
    event.preventDefault();
    var numberValue = document.getElementById("numberInput").value;
    var charValue = document.getElementById("charInput").value;
    if(charValue == 'A'){
        window.location.href = "1stv1.html";
    } else{
        window.location.href = "1stv2.html";
    }

}