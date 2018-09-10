function scrollToCenter(section) {
    var elHeight = $(section).innerHeight();
    var windowHeight = $(window).height();
    var offset = 0;
    if (windowHeight > elHeight) {
        offset = (windowHeight - elHeight) / 2;
    }
    $('html, body').animate({
        scrollTop: $(section).offset().top - offset
    },500);
}

$("#side-projects").click(function() {
    scrollToCenter('side-projects')
})

$("#work-experience").click(function() {
    scrollToCenter(".work-experience")
})

$("#programming").click(function() {
    scrollToCenter(".programming")
})