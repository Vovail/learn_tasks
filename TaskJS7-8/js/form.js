$(document).ready(function() {
    $('body').html('<div class="container"></div><input type="button" value="Show help"/>');
    $('.container').css({
        'border': '1px solid black',
        'padding': '10px',
        'width': '600px'
    });
    $(".container").append('<div><span>firstname</span><input class="firstname"/><span class="helpSpan one">Please provide your firstname.</span></div>')
        .append('<div><span>lastname</span><input class="lastname"/><span class="helpSpan two">Please provide your lastname.</span></div>')
        .append('<div><span>address</span><input class="address"/><span class="helpSpan three">Please provide your address.</span></div>')
    $('span').css({
        'display': 'inline-block',
        'width': '70px'
    });
    $('.helpSpan').css({
        'display': 'inline-block',
        'width': '200px',
        'box-shadow': '0px 0px 5px black',
        'height': '20x',
        padding: '5px'
    });
    $('.container div input').addClass('inputField')
        .attr('type', 'text')
        .css({
            'width': '200px',
            'margin': '10px',
            'padding': '5px'
        });
    $('.helpSpan').fadeOut(0);
    $('.container div input').mouseover(function() {
        if ($(this).hasClass('firstname')) {
            $('.one').fadeIn(200);
        } else if ($(this).hasClass('lastname')) {
            $('.two').fadeIn(200);
        } else {
            $('.three').fadeIn(200);
        }
    })
    $('.container div input').mouseout(function() {
        if ($(this).hasClass('firstname')) {
            $('.one').fadeOut(200);
        } else if ($(this).hasClass('lastname')) {
            $('.two').fadeOut(200);
        } else {
            $('.three').fadeOut(200);
        }
    })
    $('input:button').click(function(){
      $('.helpSpan').fadeIn();
    })
})
