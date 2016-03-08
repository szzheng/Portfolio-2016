$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > $("#introScreen").height() - $(".container-fluid").height()) {
    	$(".navbar-inner").css("opacity", '0');
    } else {
    	$(".navbar-inner").css("opacity", '0.8');
    }
});


