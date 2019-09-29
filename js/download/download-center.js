jQuery(function($) {
	var total = high_speed.length;
	var nums = 3; //每页出现的数量
	var pages = Math.ceil(total / nums); //得到总页数

	var config_arr = [high_speed, machining, spindle, accessory];
	var thisData_high_speed, thisData_machining_center, thisData_spindle, thisData_accessory;
	var morepages = ["download-high-speed", "download-machining-center", "download-spindles", "download-accessory"];
	for(var idx = 0; idx < config_arr.length; idx++) {
		var thisData = function(curr) {
			var str = '<ul>';
			var partArray = config_arr[idx];
			for(var i = 0; i < nums; i++) {
				var img = partArray[i].img;
				var title = partArray[i].title;
				var pdf_addr = partArray[i].pdf_addr;
				var pdf_title = partArray[i].pdf_title;
				img = img.slice(3);
				pdf_addr = pdf_addr.slice(3);
				str += '<li class="pdf-item"><a href=' + pdf_addr + ' target="_blank"><div class="pdf-cover">';
				str += '<img class="item-img" src=' + img + '><div class="li-mask"></div></div>';
				str += '<div class="pdf-desc"><p class="little-title">'+ title + '</p></div>';
				str += '<div class="pdf-button"><a class="button-img" href=' + pdf_addr + ' download=' + pdf_title + '>';
				str += '<img src="../images/download/download1.jpg" /></a></div></a></li>';
			}
			str += '</ul>';
			return str;
		};
		//find out more
		var hrefstr = 'download/' + morepages[idx];
		var str = '<a href="' + hrefstr + '" target="_blank" class="buttonBox">';
		str += '<button>FIND OUT MORE</button><div class="border"></div><div class="border"></div><div class="border"></div><div class="border"></div></a>';
		var domstr = thisData();
		domstr += str;
		switch(idx) {
			case 0:
				thisData_high_speed = domstr;
				break;
			case 1:
				thisData_machining_center = domstr;
				break;
			case 2:
				thisData_spindle = domstr;
				break;
			case 3:
				thisData_accessory = domstr;
				break;
			default:
				break;
		}
	}

	//调用分页
	laypage({
		cont: 'download_pagination',
		pages: pages,
		jump: function(obj) {
			$(".pdf-button").click(function(e){
	        	e.stopPropagation();
	        })	
			document.getElementById('high_list').innerHTML = thisData_high_speed;
			document.getElementById('machining_list').innerHTML = thisData_machining_center;
			document.getElementById('spindle_list').innerHTML = thisData_spindle;
			document.getElementById('accessory_list').innerHTML = thisData_accessory;
			//下载按钮鼠标浮动效果     	        
	        $(".pdf-button img").hover(function(){
				$(this).attr("src","../images/download/download2.jpg");
			},function(){
				$(this).attr("src","../images/download/download1.jpg");
			});	
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
		}
	})
});