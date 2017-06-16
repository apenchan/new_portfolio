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
    setTimeout(carousel, 5000);
}

$("a").click(function(event){
  if(this.hash){
    event.preventDefault();
    var hash = this.hash
    console.log(hash);

    $("body,html").animate({
      scrollTop : $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    })
  }
});

$('#mymodal').on('shown.bs.modal', function(e){
    $('.btn').one('focus', function(e){$(this).blur();});
});

function goBack(){
  window.history.back();
}
