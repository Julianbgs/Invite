$(document).ready(function () {
//mobile menu
    $(document).on('click', '#header-trigger', function (event) {
        event.preventDefault();
        var menu = $('.header__menu');
        if ($(this).hasClass('js-trigger-active')) {
            $(this).removeClass('js-trigger-active');
            menu.slideUp('slow');
        } else {
            $(this).addClass('js-trigger-active');
            menu.slideDown('slow');
        }
        return false;
    });
  //close script
});

