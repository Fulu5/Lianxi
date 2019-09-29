jQuery(function($) {
    //滚动图
    //	var speed = 30; //速度数值越大速度越慢
    //	var jsweb8_cn_right = document.getElementById("jsweb8_cn_right");
    //	var jsweb8_cn_right1 = document.getElementById("jsweb8_cn_right1");
    //	var jsweb8_cn_right2 = document.getElementById("jsweb8_cn_right2");
    //	jsweb8_cn_right2.innerHTML = jsweb8_cn_right1.innerHTML;
    //
    //	function Marquee4() {
    //		if(jsweb8_cn_right.scrollLeft <= 0)
    //			jsweb8_cn_right.scrollLeft += jsweb8_cn_right2.offsetWidth;
    //		else {
    //			jsweb8_cn_right.scrollLeft--;
    //		}
    //	}
    //	var MyMar4 = setInterval(Marquee4, speed);
    //	jsweb8_cn_right.onmouseover = function() {
    //		clearInterval(MyMar4);
    //	}
    //	jsweb8_cn_right.onmouseout = function() {
    //		MyMar4 = setInterval(Marquee4, speed);
    //	}

    var i = 0;

    var clone = $(".banner .img li")
        .first()
        .clone(); //克隆第一张图片
    $(".banner .img").append(clone); //复制到列表最后
    var size = $(".banner .img li").size();

    for (var j = 0; j < size - 1; j++) {
        $(".banner .num").append("<li></li>");
    }

    $(".banner .num li")
        .first()
        .addClass("on");

    /*自动轮播*/

    var t = setInterval(function() {
        i++;
        move();
    }, 2000);

    /*鼠标悬停事件*/

    $(".banner").hover(
        function() {
            clearInterval(t); //鼠标悬停时清除定时器
        },
        function() {
            t = setInterval(function() {
                i++;
                move();
            }, 2000); //鼠标移出时清除定时器
        }
    );

    /*鼠标滑入原点事件*/

    $(".banner .num li").hover(function() {
        var index = $(this).index(); //获取当前索引值
        i = index;
        $(".banner .img")
            .stop()
            .animate({
                    left: -index * 500
                },
                500
            );
        $(this)
            .addClass("on")
            .siblings()
            .removeClass("on");
    });

    /*向左按钮*/
    $(".banner .btn_l").click(function() {
        i--;
        move();
    });

    /*向右按钮*/
    $(".banner .btn_r").click(function() {
        i++;
        move();
    });

    /*移动事件*/
    function move() {
        if (i == size) {
            $(".banner .img").css({
                left: 0
            });
            i = 1;
        }
        if (i == -1) {
            $(".banner .img").css({
                left: -(size - 1) * 500
            });
            i = size - 2;
        }
        $(".banner .img")
            .stop()
            .animate({
                    left: -i * 500
                },
                500
            );

        if (i == size - 1) {
            $(".banner .num li")
                .eq(0)
                .addClass("on")
                .siblings()
                .removeClass("on");
        } else {
            $(".banner .num li")
                .eq(i)
                .addClass("on")
                .siblings()
                .removeClass("on");
        }
    }
});