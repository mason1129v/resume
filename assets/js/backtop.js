
$('#backtop').click(function () {
    $('html,body').animate({ scrollTop: 0 }); 
    return false;
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('#backtop').fadeIn();
    } else {
        $('#backtop').fadeOut();
    }
});