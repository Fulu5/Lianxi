jQuery(function($) {
	var total = news.length;
	var nums = 4; //每页出现的数量
	var pages = Math.ceil(total / nums); //得到总页数

	var thisData = function(curr) {
		var str = '',
			last = curr * nums;
		last = last >= total ? total : last;
		for(var i = (curr * nums - nums) + 1; i <= last; i++) {
			var partArray = Enumerable.from(news).where(function(x) {
				return x.id == i;
			}).toArray();
			var img = partArray[0].img;
			var title = partArray[0].title;
			var news_date = partArray[0].news_date;
			var content = partArray[0].content;
			var detail = partArray[0].detail;
			str += '<li class="news"><div class="news-img-wrapper">';
			str += '<img src=' + img + '></div>';
			str += '<div class="news-desc-wrapper">';
			str += '<h5 class="news-title UniverseLTStd-BoldCn">' + title + '</h5>';
			str += '<h5 class="news-date">' + news_date + '</h5>';
			str += '<div class="news-desc-container"><p class="news-desc">' + content + '</p></div>';
			str += '<a class="buttonBox" href=' + detail + ' target="_blank">';
			str += '<button>READ MORE</button><div class="border"></div><div class="border"></div><div class="border"></div><div class="border"></div></a></div>'
		}
		return str;
	};

	//调用分页
	laypage({
		cont: 'news_pagination',
		pages: pages,
		jump: function(obj) {
			document.getElementById('news_list').innerHTML = thisData(obj.curr);
			replaceExtraText();
			if(obj.curr == 1) {
				$(".laypage_main").prepend("<span class='laypage_prev'><</span>");
			}
			if(obj.curr == pages) {
				$(".laypage_main").append("<span class='laypage_next'>></span>");
			}
			$(".laypage_prev").html("<i class='fa fa-angle-left'></i>");
			$(".laypage_next").html("<i class='fa fa-angle-right'></i>");
			var lastpage = $(".laypage_last").attr("data-page");
			$(".laypage_last").html(lastpage);
			$(".laypage_first").html("1");
			if(total <= 4) {
				$("#news_pagination").css("margin", 0);
			}
		}
	});

	//替换超出部分为...
	function replaceExtraText() {
		var txt = ".news:nth-child(";
		var count = $("#news_list li").length;
		for(var i = 0; i < count; i++) {
			var tChild = txt + (i + 1) + ') .news-desc-container p';
			var tFather = txt + (i + 1) + ') .news-desc-container';
			var $p = $(tChild);
			var divH = $(tFather).height();
			while($p.outerHeight() > divH) {
				$p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
			};
		}
	}
});