function Tab(tabContainer) {
	this.tabContainer = tabContainer;
	this.navBtns = this.tabContainer.querySelectorAll('.tab-nav-button');
	this.conItems = this.tabContainer.querySelectorAll('.tab-con-item');
	this.curClass = 'tab-nav-current';
	this.init();
}

Tab.prototype = {
	//方法
	init: function() {
		var setCurClass = false;
		for(var i = 0; i < this.conItems.length; i++) {
			this.navBtns[i].onclick = (function(i) {
				return function(event) {
					this.hideAllConItems();
					this.showOneConItem(i);
				};
			})(i).bind(this);
			this.conItems[i].style.display = 'none';
			if(this.navBtns[i].className.indexOf(this.curClass) > 0) {
				this.conItems[i].style.display = 'block';
				setCurClass = true;
			}
		};
		if(!setCurClass) {
			this.addClass(this.navBtns[0], this.curClass);
			this.conItems[0].style.display = 'block';
		}
	},
	hideAllConItems: function() {
		for(var j = 0; j < this.conItems.length; j++) {
			this.conItems[j].style.display = 'none';
		}
	},
	showOneConItem: function(i) {
		for(var j = 0; j < this.navBtns.length; j++) {
			if(j === i) {
				this.addClass(this.navBtns[i], this.curClass);
				this.conItems[j].style.display = 'block';
			} else {
				this.removeClass(this.navBtns[j], this.curClass);
				this.conItems[j].style.display = 'none';
			}
		}
	},
	//更新参数设置
	//	extend: function(source, target) {
	//		for(var p in target) {
	//			if(target.hasOwnProperty(p)) {
	//				source[p] = target[p];
	//			}
	//		};
	//		return source;
	//	},
	trim: function(str) {
		return str.replace(/^\s+/g, "").replace(/\s+$/g, "");
	},
	addClass: function(el, name) {
		var arr = [],
			str = el.className,
			arr = str.split(/\s+/),
			len = arr.length,
			name = this.trim(name);
		for(var i = 0; i < len; i++) {
			if(arr[i] === name) {
				return;
			}
		}
		el.className += ' ' + name;
	},
	removeClass: function(el, name) {
		var arr = [],
			str = el.className,
			arr = str.split(/\s+/),
			len = arr.length,
			name = this.trim(name);
		for(var i = 0; i < len; i++) {
			if(arr[i] === name) {
				arr.splice(i, 1);
				el.className = arr.join(' ');
				return;
			}
		}
	}
};

(function(document) {
	//页面加载完毕回调函数
	function callback() {
		var tabContainer = document.querySelectorAll(".tab-container");
		for(var index = 0; index < tabContainer.length; index++) {
			new Tab(tabContainer[index]);
		}
	}
	document.addEventListener('DOMContentLoaded', callback, false);
})(document);