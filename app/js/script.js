function elemAnimate() {
    $('.main-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('animate')) {
            $(this).addClass('animate')
        }
    });
    $('.right-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('r-animate')) {
            $(this).addClass('r-animate')
        }
    });
    $('.left-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('l-animate')) {
            $(this).addClass('l-animate')
        }
    });
    $('.stop-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('animate-stop')) {
            $(this).addClass('animate-stop')
        }
    })
}

$(document).ready(function () {
//mobile menu
    $(document).on('click', '#header-trigger', function (event) {
        event.preventDefault();
        let menu = $('.header__menu');
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

    /*header scroll*/

    $(window).scroll(function(){
        let header = $('.header');
        if(window.innerWidth > 1024) {
            if ( $(this).scrollTop() > 1  ){
                header.addClass('js-header-fixed');
            } else if($(this).scrollTop() < 1 && header.hasClass("js-header-fixed")) {
                header.removeClass('js-header-fixed');
            }
        }
    });
    /*close script*/

    //animate
    elemAnimate();
    $(window).scroll(function () {
        elemAnimate();
    })
    //close script

    /*contacts form*/
    let flag;
    let flag_1;
    let flag_2;
    let flag_3;
    $('#contact-name, #contact-email, #contact-phone, #contact-text').unbind().blur(function () {

        let id = $(this).attr('id');
        let val = $(this).val();

        switch (id) {
            case 'contact-name':
                let rv_name = /^[a-zA-Zа-яА-Я]{1,}$/;
                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    flag = true;
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    flag = false;
                }
                break;

            case 'contact-email':
                let rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    flag_1 = true;
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    flag_1 = false;
                }
                break;

            case 'contact-phone':
                let rv_phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                if (val != '' && rv_phone.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    flag_2 = true;
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    flag_2 = false;
                }
                break;

            case 'contact-text':
                if (val != '' && val.length < 5000) {
                    $(this).removeClass('error').addClass('not_error');
                    flag_3 = true;
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    flag_3 = false;
                }
                break;

        }
        flags();
    });

    let modal = document.querySelector('.modal');
    let submit = document.querySelector('#submit');
    let close = document.querySelector('.modal__close');
    function  flags() {
        if(flag === true && flag_1 === true && flag_2 === true && flag_3 === true) {
            submit.removeAttribute('disabled');
            console.log('enabled');
        }else {
            submit.setAttribute('disabled', 'disabled');
            console.log('disabled');
        }
    }

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        modal.setAttribute('style', 'z-index:9999; opacity: 1;');
        console.log(flag + flag_1 + flag_2 + flag_3);
        close.addEventListener('click', function () {
            modal.setAttribute('style', 'z-index: -1; opacity: 0;');
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.setAttribute("style", "z-index:-1; opacity: 0;");
            }
        });
    });
    //close script
    });

