function submitForm(event) {
    event.preventDefault(); 
    localStorage.clear();
    setFileName();
    window.location.href = "1stv2.html";
    

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
    hr.toString()+"_" +min.toString()+ "_"+ sec.toString()+"_v2";
    localStorage.setItem("filename", time);
}

function initIndex(){
    localStorage.clear();
    setFileName();
}