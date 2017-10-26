console.log("Hello world");

var myGreetings = 0;

var arr = [{
    greeting: "Welcome",
    image: "welcomeImage1"
}, {
    greeting: "ברוכים הבאים",
    image: "welcomeImage2"
}, {
    greeting: "Bienvenue",
    image: "welcomeImage3"
}]

var counter = 0;

function carousel() {
    document.getElementById("greeting").innerHTML = arr[counter].greeting;
    document.getElementById("image").className = arr[counter].image
    counter++;
    if (counter === 3) {
        counter = 0;
    }
}

// function carousel() {
//     var x = document.getElementsByClassName("welcome");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myGreetings++;
//     if (myGreetings > x.length) {
//         myGreetings = 1
//     }
//     x[myGreetings - 1].style.display = "block";
// }


setInterval(carousel, 5000);
carousel();


$("a").click(function(event) {
    if (this.hash) {
        event.preventDefault();
        var hash = this.hash
        console.log(hash);

        $("body,html").animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        })
    }
});

$('#mymodal').on('shown.bs.modal', function(e) {
    $('.btn').one('focus', function(e) {
        $(this).blur();
    });
});

$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.project1').css('background-position', 'left ' + ((scrolledY)) + 'px');
});