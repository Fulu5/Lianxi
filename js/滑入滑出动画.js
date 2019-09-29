jQuery(function($) {
	var allscroll = $(window).scrollTop();
	var screenHit = $(window).height();
	var divpositn = $(".cover").offset().top;
	if ((allscroll + screenHit) > divpositn ) {
		$(".cover").addClass("cover-animation");
	}
})