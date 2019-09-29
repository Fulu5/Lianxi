//scroller工厂函数
function Scroller(options){
	if( !typeof(options) === "object" ){
		console.log( "err:初始化对象的参数非object!" );
		return;
	}
	if( !( typeof(options.speed) ==="number" && options.speed>0 ) ){
		console.log( "err:speed参数有误!" );
		return;
	}
	if( options.direction !=="left" && options.direction !=="right" ){
		console.log( "err:滚动方向参数有误!" );
		return;
	}
	//滚动速度
	this.speed = options.speed;
	//方位参数
	this.direction = options.direction;
	//els:相关容器
	this.scroller = document.getElementById( "userdef-scroller" );
	this.content1 = document.getElementById( "userdef-content1" );
	this.content2 = document.getElementById( "userdef-content2" );
}
//工厂函数原型
Scroller.prototype = {
	stop:function(obj){
		return function(){
			clearInterval( obj.i );
		}
	},
	start:function(obj){
		return function(){
			obj.i = setInterval(obj.scroll(obj),obj.speed);
		}
	},
	init:function(){
		if( this.direction == "right" ){
			this.scroller.scrollLeft = this.scroller.scrollWidth-this.scroller.offsetWidth;
		}
		this.start(this)();
		//函数作为参数调研，其中的this指向全局window或者undefined，因此需要显示传入调用上下文
		this.scroller.addEventListener('mouseover',this.stop(this));
		this.scroller.addEventListener('mouseout',this.start(this));
	},
	scroll:function(obj){
		return function(){
			if( obj.direction === "left" ){//向左
			if( obj.scroller.scrollLeft >= obj.content1.scrollWidth ){
				obj.scroller.scrollLeft = 0;
			}
			else{
				obj.scroller.scrollLeft++;
			}
		}
		else if( obj.direction === "right" ){//向右
			var refdist = obj.scroller.scrollWidth-( obj.content2.scrollWidth+obj.scroller.offsetWidth );
			if( obj.scroller.scrollLeft <= refdist ){
				obj.scroller.scrollLeft = obj.scroller.scrollWidth-obj.scroller.offsetWidth;
			}
			else{
				obj.scroller.scrollLeft--;
			}
		}
		else return;
		}
		
	}
};
