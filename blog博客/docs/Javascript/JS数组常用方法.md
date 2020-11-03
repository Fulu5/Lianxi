## JS常用的数组方法

[1. join()（数组转字符串）](#join)  
[2. push(), pop()（数组尾操作）](#push)  
[3. shift(), unshift()（数组首操作）](#shift)  
[4. sort()（排序）](#sort)  
[5. reverse()（反转数组）](#reverse)  
[6. concat()（连接两个或多个数组）](#concat)  
[7. slice()（数组截取）](#slice)  
[8. splice()（数组更新）](#splice)  
ES5数组新增方法：  
索引方法：  
[9. indexOf(), lastIndexOf()](#indexOf)  
迭代方法（这几个方法语法都一样，都不会改变原数组）：  
[10. forEach()](#forEach)  
[11. map()](#map)  
[12. filter()](#filter)  
[13. some()](#some)  
[14. every()](#every)  
归并方法:   
[15. reduce(), reduceRight()](#reduce)   
ES6数组新增方法（注意浏览器兼容）  
[16. from()](#from)  
[17. of()](#of)  
[18. find()](#find)  
[19. findIndex ()](#findIndex )  
[20. fill ()](#fill )  
[21. includes ()](#includes )  
[22. copyWithin ()](#copyWithin )  
遍历数组方法（都是返回一个遍历器对象）:   
[23. keys ()（对键名的遍历）](#keys )  
[24. values ()（对键值的遍历）](#values )  
[25. entries ()（对键值对的遍历）](#entries )  

<h2 id="join" style="color:#2c3e50;">1. join() （数组转字符串）</h2>

数组转字符串，方法只接收一个参数：即默认为逗号分隔符（）。

```js
<script>
	var arr=[1,2,3,4];
	console.log(arr.join()); //1,2,3,4
	console.log(arr.join(":")); //1:2:3:4
	console.log(arr); //[1,2,3,4],原数组不变
</script>
```

<b>join()</b> 实现重复字符串

```js
<script>
    function repeatStr(str, n) {
        return new Array(n + 1).join(str);
    }
	console.log(repeatStr("嗨",3)); //嗨嗨嗨
	console.log(repeatStr("Hi",3)); //HiHiHi
	console.log(repeatStr(1,3));    //111
</script>
```

<h2 id="push" style="color:#2c3e50;">2. push()和pop()（数组尾操作）</h2>

<b>push()</b> 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

<b>pop()</b> 方法用于删除并返回数组的最后一个元素。

```js
<script>
	var arr=[1,2,3,4];
	//push
	var push_arr=arr.push("Tom","Sun");
	console.log(arr); //[1,2,3,4,"Tom","Sun"];
	console.log(push_arr); // 6
	//pop
	var pop_arr=arr.pop();
	console.log(arr); //[1,2,3,4,"Tom"];
	console.log(pop_arr); // Sun	
</script>
```

<h2 id="shift" style="color:#2c3e50;">3. shift() 和 unshift()（数组首操作）</h2>  

<b>shift()</b> 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。  
<b>unshift()</b> 方法可向数组的开头添加一个或更多元素，并返回新的长度。

```js
<script>
	var arr=[1,2,3,4];
	//shift
	var shift_arr=arr.shift();
	console.log(arr); // [2, 3, 4]
	console.log(shift_arr); // 1
	//unshift
	var unshift_arr=arr.unshift("Tom");
	console.log(arr); // ["Tom", 2, 3, 4]
	console.log(unshift_arr); // 4
</script>
```

<h2 id="sort" style="color:#2c3e50;">4. sort()（排序）</h2>

方法用于对数组的元素进行排序。

```js
<script>
	var arr=[1,100,5,20];
	console.log(arr.sort()); // [1, 100, 20, 5]
	console.log(arr); // [1, 100, 20, 5] (原数组改变)	
</script>
```

<h4>
请注意，上面的代码没有按照数值的大小对数字进行排序，是按照字符编码的顺序进行排序，要实现这一点，就必须使用一个排序函数：
</h4>

<h4>升序：</h4>

```js
<script>
	var arr=[1,100,5,20];
	function sortNumber(a,b){return a - b};
	console.log(arr.sort(sortNumber)); //[1, 5, 20, 100]
	console.log(arr); //[1, 5, 20, 100] (原数组改变)
</script>
```

<h4>降序：</h4>

```js
<script>
	var arr=[1,100,5,20];
	function sortNumber(a,b){return b - a};
	console.log(arr.sort(sortNumber)); // [100, 20, 5, 1]
	console.log(arr); // [100, 20, 5, 1] (原数组改变)
</script>
```

<h2 id="reverse" style="color:#2c3e50;">5. reverse() （反转数组）</h2>

方法用于颠倒数组中元素的顺序。

```js
<script>
	var arr=[12,25,5,20];
	console.log(arr.reverse()); // [20, 5, 25, 12]
	console.log(arr); // [20, 5, 25, 12] (原数组改变)
</script>
```

<h2 id="concat" style="color:#2c3e50;">6. concat() （连接两个或多个数组）</h2>

<b>concat() </b>方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。在没有给<b>concat() </b>方法传递参数的情况下，它只是复制当前数组并返回副本。

```js
<script>
	var arr=[1,2,3,4];
	var arr2=[11,12,13] 
	var arrCopy = arr.concat(arr2);
	console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)
	console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]
	console.log(arr); // [1, 2, 3, 4] (原数组未改变)
</script>
```

如果传入的参数是一个二维数组呢？

```js
<script>
	var arr=[1,2,3,4];
	var arr2=[11,[12,13]] 
	var arrCopy = arr.concat(arr2);	
	console.log(arrCopy); // [1, 2, 3, 4, 11, Array(2)]
	console.log(arr); // [1, 2, 3, 4] (原数组未改变)
</script>
```

<h2 id="concat" style="color:#2c3e50;">7. slice()（数组截取）</h2>

<b>slice(start , end)</b>
* <b>start</b> 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
* <b>end</b> 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

```js
<script>
	var arr = [1,4,6,8,12];
	var arrCopy1 = arr.slice(1);	
	var arrCopy2 = arr.slice(0,4);	
	var arrCopy3 = arr.slice(1,-2);
	var arrCopy4 = arr.slice(-5,4);
	var arrCopy5 = arr.slice(-4,-1)
	console.log(arrCopy1);  // [4, 6, 8, 12]
	console.log(arrCopy2);  // [1, 4, 6, 8] 
	console.log(arrCopy3);  // [4, 6] 
	console.log(arrCopy4);  // [1, 4, 6, 8]
	console.log(arrCopy5);  // [4, 6, 8]
	console.log(arr);  // [1, 4, 6, 8, 12] (原数组未改变) 
</script>
```

<h2 id="splice" style="color:#2c3e50;">8. splice() （数组更新）</h2>

<b>splice()</b>方法向/从数组中添加/删除项目，然后返回被删除的项目。（该方法会改变原始数组）

<b>splice(index , howmany , item1,.....,itemX)</b>
* <b>index</b> 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
* <b>howmany</b> 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
* <b>item</b> 可选。向数组添加的新项目。
* <b>返回值</b> 含有被删除的元素的数组，若没有删除元素则返回一个空数组。

```js
<script>
	var arr = ["张三","李四","王五","小明","小红"];
	/**************删除"王五"****************/
	var arrReplace1 = arr.splice(2,1);	
	console.log(arrReplace1);  // ["王五"] 
	console.log(arr);  // ["张三", "李四", "小明", "小红"] (原数组改变)
	//删除多个
	var arrReplace2 = arr.splice(1,2);	
	console.log(arrReplace2);  //  ["李四", "小明"] 
	console.log(arr);  // ["张三", "小红"]
	/**************添加"小刚"****************/
	var arrReplace3 = arr.splice(1,0,"小刚");
	console.log(arrReplace3);  // [] (没有删除元素，所以返回的是空数组)
	console.log(arr);  // ["张三", "小刚", "小红"]
	//添加多个
	var arrReplace4 = arr.splice(3,0,"刘一","陈二","赵六");
	console.log(arrReplace4);  // []
	console.log(arr);  // ["张三", "小刚", "小红", "刘一", "陈二", "赵六"]
	/**************"王五"替换"小刚"****************/
	var arrReplace5 = arr.splice(1,1,"王五");
	console.log(arrReplace5);  // ["小刚"]
	console.log(arr);  // ["张三", "王五", "小红", "刘一", "陈二", "赵六"]
	//替换多个
	var arrReplace6 = arr.splice(1,4,"李四");
	console.log(arrReplace6);  // ["王五", "小红", "刘一", "陈二"]
	console.log(arr);  // ["张三", "李四", "赵六"]
</script>
```

<h2 id="indexOf" style="color:#2c3e50;">9. indexOf()和 lastIndexOf()</h2>

两个方法都返回要查找的项在数组中首次出现的位置，在没找到的情况下返回-1

<b>indexOf(item,start)</b>（从数组的开头（位置 0）开始向后查找）   
* <b>item</b> 必须。查找的元素。 
* <b>start</b> 可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从array[0]开始检索。 

<b>lastIndexOf(item,start)</b>（从数组的末尾开始向前查找）
* <b>item</b> 必须。查找的元素。 
* <b>start</b> 可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从 array[array.length-1]开始检索。

```js
<script>
	var arr = [1,4,7,10,7,18,7,26];
	console.log(arr.indexOf(7));        // 2
	console.log(arr.lastIndexOf(7));    // 6
	console.log(arr.indexOf(7,4));      // 4
	console.log(arr.lastIndexOf(7,2));  // 2
	console.log(arr.indexOf(5));        // -1		
</script>
```

<h2 id="concat" style="color:#2c3e50;">10. forEach()</h2>

对数组进行遍历循环，这个方法没有返回值。jquery()也提供了相应的方法each()方法。

<b>forEach(function(currentValue , index , arr){...do something}, thisValue)</b>
* <b>currentValue</b> 必需。当前元素
* <b>index</b> 可选。当前元素的索引值。 
* <b>arr</b> 可选。当前元素所属的数组对象。
* <b>thisValue</b> 可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值

```js
<script>
	var arr=[1,2,3,4];
	var arr2=[11,12,13] 
	var arrCopy = arr.concat(arr2);
	console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)
	console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]
	console.log(arr); // [1, 2, 3, 4] (原数组未改变)
</script>
```

<h2 id="map" style="color:#2c3e50;">11. map()</h2>

指“映射”，方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

<b>map(function(currentValue , index , arr){...do something}, thisValue)</b>

```js
<script>
    var arr = [1,4,8,10];
    var arr2 = arr.map(function(currentValue){
        return currentValue*currentValue;
    });
    console.log(arr2);  // [1, 16, 64, 100]
</script>
```

<h2 id="filter" style="color:#2c3e50;">12. filter()</h2>

“过滤”功能，方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。和filter() 方法类似，jquery中有个 grep()方法也用于数组元素过滤筛选。

<b>filter(function(currentValue , index , arr){...do something}, thisValue)</b>

```js
<script>
    var arr = [1,4,6,8,10];
    var result1 = arr.filter(function(currentValue){
        return currentValue>5;
    });
    console.log(result1);  // [6, 8, 10]
    var result2 = arr.filter(function(currentValue){
        return currentValue>"5";
    });
    console.log(result2);  // [6, 8, 10]
</script>
```

当我们分别设置item > 5和item > "5"时, 返回的结果是一样的，由此我们可以看出<b>函数支持弱等于（==），不是必须全（===）。</b>

<h2 id="every" style="color:#2c3e50;">13. every()</h2>

判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。

<b>every(function(currentValue , index , arr){...do something}, thisValue)</b>

```js
<script>
	var arr = [1,4,6,8,10];
	var result1 = arr.every(function(currentValue){
	    return currentValue< 12;
	});
	console.log(result1);  // true
	var result2 = arr.every(function(currentValue){
	    return currentValue> 1;
	});
	console.log(result2);  // false
</script>
```

<h2 id="some" style="color:#2c3e50;">14. some()</h2>

判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。

<b>some(function(currentValue , index , arr){...do something}, thisValue)</b>

```js
<script>
	var arr = [1,4,6,8,10];
	var result1 = arr.some(function(currentValue){
	    return currentValue> 10;
	});
	console.log(result1);  // false
	var result2 = arr.some(function(currentValue){
	    return currentValue> 5;
	});
	console.log(result2);  // true
</script>
```

<h2 id="reduce" style="color:#2c3e50;">15. reduce()、reduceRight()</h2>

这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。他们都接收两个参数，<b>第一个参数</b>是每一项调用的函数，函数接受四个参数分别是初始值，当前值，索引值，和当前数组，<b>函数需要返回一个值，这个值会在下一次迭代中作为初始值。第二个参数</b>是迭代初始值，参数可选，如果缺省，初始值为数组第一项，从数组第一个项开始叠加，缺省参数要比正常传值少一次运算。

<b>reduce(function(total , cur , index , arr){...do something}, initialValue)</b>  

<b>reduceRight(function(total , cur , index , arr){...do something}, initialValue)</b>
* <b>total </b> 必需。初始值, 或者计算结束后的返回值。
* <b>cur  </b> 必需。当前元素。
* <b>index  </b> 可选。当前元素的索引。
* <b>arr </b> 可选。当前元素所属的数组对象。
* <b>initialValue </b> 可选。传递给函数的初始值。

```js
<script>
	var arr = [1,2,3,4,5];
	var result1 = arr.reduce(function(total,cur,index,arr){	
		console.log("total:"+total+",cur:"+cur+",index:"+index);
	    return total+cur;
	});
	console.log("结果："+result1);
	// 输出
	// total:1,cur:2,index:1
	// total:3,cur:3,index:2
	// total:6,cur:4,index:3
	// total:10,cur:5,index:4
	// 结果：15
	var result2 = arr.reduce(function(total,cur,index,arr){	
		console.log("total:"+total+",cur:"+cur+",index:"+index);
	    return total+cur;
	},10);
	console.log("结果："+result2);
	// 输出
	// total:10,cur:1,index:0
	// total:11,cur:2,index:1
	// total:13,cur:3,index:2
	// total:16,cur:4,index:3
	// total:20,cur:5,index:4
	// 结果：25
</script>
```

从上面代码我们可以看出，当我们不给函数传递<b>迭代初始值</b>时初始值 <b>total</b> 为数组第一项，函数从数组第二项开始迭代；若我们给函数传递<b>迭代初始值</b>，则函数从数组第一项开始迭代。

<h2 id="from" style="color:#2c3e50;">16. from()</h2>

将类似数组的对象（即有length属性的对象）和可遍历对象转为真正的数组。

```js
<script>
	let json ={
	    '0':'卢',
	    '1':'本',
	    '2':'伟',
	    length:3
	}
	let arr = Array.from(json);
	console.log(arr); // ["卢", "本", "伟"]	
</script>
```

<h2 id="of" style="color:#2c3e50;">17. of()</h2>

将一组值转变为数组，参数不分类型，只分数量，数量为0返回空数组。

```js
<script>
	let arr1 = Array.of(1,2,3);	
	let arr2 = Array.of([1,2,3]);
	let arr3 = Array.of(undefined);
	let arr4 = Array.of();
	console.log(arr1); // [1, 2, 3]
	console.log(arr2); // [[1, 2, 3]]
	console.log(arr3); // [undefined]
	console.log(arr4); // []
</script>
```

<h2 id="find" style="color:#2c3e50;">18. find()</h2>

返回通过测试（函数内判断）的数组的第一个元素的值。方法为数组中的每个元素都调用一次函数执行。当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。如果没有符合条件的元素返回 undefined。

<b>find(currentValue, index, arr)</b>
* <b>currentValue</b> 当前的值
* <b>index</b> 当前的位置
* <b>arr</b> 原数组

<h4>注意：find() 对于空数组，函数是不会执行的。find() 并没有改变数组的原始值。</h4>

```js
<script>
	let Arr = [1,2,5,7,5,9];
	let result1 = Arr.find(function(currentValue,index,arr){			
		return currentValue>5;
	});
	let result2 = Arr.find(function(currentValue,index,arr){			
		return currentValue>9;
	});
	console.log(result1); // 7
	console.log(result2); // undefined
</script>
```

<h2 id="findIndex" style="color:#2c3e50;">19. findIndex ()</h2>

findIndex和find差不多，不过默认返回的是索引，如果没有符合条件的元素返回 -1

```js
<script>
	let Arr = [1,2,5,7,5,9];
	let result1 = Arr.findIndex(function(currentValue,index,arr){			
		return currentValue>5;
	});
	let result2 = Arr.findIndex(function(currentValue,index,arr){			
		return currentValue>9;
	});
	console.log(result1); // 3
	console.log(result2); // -1
</script>
```

<h2 id="fill" style="color:#2c3e50;">20. fill ()</h2>

fill()方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

<b>fill(value,  start,  end)</b>
* <b>value</b> 必需。填充的值。
* <b>start</b> 可选。开始填充位置。如果这个参数是负数，那么它规定的是从数组尾部开始算起。
* <b>end</b> 可选。停止填充位置 (默认为 array.length)。如果这个参数是负数，那么它规定的是从数组尾部开始算起。

```js
<script>
    let arr = [1,2,3,4,5,6];
    arr.fill(0);  // [0, 0, 0, 0, 0, 0]
    arr.fill(0,1);  // [1, 0, 0, 0, 0, 0] 
    arr.fill(0,1,2);  // [1, 0, 3, 4, 5, 6]
    arr.fill(0,-1);  // [1, 2, 3, 4, 5, 0]
    arr.fill(0,1,-1);  // [1, 0, 0, 0, 0, 6]
</script>
```

<h2 id="includes" style="color:#2c3e50;">21. includes ()</h2>

判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

<b>includes(searchElement ,  fromIndex)</b>
* <b>searchElement </b> 必须。需要查找的元素值。
* <b>fromIndex</b> 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

```js
<script>
	let arr = ["a","b","c","d"];
	let result1 = arr.includes("b");
	let result2 = arr.includes("b",2);
	let result3 = arr.includes("b",-1);
	let result4 = arr.includes("b",-3);
	console.log(result1);  // true
	console.log(result2);  // false
	console.log(result3);  // flase
	console.log(result4);  // true
</script>
```

<h2 id="copyWithin" style="color:#2c3e50;">22. copyWithin ()</h2>

从数组的指定位置拷贝元素到数组的另一个指定位置中，会覆盖原有成员

<b>array.copyWithin(target ,  start ,  end)</b>
* <b>target  </b> 必需。从该位置开始替换数据。
* <b>start  </b> 可选。从该位置开始读取数据，默认为 0 。如果为负值，表示倒数。
* <b>end </b>  可选。到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

```js
<script>
	let arr = [1,2,3,4,5,6];
	let result1 = [1,2,3,4,5,6].copyWithin(0);
	let result2 = [1,2,3,4,5,6].copyWithin(0,1);
	let result3 = [1,2,3,4,5,6].copyWithin(1,3,5);
	let result4 = [1,2,3,4,5,6].copyWithin(1,2,-1);
	let result5 = [1,2,3,4,5,6].copyWithin(1,-4,6);
	console.log(result1);  // [1, 2, 3, 4, 5, 6]
	console.log(result2);  // [2, 3, 4, 5, 6, 6]
	console.log(result3);  // [1, 4, 5, 4, 5, 6]
	console.log(result4);  // [1, 3, 4, 5, 5, 6]
	console.log(result5);  // [1, 3, 4, 5, 6, 6]
</script>
```

<h2 id="keys" style="color:#2c3e50;">23. keys ()</h2>

<b>keys()</b>对键名的遍历

```js
<script>
	let arr = ["a","b","c","d"];
	for(let i of arr.keys()){
		console.log(i);
	}
    //打印：
    // 0
    // 1
    // 2
    // 3
</script>
```

<h2 id="values" style="color:#2c3e50;">24. values ()</h2>

<b>values()</b>对键值的遍历

```js
<script>
	let arr = ["a","b","c","d"];
	for(let i of arr.values()){
		console.log(i);
	}
    //打印：
    // a
    // b
    // c
    // d
</script>
```

<h2 id="entries" style="color:#2c3e50;">24. entries ()</h2>

<b>entries()</b>对键值对的遍历

```js
<script>
    let arr = ["a","b","c","d"];
    for(let i of arr.entries()){
        console.log(i);
    }
    //打印：
    // [0, "a"]
    // [1, "b"]
    // [2, "c"]
    // [3, "d"]
    for(let [idx,item] of arr.entries()){
        console.log(idx+":"+item);
    }
    //打印：
    // 0:a
    // 1:b
    // 2:c
    // 3:d
</script>
```