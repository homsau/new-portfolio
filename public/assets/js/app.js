//=====================================================//
//                        NAVBAR                       //
//=====================================================//
$(document).ready(function() {
    $(".hamburger" ).click(function() {
        $(".navigation").addClass("open").animate({width: "toggle"}, {duration: 500});
    });
    $(window).resize(function() {
        if($(window).width() > 991) {
            $('.navigation').show().removeClass("open");
        } else {
            $('.navigation').hide();
        }
    }).resize();

    $(".pages").click(function() {
        if($(".navigation").hasClass("open")) {
            $(".navigation").animate({width: "toggle"}, {duration: 500});
            $(".navigation").removeClass("open");
        }
    });
    $(".navigation").click(function(event){
          event.stopPropagation();
    });
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
$(document).ready(function() {
    var pageHeight;
    $(window).resize(function() {
        pageHeight = $("body").height();
        $(".full-size").height(pageHeight);
        console.log(pageHeight);
    }).resize();
});
$(document).ready(function() {
    $(".switcher #grid").click(function() {
        $(window).resize(function() {
            $(".portfolio-item").each(function() {
                $(this).removeClass("carousel-item");
                $(this).addClass("grid-item");
                $(".grid").html($(".portfolio-item"));
            });
            const portfolioRows = $(".portfolio-item");
            if($(window).width() > 767) {
                for(var i = 0; i < portfolioRows.length; i += 3) {
                    portfolioRows.slice(i, i + 3).wrapAll("<div class='portfolio-row'></div>");
                    $(".grid-item").css("min-width", "calc(50% - 10px) !important;")
                }
            } else if ($(window).width() < 768) {
                for(var i = 0; i < portfolioRows.length; i += 2) {
                    portfolioRows.slice(i, i + 2).wrapAll("<div class='portfolio-row'></div>");
                    $(".grid-item").css("min-width", "calc(50% - 10px) !important;")
                }
            } else if ($(window).width() < 576) {
                for(var i = 0; i < portfolioRows.length; i += 1) {
                    portfolioRows.slice(i, i + 1).wrapAll("<div class='portfolio-row'></div>");
                    $(".grid-item").css("min-width","100%");
                }
            }
        }).resize();
        $("#myCarousel").removeClass("carousel");
        $(".carousel-controls").css("display","none");
        $(".carousel-indicators").css("display","none");
    });
    $(".switcher #carousel").click(function() {
        $(".portfolio-item").each(function() {
            $(this).removeClass("grid-item");
            $(this).addClass("carousel-item");
            $(".carousel-inner").prepend($(".portfolio-item"));
        });
        $("#myCarousel").addClass("carousel");
        $(".carousel-controls").css("display","flex");
        $(".carousel-indicators").css("display","flex");
    });
});


/* change carousel item with arrow keys */
/* close any open modals */
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control-prev").click();
       $(".modal").modal("hide");
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control-next").click();
       $(".modal").modal("hide");
       return false;
    }
});
$(document).ready(function() {
    $('.carousel').carousel( {
        interval: false
    });

    /* side portfolio items 
    $(".carousel-inner .carousel-item").each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().prependTo($(this));
        }
    });*/
});