jQuery(function($) {
	var items = GetItems();
	//获取url中#后的值
	function GetItems() {
		var str = location.href
		var lastIndex = str.lastIndexOf('/');
		// news/news.html
		var newsTitle = str.substring(lastIndex + 1);
		newsTitle = newsTitle.replace('.html', '');
		var param = newsTitle.substring(newsTitle.length - 1);
		return param;
	}
	var story = news[items -1];
	var img = '../' + story.img;
	var title = story.title;
	var news_date = story.news_date;
	var content = story.content;
	var detail = story.detail.replace("newsroom/", "");
	var news_array = story.news_array;
	var str = '';
	str += '<div class="news-container">';
	str += '<h5 class="news-title UniverseLTStd-BoldCn">' + title + '</h5>';
	str += '<h5 class="news-date">' + news_date + '</h5>';
	str += '<div class="news">';
	var temp = '<div class="news-desc-wrapper">';
	//针对第二种新闻特殊处理
	if (items === "2") {
		temp = '<div class="news-desc-wrapper news-second">';
	} else{
		str += '<div class="news-img-wrapper"><img src="' + img + '" ></div>';
	}
	str += temp;
	for (var i = 0; i < news_array.length; i++) {
		var desc = news_array[i];
		str += '<p class="news-desc">' + desc + '</p>';
	}
	str += '</div></div>';
	$(".mainContent").append(str);
});