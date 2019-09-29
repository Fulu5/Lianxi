jQuery(function($) {
    $(".front .button").click(function() {
        $(".front").addClass("front_rotate");
        $(".back").addClass("back_rotate");
    })
    $(".back .button").click(function() {
        $(".front").removeClass("front_rotate");
        $(".back").removeClass("back_rotate");
    })
})