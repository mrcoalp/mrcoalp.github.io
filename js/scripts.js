$(window).scroll(function () {
    AOS.init();

    const scrollTop = $(window).scrollTop();

    if (scrollTop >= 20) {
        $('.arrow-scroll').css("display", "none");
    } else if (scrollTop < 20) {
        $('.arrow-scroll').css("display", "block");
    }
});

function scrollToMain() {
    const vheight = $(window).height();
    $('html, body').animate({
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
    }, 'slow', 'swing');
}