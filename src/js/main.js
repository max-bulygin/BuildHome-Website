$('.main-menu__link').on('click', function () {
    var $linkActive = 'main-menu__link--active';
    $(this).addClass($linkActive)
        .siblings('.main-menu__link--active').removeClass($linkActive);

});
$('#stickyMenu').sticky({topSpacing: 0,
                        zIndex: 100,
                        });
var styles = {
    backgroundColor: '#2a2d32',
    opacity: 0.9
};

// $('#stickyMenu').on('sticky-start', function () {
//     $('.header').css(styles);
// });
$('#slides').owlCarousel({
    items: 3,
    singleItem: true,
    autoPlay: true
});

$('#accordion').accordion({
    header: 'h4',
    animate: 200,
    heightStyle: 'content'
});
