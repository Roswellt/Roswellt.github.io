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

// Initialize materialize components
$(document).ready(function(){
    $('.modal').modal();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
        scrollOffset: 0,
    });
});

$('.modal').click(function() {
    $('.modal').modal('close');
})

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