$(document).ready(function() {
    $('.submenu').slideUp(0);
    $('.hassubmenu').mouseenter(function(event) {
        $(event.target).children(".submenu:first").slideDown(300);
        if ($(event.target).hasClass("hassubmenu")) {
            $(event.target).find("a:first").css("color", "black");
        }
        var coord = event.target.getBoundingClientRect();
        $(event.target).css("width");
        if (window.outerWidth - coord.right < coord.width) {
            if (!$(event.target).parent().hasClass("submenu")) {
                $(event.target).children(".submenu:first").css("left", "0px")
            } else {
                $(event.target).children(".submenu:first").css("left", "-120px")
            }
        }

    })
    $('.hassubmenu').mouseleave(function(event) {
        $(this).children(".submenu:first").slideUp(300);
        $(this).find("a:first").css("color", "white");
    })

})
