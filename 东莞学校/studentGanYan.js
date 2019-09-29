jQuery(function($) {
	
		var btns = Array();
		var spans = Array();
		var stu = $("div.stu");
		var target = "div .stu:nth-child(";
		
		for (var i = 1; i <= stu.length; i++) {
			btns[i-1] = target + i + ") button";
			spans[i-1] = target + i + ") span";
		}
	
		$(btns).each(function(i, e) {
			$(e).click(function() {
				$(".applyMessageContent").append($(spans[i]).html());
				$("#mask").css('display', 'block');
				$("#applyMessage").css("display", "block");
			});
		})
	
		$("#closeApplyMessage").click(function() {
			$("#mask").css('display', 'none');
			$("#applyMessage").css('display', 'none');
			$(".applyMessageContent p").remove();
		})
})