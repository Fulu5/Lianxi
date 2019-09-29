jQuery(function ($) {
	//常用DOM元素
	var mask = document.getElementById("mask");
	var applyMessage = document.getElementById("applyMessage");
	var categorySpans = document.getElementsByClassName("categorySpan");
	var jobContents = document.getElementsByClassName("jobContent");
	var applyBtns = document.getElementsByClassName("applyBtn");
	var closeApplyMessage = document.getElementById("closeApplyMessage");
	for (var i = 0; i < categorySpans.length; i++) {
		categorySpans[i].onclick = function () {

			var index = parseInt(this.getAttribute("index"));
			resetCategorySpans(categorySpans, index);
			resetjobContents(jobContents, index);
			this.setAttribute("class", "categorySpan active");
			jobContents[index].setAttribute("style", "display: block;");
			jobContents[index].setAttribute("class", "jobContent animated fadeInUpSmall");

		};
		applyBtns[i].onclick = function () {
			//显示遮罩及投递简历信息
			applyMessage.setAttribute("style", "display: block;");
			mask.setAttribute("style", "display: block;");
			//设置遮罩及投递简历信息的位置
			mask.style.height = window.innerHeight + "px";
			//applyMessage.style.top=(window.innerHeight-applyMessage.offsetHeight)*3/5+"px";
			//applyMessage.style.top="230px";
		};
	}

	//关闭遮罩及投递简历信息
	closeApplyMessage.onclick = function () {
		applyMessage.setAttribute("style", "display: none;");
		mask.setAttribute("style", "display: none;");
	}

	/**
	 * 重置职位列表便签样式
	 * @param {Object} categorySpans
	 * @param {Object} index
	 */
	function resetCategorySpans(categorySpans, index) {
		for (var i = 0; i < categorySpans.length; i++) {
			categorySpans[i].setAttribute("class", "categorySpan");
		}
	}
	/**
	 * 重置职位内容便签样式
	 * @param {Object} jobContents
	 * @param {Object} index
	 */
	function resetjobContents(jobContents, index) {
		for (var i = 0; i < jobContents.length; i++) {
			if (i != index) {
				jobContents[i].setAttribute("style", "display: none;");
				jobContents[i].setAttribute("class", "jobContent");
			}
		}
	}
	// window.location.search标志url中的query(查询)部分
	// 在query中查询zhiwei的index
	var zhiweiIndex = window.location.search.search("zhiwei");
	if (zhiweiIndex != -1) {
		var item = window.location.search.substr(zhiweiIndex + 7, 1);
		switch (parseInt(item)) {
			case 0:
				//1. 触发选项点击事件, 显示卡片内容
				$("#cz").trigger("click");
				//2. 动画滚动到合适位置
				$("html,body").animate({
					scrollTop: $("#zhiwei0").offset().top - 99
				}, 1000)
				break;
			case 1:
				$("#gy").trigger("click");
				$("html,body").animate({
					scrollTop: $("#zhiwei1").offset().top - 99
				}, 1000)
				break;
			case 2:
				$("#sb").trigger("click");
				$("html,body").animate({
					scrollTop: $("#zhiwei2").offset().top - 99
				}, 1000);
				break;
		}
	}
});