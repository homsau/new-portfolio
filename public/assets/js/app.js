//=====================================================//
//                        NAVBAR                       //
//=====================================================//
$(document).ready(function() {
    $(".hamburger" ).click(function() {
        $(".navigation").addClass("open").animate({width: "toggle"}, {duration: 500});
    });
    $(window).resize(function() {
        if($(window).width() > 991) {
            $('.navigation').show();
        } else {
            $('.navigation').hide();
        }
    }).resize();

    // CLOSE MENU WITH ESCAPE KEY //
    $(document).keydown(function(e) { 
        if (e.keyCode == 27 && ($(".navigation").hasClass("open"))) { 
            $(".navigation").animate({width: "toggle"}, {duration: 500});
            $(".navigation").removeClass("open");
        }
    });
});

$(document).ready(function() {
    $("#home").click(function() {
        if (!$(this).hasClass("active")) {
            $(".nav a").removeAttr("class");
            $("#home").addClass("active");
            $(".pages").slideUp(500);
            $(".home").slideDown(500);
        }
    });
    $("#about-me").click(function() {
        if (!$(this).hasClass("active")) {
            $(".nav a").removeAttr("class");
            $("#about-me").addClass("active");
            $(".pages").slideUp(500);
            $(".about-me").slideDown(500);
        }
    });
    $("#portfolio").click(function() {
        if (!$(this).hasClass("active")) {
            $(".nav a").removeAttr("class");
            $("#portfolio").addClass("active");
            $(".pages").slideUp(500);
            $(".portfolio").slideDown(500);
        }
    });
    $("#contact").click(function() {
        if (!$(this).hasClass("active")) {
            $(".nav a").removeAttr("class");
            $("#contact").addClass("active");
            $(".pages").slideUp(500);
            $(".contact").slideDown(500);
        }
    });
});

//=====================================================//
//                         VIEWS                       //
//=====================================================//
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control-prev").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control-next").click();
       return false;
    }
});
$(document).ready(function(){
    $('.carousel').carousel({
        interval: false
    })
});