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
            $(".mobile > .main-menu > .menu-nav > .nav > li > a").click(function() {
                $(".navigation").animate({width: "toggle"}, {duration: 500}).removeClass("open");
            });
        // }
    });
});

$(document).ready(function() {
    // TEST PAGE MENU ITEM
    // $("#test").click(function() {
    //     if (!$(this).hasClass("active")) {
    //         $(".nav a").removeAttr("class");
    //         $("#test").addClass("active");
    //         $(".pages").slideUp(500);
    //         $(".test").slideDown(500);
    //     }
    // });
    
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
            $("#contact-form input:not('.contact-submit')").val("");
            $("#contact-form textarea").val("");
        }
    });
});

//=====================================================//
//                         VIEWS                       //
//=====================================================//
$(document).ready(function() {
    $(".carousel-indicators > li").click(function() {
		var slideNum = $(this).attr("data-slide-to");
		// console.log(slideNum);
	});
});
$(document).ready(function() {
    $(".switcher + #myItems").each(function() {
        var itemName = document.getElementsByClassName("itemImg");
        var names = [];
        for(var i = 0; i < itemName.length; i++) {
            names[i] = $(itemName[i]).attr("alt");
            $(".carousel-inner .carousel-item:nth-child(" + (i + 1) + ") a .carousel-caption h3").addClass("" + i + "").text(names[i]);
        }
	});
    
    $(".switcher #grid").click(function() {
		// $(".switcher + #myItems .clonedSlide").hide();
		$(".switcher + #myItems").removeClass("carousel slide").addClass("grid").attr("data-interval", "false");
		$(".switcher + #myItems .embed-responsive-item").addClass("grid-item").removeClass("carousel-item");
		$(".switcher + #myItems .carousel-inner").removeClass("embed-responsive embed-responsive-16by9");
		$(".carousel-control-prev").css("display","none");
		$(".carousel-control-next").css("display","none");
		$(".carousel-indicators").css("display","none");
    });
    $(".switcher #carousel").click(function() {
		// $(".switcher + #myItems .clonedSlide").show();
		$(".switcher + #myItems").removeClass("grid").addClass("carousel slide").attr("data-interval", "7000");
		$(".switcher + #myItems .embed-responsive-item").addClass("carousel-item").removeClass("grid-item");
		$(".switcher + #myItems .carousel-inner").addClass("embed-responsive embed-responsive-16by9");
        $(".portfolio-item").each(function() {
            $(this).removeClass("grid-item");
            $(this).addClass("carousel-item");
            $(".carousel-inner").prepend($(".portfolio-item"));
        });
        $("#myItems").addClass("carousel");
        $(".carousel-control-prev").css("display","flex");
		$(".carousel-control-next").css("display","flex");
		$(".carousel-indicators").css("display","inline-flex");
    });
});

/* change carousel item with arrow keys */
/* close any open modals on left/right arrow click */
$(document).keydown(function(e) {
    if (e.keyCode === 37 || e.keyCode === 40) {
       // Previous
       $(".carousel-control-prev").click();
       $(".modal").modal("hide");
       return false;
    }
    if (e.keyCode === 38 || e.keyCode === 39) {
       // Next
       $(".carousel-control-next").click();
       $(".modal").modal("hide");
       return false;
    }
});

//=====================================================//
//                      RECAPTCHA                      //
//=====================================================//

$(document).ready(function() {
    $('#contact-form').submit(function(req, res) {
        $(this).ajaxSubmit({
            error: function(xhr,err) {
                // status('Error: ' + xhr.status);
                console.log(xhr);
                console.log(err);
            },
            success: function(response) {
                // on success remove active class from menu item
                // slide to hidden thank you block
                if ($("#contact").hasClass("active")) {
                    $(".nav a").removeAttr("class");
                    $(".pages").slideUp(500);
                    $(".thank-you").slideDown(500);
                    console.log('contact submission sent');
                }
            }
        });
        // Very important line, it disable the page refresh.
        return false;
    });
});
