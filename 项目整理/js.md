# JS常用的15个数组方法

[1. some（）](#some)  
[2. reduce（）](#reduce)  
[3. every（）](#every)  
[4. map（）](#map)  
[5. flat（）](#flat)  
[6. filter（）](#filter)  
[7. forEach（）](#forEach)  
[8. findIndex（）](#findIndex)  
[9. find（）](#find)  
[10. sort（）](#sort)  
[11. concat（）](#concat)  
[12. fill（）](#fill)  
[13. includes（）](#includes)  
[14. reverse（）](#reverse)  
[15. flatMap（）](#flatMap)  

<div id="some" style="color:cyan;">1. some（）</div>

此方法为参数传递的函数测试数组。如果有一个元素与测试元素匹配，则返回`true`，否则返回`false`。

>注： `some()` 不会对空数组进行检测；`some()` 不会改变原始数组。

```js
const myAwesomeArray = ["a", "b", "c", "d", "e"]
myAwesomeArray.some(test => test === "d")
//-------> Output : true
```

<div id="reduce" style="color:cyan;">2. reduce（）</div>

此方法接收一个函数作为累加器。它为数组中的每个元素依次执行回调函数，不包括数组中被删除或者从未被赋值的元素。函数应用于累加器，数组中的每个值最后只返回一个值。

>注： `reduce()` 方法接受四个参数：初始值（上一次回调的返回值），当前元素值，当前索引，原数组。

```js
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.reduce((total, value) => total * value)
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120
```

<div id="every" style="color:cyan;">3. every（）</div>

此方法是对数组中每项运行给定函数，如果数组的每个元素都与测试匹配，则返回`true`，反之则返回`false`。

```js
const myAwesomeArray = ["a", "b", "c", "d", "e"]
myAwesomeArray.every(test => test === "d")
// -------> Output : falseconst myAwesomeArray2 = ["a", "a", "a", "a", "a"]
myAwesomeArray2.every(test => test === "a")
//-------> Output : true
```

<div id="map" style="color:cyan;">4. map（）</div>

该方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。它按照原始数组元素顺序依次处理元素。

>注： `map()` 不会对空数组进行检测；`map()` 不会改变原始数组。

```js
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.reduce((total, value) => total * value)
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120
```

<div id="flat" style="color:cyan;">5. flat（）</div>

此方法创建一个新数组，其中包含子数组上的holden元素，并将其平整到新数组中。请注意，此方法只能进行一个级别的深度。

>注： 此方法只能进行一个级别的深度。

```js
const myAwesomeArray = [[1, 2], [3, 4], 5]
myAwesomeArray.flat()
//-------> Output : [1, 2, 3, 4, 5]
```

<div id="filter" style="color:cyan;">6. flilter（）</div>

该方法接收一个函数作为参数。并返回一个新数组，该数组包含该数组的所有元素，作为参数传递的过滤函数对其返回true。

>注： `filter（）`方法是对数据中的元素进行过滤，也就是说是不能修改原数组中的数据，只能读取原数组中的数据，callback需要返回布尔值；为true的时候，对应的元素留下来；为false的时候，对应的元素过滤掉。

```js
const myAwesomeArray = [  
    { id: 1, name: "john" },  
    { id: 2, name: "Ali" },  
    { id: 3, name: "Mass" },  
    { id: 4, name: "Mass" }
]
myAwesomeArray.filter(element => element.name === "Mass")
//-------> Output : 0:{id: 3, name: "Mass"},
//                  1:{id: 4, name: "Mass"}
```

<div id="forEach" style="color:cyan;">7. forEach（）</div>

此方法用于调用数组的每个元素。并将元素传递给回调函数。

>注： `forEach（）`对于空数组是不会执行回调函数的。

```js
const myAwesomeArray = [  
    { id: 1, name: "john" },  
    { id: 2, name: "Ali" },  
    { id: 3, name: "Mass" }
]
myAwesomeArray.forEach(element => console.log(element.name))
//-------> Output : john
//                  Ali
//                  Mass
```

<div id="findIndex" style="color:cyan;">8. findIndex（）</div>

此方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。它为数组中的每个元素都调用一次函数执行，当数组中的元素在测试条件时返回 `true` 时, `findIndex()` 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。如果没有符合条件的元素返回 -1

>注： `findIndex（）`对于空数组，函数是不会执行的， `findIndex()`并没有改变数组的原始值。

```js
const myAwesomeArray = [  
    { id: 1, name: "john" },  
    { id: 2, name: "Ali" },  
    { id: 3, name: "Mass" }
]
myAwesomeArray.findIndex(element => element.id === 3)// -------> Output : 2myAwesomeArray.findIndex(element => element.id === 7)//-------> Output : -1
```

<div id="find" style="color:cyan;">9. find（）</div>

此方法返回通过测试（函数内判断）的数组的第一个元素的值。`find()` 方法为数组中的每个元素都调用一次函数执行：当数组中的元素在测试条件时回 `true` 时, `find()` 返回符合条件的元素，之后的值不会再调用执行函数。如果没有符合条件的元素返回 `undefined`。

>注： `find（）`对于空数组，函数是不会执行的；find() 并没有改变数组的原始值。

```js
const myAwesomeArray = [  
    { id: 1, name: "john" }, 
    { id: 2, name: "Ali" },  
    { id: 3, name: "Mass" }
]
 myAwesomeArray.find(element => element.id === 3)
 // -------> Output : {id: 3, name: "Mass"}
 myAwesomeArray.find(element => element.id === 7)
 //-------> Output : undefined
```

<div id="sort" style="color:cyan;">10. sort（）</div>

此方法接收一个函数作为参数。它对数组的元素进行排序并返回它。也可以使用含有参数的`sort()`方法进行排序。

```js
const myAwesomeArray = [5, 4, 3, 2, 1]
// Sort from smallest to largestmyAwesomeArray.sort((a, b) => a - b)
//  -------> Output : [1, 2, 3, 4, 5]
// Sort from largest to smallestmyAwesomeArray.sort((a, b) => b - a)
//-------> Output : [5, 4, 3, 2, 1]
```

<div id="concat" style="color:cyan;">11. concat（）</div>

此方法用于连接两个或多个数组/值，它不会改变现有的数组。而仅仅返回被连接数组的一个新数组。

```js
const myAwesomeArray = [1, 2, 3, 4, 5]
const myAwesomeArray2 = [10, 20, 30, 40, 50]
myAwesomeArray.concat(myAwesomeArray2)
//-------> Output : [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]
```

<div id="fill" style="color:cyan;">12. fill（）</div>

此方法的作用是使用一个固定值来替换数组中的元素。该固定值可以是字母、数字、字符串、数组等等。它还有两个可选参数，表示填充起来的开始位置（默认为0）与结束位置（默认为`array.length`）。

>注： `fill（）`方法用于将一个固定值替换数组的元素。

```js
const myAwesomeArray = [1, 2, 3, 4, 5]
// The first argument (0) is the value
// The second argument (1) is the starting index
// The third argument (3) is the ending indexmyAwesomeArray.fill(0, 1, 3)
//-------> Output : [1, 0, 0, 4, 5]
```

<div id="includes" style="color:cyan;">13. includes（）</div>

此方法用于判断字符串是否包含指定的子字符串。如果找到匹配的字符串则返回 true，否则返回 `false`。

>注： `includes（）`方法区分大小写。

```js
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.includes(3)
// -------> Output : truemyAwesomeArray.includes(8)
// -------> Output : false
```

<div id="reverse" style="color:cyan;">14. reverse（）</div>

此方法用于颠倒数组中元素的顺序。第一个元素成为最后一个，最后一个元素将成为第一个。

```js
const myAwesomeArray = ["e", "d", "c", "b", "a"]
myAwesomeArray.reverse()
// -------> Output : ['a', 'b', 'c', 'd', 'e']
```

<div id="flatMap" style="color:cyan;">15. flatMap（）</div>

该方法将函数应用于数组的每个元素，然后将结果压缩为一个新数组。它在一个函数中结合了`flat（`）和`map（）`。

```js
const myAwesomeArray = [[1], [2], [3], [4], [5]]
myAwesomeArray.flatMap(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]
// With .flat() and .map()myAwesomeArray.flat().map(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]
```