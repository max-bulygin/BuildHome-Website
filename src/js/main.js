$('.main-menu__link').on('click', function () {
    var $linkActive = 'main-menu__link--active';
    $(this).addClass($linkActive)
        .siblings('.main-menu__link--active').removeClass($linkActive);

});

$('.slides').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});
$('#stickyMenu').sticky({topSpacing: 0,
                        zIndex: 100,
                        });

$('#accordion').accordion({
    header: 'h4',
    animate: 200,
    heightStyle: 'content'
});
