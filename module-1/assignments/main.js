function myName() {
    document.getElementById("name").innerHTML = "Devinder Sirohi";
}


function myFeedback() {
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var comment = document.getElementById("comment").value;
    document.getElementById("f1").innerHTML = email;
    document.getElementById("f2").innerHTML = date;
    document.getElementById("f3").innerHTML = comment;

  
}