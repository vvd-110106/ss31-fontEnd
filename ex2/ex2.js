document.getElementById("btn-chage").onclick = function () {
    
    if (document.getElementById("container").style.backgroundColor === "black") {
         document.getElementById("container").style.backgroundColor = "white"
        document.getElementsByClassName("content")[0].style.color = "black"
        document.getElementsByClassName("content")[1].style.color = "black"
    } else {
        document.getElementById("container").style.backgroundColor = "black"
        document.getElementsByClassName("content")[0].style.color = "white"
        document.getElementsByClassName("content")[1].style.color = "white"
    }
}