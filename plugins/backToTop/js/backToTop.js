function ScollPostion() {
	var t, l, w, h;
	if(document.documentElement && document.documentElement.scrollTop) {
		t = document.documentElement.scrollTop;
		l = document.documentElement.scrollLeft;
		w = document.documentElement.scrollWidth;
		h = document.documentElement.scrollHeight;
	} else if(document.body) {
		t = document.body.scrollTop;
		l = document.body.scrollLeft;
		w = document.body.scrollWidth;
		h = document.body.scrollHeight;
	}
	return {
		top: t,
		left: l,
		width: w,
		height: h
	};
}

// coef:触发切换事件的滚动偏移量
// backTop:按钮元素
function examScroll(coef, backTop) {
	var oScroll = ScollPostion();
	var pageOffset = oScroll.top;
	if(pageOffset > coef) {
		jQuery(backTop).css("top", "0px");
	} else {
		jQuery(backTop).css("top", "50px");
	}
}
window.onload = function() {
	jQuery("body").append("<div id='backToTop'><button id='go' ></button></div>");
	var coef = 50; //定义触发切换事件的滚动偏移量
	var backTop = document.getElementById("go");
	backTop.onclick = function(e) {
		//利用jquery的animate动画方法和scrollTop属性
		jQuery('html,body').animate({
			scrollTop: '0px'
		}, 600);
	}
	//jQuery(window).trigger("scroll");
	examScroll(coef, backTop);
	jQuery(window).scroll(function(e) {
		//console.log(e.originalEvent.pageY);			
		/*e.originalEvent.pageY不兼容*/
		//var pageOffset = e.originalEvent.pageY;
		var oScroll = ScollPostion();
		var pageOffset = oScroll.top;

		if(pageOffset > coef) {
			jQuery(backTop).css("top", "0px");
		} else {
			jQuery(backTop).css("top", "50px");
		}
	});
}