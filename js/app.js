console.log("Hello world");

var myGreetings = 0;
carousel();

function carousel() {
    var x = document.getElementsByClassName("welcome");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myGreetings++;
    if (myGreetings > x.length) {myGreetings = 1}
    x[myGreetings-1].style.display = "block";
    setTimeout(carousel, 2000);
}

$("a").click(function(event){
  if(this.hash){
    event.preventDefault();
    var hash = this.hash
    console.log(hash);

    $("body,html").animate({
      scrollTop : $(hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    })
  }
});
