jQuery(function($) {

	var text = '<p>“只要你有想法，我们来帮你实现”是北京精雕集团东莞培训学校的宗旨，这里的技术完全体现了“精雕技术，无精不雕”。这里的数控机床非常齐全，所用的设计软件是精雕集团自主设计研发的，比起我们在学校学的CAD、CAM软件好用一百倍，可以直接描绘二维图和三维图，以及进行程序编制，非常的方便快捷。老师像好朋友一样跟我们交流，只要你有不懂不会的，他们都非常耐心教到你会为止，从不会觉得我们烦。</p><p>这里的上课时间，跟我们在学校的时间完全不同，或许我们在学校一天就上三节课，还可以睡懒觉，在这里可以吗？出到社会可以吗？不可以，我们从早上8:30到12:00，下午13:30到17:30，完全按照企业模式运作，我们呆在编程室和车间的时间真的只有这些吗？我想远远不止，我们从早上到晚上20:00，能休息的时间，我们都不想休息，在精雕的时间太宝贵了，学习的气氛太浓，跟我们在大学里完全是一个天一个地，想想以前在学校过着那些颓废的生活，现在想起来感觉非常地后悔，所以现在必须要改变，改变就从精雕开始。来到精雕后，我再也不想过着以前那颓废的生活了。</p>';

	$("button").click(function() {
		stopBodyScroll(true);
		$(".applyMessageContent").append(text);
		$("#mask").css('display', 'block');
		$("#applyMessage").css("display", "block");
	})

	$("#closeApplyMessage").click(function() {
		stopBodyScroll(false);
		$("#mask").css('display', 'none');
		$("#applyMessage").css('display', 'none');
		$(".applyMessageContent p").remove();
	})

	$("#mask").click(function() {
		stopBodyScroll(false);
		$("#mask").css('display', 'none');
		$("#applyMessage").css('display', 'none');
		$(".applyMessageContent p").remove();
	})

	//	阻止页面滚动
	var bodyEl = document.body;
	var top = 0;

	function stopBodyScroll(isFixed) {
		if(isFixed) {
			top = window.scrollY
			bodyEl.style.position = 'fixed';
			bodyEl.style.top = -top + 'px';
			bodyEl.style.width = '100%';
		} else {
			bodyEl.style.position = '';
			bodyEl.style.top = '';
			bodyEl.style.width = '';
			window.scrollTo(0, top) // 回到原先的top
		}
	}
});