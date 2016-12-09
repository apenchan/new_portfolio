console.log("Hello world");

var myGreetings = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("welcome");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myGreetings++;
    if (myGreetings > x.length) {myGreetings = 1}
    x[myGreetings-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
