/*Typed js initialization*/
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 100,
    typeSpeed: 100,
    loop: true,
});

/*Progress Bars*/
/*Waypoint*/
$(function () {
    $("#skills").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'

    });

});

/*Counter up jquery*/
$(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });
});



/*portfolio*/
/* Event */
$(window).on('load',function (){
    //initialization of isotope
    $("#isotope-container").isotope({
    });

    $("#isotope-filters").on('click','button',function(){
        //filter value
        var filterValue = $(this).attr('data-filter');

        //filter event items
        $("#isotope-container").isotope({
            filter: filterValue
        }); 
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/* Magnific Popup */
$( function(){
    $("#event-wrapper").magnificPopup({
        delegate: 'a', 
        // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});



/*back to top button*/
const backToTopButtom = document.querySelector("#btn-back-to-top");

window.addEventListener("scroll",scrollFunc);

function scrollFunc(){
    if(window.pageYOffset>610){
        //show back to top button

        backToTopButtom.style.display = "block";
    }
    else{
        //hide back to top button
        backToTopButtom.style.display = "none";
    }
}


/*Navigation*/

/*show and hide Navigation on scroll */
$(function () {

    //on page load
    showHideNav();

    $(window).scroll(function(){

        //window scroll
        showHideNav();
    });

    //show hide nav on page load
    function showHideNav(){
        if(
            $(window).scrollTop()>200){
            //show white navigation bar  
            $("nav").addClass("white-nav-top");
        }

        else{

            //hide navigation bar
            $("nav").removeClass("white-nav-top");

        }
    }
});