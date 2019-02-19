//=====================================================//
//                        NAVBAR                       //
//=====================================================//
$(document).ready(function() {
    $(".hamburger" ).click(function() {
        if(!$(".navigation").hasClass("open")) {
            $(".navigation").animate({width: "toggle"}, {duration: 500}).addClass("open");
        } else if($(".navigation").hasClass("open")) {
            $(".navigation").animate({width: "toggle"}, {duration: 500}).removeClass("open");
        }
    });
    $(window).resize(function() {
        if($(window).width() > 991) {
            $('.navigation').show().removeClass("open");
            $('.navigation').show().removeClass("mobile");
        } else {
            $('.navigation').hide().addClass("mobile");
        }
    }).resize();

    // $(".pages").click(function() {
    //     if($(".navigation").hasClass("open")) {
    //         $(".navigation").animate({width: "toggle"}, {duration: 500});
    //         $(".navigation").removeClass("open");
    //     }
    // });
    $(".navigation").click(function(event){
          event.stopPropagation();
    });
    // CLOSE MENU WITH ESCAPE KEY //
    $(document).keydown(function(e) { 
        if (e.keyCode == 27 && ($(".navigation").hasClass("open"))) { 
            $(".navigation").animate({width: "toggle"}, {duration: 500}).removeClass("open");
        }
    });
    $(document).ready(function() {
        // if($(window).width() > 991) {
            $('.mobile > .main-menu > .nav > li > a').click(function() {
                $(".mobile.navigation").animate({width: "toggle"}, {duration: 500}).removeClass("open");
                // console.log("new code");
            });
        // }
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
// $(document).on("click", "#portfolio", function() {
//     var pageHeight = $("body").height();
//     $(".full-size").height(pageHeight);
//     console.log(pageHeight);
//     var carouselHeight = $("#portfolio-item .carousel-img").height();
//     $(".carousel-controls").height(carouselHeight);
// });
$(document).ready(function() {
    var pageHeight;
    var carouselHeight;
    if($(window).width() > 798) {
        carouselHeight = $("#portfolio-item .carousel-img").height();
        $(".carousel-controls span").height(400);
        console.log('carousel height: ' + carouselHeight);
    }
    $(window).resize(function() {
        pageHeight = $("body").height();
        $(".full-size").height(pageHeight);
        carouselHeight = $("#portfolio-item .carousel-img").height();
        $(".carousel-controls span").height(carouselHeight);
        // var testHeight = $('#portfolio-item img').height();
        // console.log('test height bitch: ' + testHeight);
    }).resize();
});

$(document).ready(function() {
    $(".switcher #grid").click(function() {
        // $(window).resize(function() {
            $(".portfolio-item").each(function() {
                $(this).removeClass("carousel-item");
                $(this).addClass("grid-item");
                $(".grid").html($(".portfolio-item"));
            
                const portfolioRows = $(".portfolio-item");
                // const portfolioItems = portfolioRows.length;
                // console.log(portfolioItems);
                if($(window).width() > 767) {
                    for(var i = 0; i < portfolioRows.length; i += 3) {
                        portfolioRows.slice(i, i + 3).wrapAll("<div class='portfolio-row'></div>");
                        $(this).each(function() {
                            $(this).addClass("lg-grid-size");
                            $(this).removeClass("md-grid-size");
                            $(this).removeClass("mobile-size");
                        });
                    }
                    if (portfolioRows.length % 3 != 0) {
                        console.log(portfolioRows.length % 3);
                        $(".grid").append("<div class='portfolio-item'></div>");
                    }
                } else if ($(window).width() > 576) {
                    for(var i = 0; i < portfolioRows.length; i += 2) {
                        portfolioRows.slice(i, i + 2).wrapAll("<div class='portfolio-row'></div>");
                        $(this).each(function() {
                            $(this).addClass("md-grid-size");
                            $(this).removeClass("lg-grid-size");
                            $(this).removeClass("mobile-size");
                        });
                    }
                } else {
                    for(var i = 0; i < portfolioRows.length; i += 1) {
                        portfolioRows.slice(i, i + 1).wrapAll("<div class='portfolio-row'></div>");
                        $(this).each(function() {
                            $(this).addClass("mobile-size");
                            $(this).removeClass("lg-grid-size");
                            $(this).removeClass("md-grid-size");
                        });
                    }
                }
            });
            $("#myCarousel").removeClass("carousel");
            $(".carousel-controls").css("display","none");
            $(".carousel-indicators").css("display","none");
        // }).resize();
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
});