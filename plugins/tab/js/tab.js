function Tab(tabContainer) {
	this.tabContainer = tabContainer;
	this.navItems = tabContainer.querySelectorAll('.tab-nav-item');
	this.contentItems = tabContainer.querySelectorAll('.tab-content-item');
	this.curClassName = 'tab-nav-current';
	this.init();
}

Tab.prototype = {
	//方法
	init: function() {
		var setCurClass = false;
		// 给每个选项绑定点击事件
		for(var i = 0; i < this.navItems.length; i++) {
			this.navItems[i].onclick = (function(i) {
				return function(event) {
					this.hideAllcontentItems();
					this.showCurrentContentItem(i);// first item by default
				};
			})(i).bind(this);
			// 1.未设置 初始选中选项卡，全部none显示
			this.contentItems[i].style.display = 'none';
			// 2.设置 初始选中选项卡，block显示
			if(this.navItems[i].className.indexOf(this.curClassName) > 0) {
				this.contentItems[i].style.display = 'block';
				setCurClass = true;
			}
		};
		// 3.未设置初始选中选项卡，显示首个元素
		if(!setCurClass) {
			this.addClass(this.navItems[0], this.curClassName);
			this.contentItems[0].style.display = 'block';
		}
	},
	hideAllcontentItems: function() {
		for(var j = 0; j < this.contentItems.length; j++) {
			this.contentItems[j].style.display = 'none';
		}
	},
	showCurrentContentItem: function(i) {
		for(var j = 0; j < this.navItems.length; j++) {
			if(j === i) {
				this.addClass(this.navItems[i], this.curClassName);
				this.contentItems[j].style.display = 'block';
			} else {
				this.removeClass(this.navItems[j], this.curClassName);
				this.contentItems[j].style.display = 'none';
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