/* global $, alert, console */

$(function() {


    $('.header'). height($(window). height())

    //buttons test
    $(".header button").first().on("click", ()=>{
        $(".header p").css("color","#f0610e")
    });

    $(".header button").last().on("click", ()=>{
        $(".header p").css("color","#fff")
    });


    // menu hover
    $(".links").on("mouseenter", ()=> {
        $(".header .links i").css('color', '#f7600e');
    });

    $(".links").on("mouseleave", ()=> {
        $(".header .links i").css('color', '#fff');
    });



    //menu open
    $(".links").on("click", ()=> {
        $(".header ul").slideToggle("fast");
        //$(".header .nav .links").css('color', "#f7600e");
    });


    //Arrow down
    $(".header .arrow i").on("click", ()=> {

        $("html, body").animate({
            scrollTop: $(".icons").offset().top
        }, 600);

    });



    // Testimonials slideshow
    $(".sliding").each((i, EL) => {

        const
        $parent = $(EL),
        $slides = $(".show", EL),
        $item = $(".listing", EL),
        $prevNext = $("i", EL),
        tot = $item.length,
        mod = (n, m) => ((n % m) + m) % m;
        
        let
        c = 0,
        itv;
        
        const prev = () => {c = mod(--c, tot); anim();};
        const next = () => {c = mod(++c, tot); anim();};
        const anim = () => $slides.css({transform: `translateX(-${c * 100}%)`});
        const stop = () => clearInterval(itv);
        const play = () => itv = setInterval(next, 4000);
        
        $prevNext.on("click", (ev) => $(ev.currentTarget).is(".next") ? next() : prev());
        $parent.hover(stop, play);
        play();
        
    });

/*
    const list = $('#myUl').children;
    
    
    $(list).on('click', ()=> {
        $(this).addClass('active')//.siblings().removeClass('active');
    });
*/


    
    















});

//$(".header").height($("window").height());

/*
document.querySelector('.header').clientHeight()

/**/ 














//NOTES:

    //'use strict';

    //$('html').niceScroll();
/*
    $(".header").height($("window").height());

    $('#myUl').children.on('click', ()=> {
        $(this).addClass('active').siblings().removeClass('active');
    });
*/

/*
    var leftArrow = $(".testomenials i"),
        rightArrow = $('.testomenials i')

    function checkClients() {

        $(".listing:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $(".listing:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();

    }

    checkClients();

    $(".testomenials i").on('click', ()=> {

        if($(this).hasClass('fa-chevron-right')){

            $(".testomenials .active").fadeOut(100, ()=> {

                $(this).removeClass('active').next(".listing").addClass('active').fadeIn();

                checkClients();

            });

        }else{

            $(".testomenials .active").fadeOut(100, ()=> {

                $(this).removeClass('active').prev(".listing").addClass('active').fadeIn();

                checkClients();

            });
        }
    });
*/