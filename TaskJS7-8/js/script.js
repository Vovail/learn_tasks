$(document).ready(function() {
    $('.tab').click(function() {
        $('.activetab').removeClass('activetab');
        $('.activecontent').removeClass('activecontent');
        $(this).addClass('activetab');
        if ($(this).attr('id') === "one") {
            $('#first').addClass('activecontent');
        } else if ($(this).attr('id') === "three") {
            $('.content:last').addClass('activecontent')
        } else {
            $('#second').addClass('activecontent')
        }
    })
})
