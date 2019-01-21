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

// Initialize scrollspy
$(document).ready(function(){
$('.scrollspy').scrollSpy();
});

$("#side-projects").click(function() {
    scrollToCenter('.side-projects')
})

$("#work-experience").click(function() {
    scrollToCenter(".work-experience")
})

$("#about").click(function() {
    scrollToCenter(".about")
})

$(".read-more-btn").click(function() {
    var visible = $(".read-more").css("display") === "none" ? false : true;
    console.log(visible);
    if (!visible) {
        $(".read-more").css("display", "block");
        $(".read-more-btn").css("display", "none");
    }
})