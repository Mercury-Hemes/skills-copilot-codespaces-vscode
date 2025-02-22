function skillsMember() {
    var member = document.getElementsByClassName("member");
    var i;
    for (i = 0; i < member.length; i++) {
        member[i].style.display = "none";
    }
    var x = document.getElementById("skillsMember");
    x.style.display = "block";
}