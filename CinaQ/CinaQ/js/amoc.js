

// DIALOGUE
$(function() {
    $(".nav-link").click(timeOfDay);
});

function timeOfDay() {
    var now = new Date()
    var hour = now.getHours();
    if(hour<16) {
        alert("Good day and Welcome to the Aston Martin Owner's Club!");
    }
    else {
        alert("Good evening and Welcome to the Aston Martin Owner's Club!");
    }
}

// SLIDE SHOW CONTROL
function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 3000 );
});

// BLOCK QUOTE CONTROL
$(document).ready(function() {
	   $('blockquote').quovolver();
   });

// SIGN-UP FORM SUBMIT BUTTON ALERT
$(function() {
	$("#submit").click(signUp);
});

function signUp() {
	var user = $("#email").val();
	alert("Thank You " + user + " for submitting your information. We will be back in touch with you soon");
}

// SECTION REMOVAL/RE-LAYOUT
$(function() {
    $("#delete1").click(function (){
        $("#db9").remove();
        $("#db5").removeClass("grid_4").addClass("grid_6");
        $("#vantage").removeClass("grid_4").addClass("grid_6");

    });

});

$(function() {
    $("#delete2").click(function (){
        $("#db5").remove();
        $("#db9").removeClass("grid_4").addClass("grid_6");
        $("#vantage").removeClass("grid_4").addClass("grid_6");

    });

});

$(function() {
    $("#delete3").click(function (){
        $("#vantage").remove();
        $("#db9").removeClass("grid_4").addClass("grid_6");
        $("#db5").removeClass("grid_4").addClass("grid_6");

    });

});
