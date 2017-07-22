$(function () {

    /* Toggle responsive menu */ 
    $('#toggle-menu').click(function() {
        if(!$(this).hasClass('close')) {   
            $('#toggle-menu').addClass('close');
            $('.site-navigation').addClass('show');
            $('body').css('overflow', 'hidden');
        } else {
            $('.site-navigation').removeClass('show');
            $('#toggle-menu').removeClass('close');
            $('body').css('overflow', 'auto');
        }
    });

    if($('.filters-wrapper').length > 0) {
        $('.filters-wrapper').affix({
            offset: {
               top: $('.filters-wrapper').offset().top
            }
        });
    }

});