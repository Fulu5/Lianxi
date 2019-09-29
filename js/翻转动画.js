jQuery(function ($) {
	/*设置前后卡片高度一致*/
	$(".front").each(function () {
		//		var img = new Image();
		//		img.src = $(this).children(".card-background").children().attr("src");
		//		var ratio = img.naturalWidth / img.naturalHeight;//宽高比
		//		var cardW = $(this).children(".card-background").width();
		//		var frotH = cardW / ratio;
		//		alert(img.naturalWidth);
		var groud = $(this).children(".card-background").height();
		var backH = $(this).siblings(".back").height();
		var height = frotH > backH ? frotH : backH;
		$(this).css("height", height);
		$(this).parent().css("height", height);
		$(this).siblings(".back").css("height", height);
	});
	/*正面按钮*/
	$(".card-front-button").click(function () {
		$(this).parents(".rotate-card").addClass("rotate-click");
	});
	/*背面按钮*/
	$(".card-back-button").click(function () {
		$(this).parents(".rotate-card").removeClass("rotate-click");
	});
})