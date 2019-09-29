jQuery(function($){
	var total = spindle.length;
	var nums = 18; //每页出现的数量
	var pages = Math.ceil(total/nums);  //得到总页数
	
	var thisData = function(curr){			    
	    var str = '', last = curr*nums;
	    last = last >= total ? total : last;  
	    for(var i = (curr*nums - nums)+1; i <= last; i++){	
	        var partArray = Enumerable.from(spindle).where(function(x){return x.id == i;}).toArray();	
			var img = partArray[0].img;
			var title = partArray[0].title;
			var pdf_addr = partArray[0].pdf_addr;
			var pdf_title = partArray[0].pdf_title;
	        str += '<li onclick="window.open(\''+pdf_addr+'\');"><div class="li-wrap"><div class="li-img">';
	        str += '<img class="item-img" src='+img+'>';
	        str += '<div class="li-mask"></div></div>';
	        str += '<p class="little-title">'+title+'</p></div>';
	        str += '<a class="download-button" href='+pdf_addr+' download='+pdf_title+'>';
	        str += '<img src="../../images/download/download1.jpg" /></a></li>';			   
        }
		return str;
	};
		
	//调用分页
	laypage({
	    cont: 'download_pagination',
	    pages: pages,
	    jump: function(obj){
	        document.getElementById('spindle_list').innerHTML = thisData(obj.curr);	
	        //阻止子元素触发父元素的点击事件
	        $("a.download-button").click(function(e){
	        	e.stopPropagation();
	        })	        
	        //下载按钮鼠标浮动效果     	        
	        $(".download-button img").hover(function(){
				$(this).attr("src","../../images/download/download2.jpg");
			},function(){
				$(this).attr("src","../../images/download/download1.jpg");
			});	
	        if(obj.curr==1){
				$(".laypage_main").prepend("<span class='laypage_prev'><</span>");
			}
			if(obj.curr==pages){
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