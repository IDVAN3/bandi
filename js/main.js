
'use strict'
$(document).ready(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
            }
        });
    }
    ibg();
    // end ibg

    // Прокрутка вверх
    $(window).scroll(function () {
        let scr_top = $(window).scrollTop();
        scr_top > 100 ? $('.js-up').fadeIn(300) : $('.js-up').fadeOut(300);
    });
    $('.js-up').click(function () {
        $('html, boud').animate({ scrollTop: 0 }, 300);
    });
    // end Прокрутка вверх

    // попап
    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function (i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            $('.js-popup').fadeOut(300);
    });
    // end попап

    $('.features__item').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive:[
            {
                breakpoint: 990,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.wrapper-teams').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive:[
            {
                breakpoint: 1100,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 1,
                }
            },
        ]
    });

    // section-work
    $('.wokr-li').click(function(e){
        e = $(this).closest('.work-ul').find('.wokr-li.active');
        e.removeClass('active');
        $(this).addClass('active');

        let id_categories = $(this).attr('data-li');
        // console.log(id_categories);
        $('.wrapper-work-img').each(function(e, elem) {
            elem = $(this).attr('data-categories');
            console.log(elem);
            if(id_categories == 'All'){
                $(this).removeClass('hidden');
            }
            else if (id_categories !== elem) {
                $(this).addClass('hidden');
            }
            else{
                $(this).removeClass('hidden');
            }
        })
        
    })
    // end section-work 
    function animate_number(result_block, get_number, duration_number) {

        if(($(window).scrollTop() > ($(result_block).position().top - $(window).height()) && ($(get_number).text() !== $(result_block).text()))) {

            $({numberValue: 0}).animate({numberValue: $(get_number).text()}, {
    
                duration: duration_number,
                easing: "linear",
    
                step: function(val) {
    
                    $(result_block).html(Math.ceil(val));
    
                }
    
            });
    
        }
        
    }

    function link_menu(id_link, result_block){
        if($(window).scrollTop() > ($(result_block).position().top - $(window).height())){
            $(".header__link").removeClass('active');
            $(id_link).addClass('active');
        }
    }
    window.addEventListener('scroll', function() {

        animate_number(".facts-one",".val1", 500);
        animate_number(".facts-two", ".val2", 500);
        animate_number(".facts-third", ".val3", 500);
        animate_number(".facts-four", ".val4", 500);
        
        link_menu("#link1", ".header");
        link_menu("#link2", ".features");
        link_menu("#link3", ".works");
        link_menu("#link4", ".team");
        link_menu("#link5", ".contact");
    });

    let heightHeader = $(".header").height();
    $('.header__list li a').click(function(){
        let element = $(this).attr('href');
        let dist = $(element).offset().top-heightHeader;

        $('html, body').animate({'scrollTop': dist}, 500);

        return false;
    })

    
        $('.header__burger').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    
});

