## jQuery

**jquery : Write Less, Do More.**

### 框架库和jQuery介绍

​            javaScript框架库: 就是一个普通的js文件, 封装了很多的函数, 封装了很多兼容的代码.

​            jQuery : 是javaScript框架库中的一种.

​            好处: 可以解决js兼容问题, 体积小, 链式编程, 隐式迭代, 插件丰富, 开源, 免费. 

​        jQuery文件使用 

​            引入文件就行了

​        jQuery中顶级对象

​            Dom document , Bom window

​            jQuery 简化写法 $  



### 页面加载事件

```js
1、window.onload=function(){
	// js原生的事件
    // 在页面所有资源加载完后执行，如果有多个定义则只执行最后一个 (包括图片/外链等)
}

2、$(function(){
    // JQuery的方法
    // 在DOM加载完成时运行的代码，如果有多个定义则依次执行 (不包括图片)
});

等同于 

    $(document).ready(function(){
        // 在DOM加载完毕后执行了ready()方法
    }); 

也等同与 
    jQuery(function(){
        // $ 是 jQuery 的缩写
    });

```



### $的常用作用

1. 在页面基本标签加载完成时执行代码

```js
	$(function() {});
```

2. 将原生的js对象转换为jQuery对象.

```js
	$(原生的js对象)；  注意: $(this)；
```

原生js对象包括 : 内置对象/自定义对象/DOM对象/BOM对象

注意: 实际处理函数中的this是一个原生js对象, 需要使用$(this)转换为jQuery对象

jQuery对象[0] 或者 jQuery对象.get(0) 来得到js对象

3. $('选择器')

```js
	$('#btn');
```

4. 接收一个html字符串,可以把html字符串转换为jQuery对象

```js
	// 第一种方式
	var linkObj = $('<a href="http://www.baidu.com">百度</a>');
	// 添加到文档中
	$('#dv').append(linkObj);

	// 第二种方式
	$('#dv').html('<a href="http://www.baidu.com">百度</a>');
```



### 常用的选择器

基本选择器

```
            id选择器 : #box{}

            标签选择器 : div{}

            类选择器 : .cls{}

            并集选择器 : div, p{}

            通配符选择器 : *{}
```

层级选择器

```
            直接子元素 : div p{}

            所有子元素 : div>p{}

            下一个兄弟元素 : div+p{}

            所有的兄弟元素 : div~p{}
```

筛选选择器

```
            偶数选择器 : #box:even{}

            奇数选择器 : #box:odd{}

            选择索引为4 : #box>li:eq(4)

            选择索引大于4 : #box>li:gt(4)

            选择索引小于4 : #box>li:lt(4)
            
筛选状态:
			筛选选中的单选 :checked
			筛选选中的多选 :selected
```



### 常用的方法

 

```js
HTML代码/文本/值

		html()  innerHtml

		text()  innerText

		val()  表单元素的value属性一样
        val('zhi')  设置zhi
		// 下拉列表框中的val方法的返回值, 如果选中的option有value属性就返回value属性的值, 否则返回option标签中间的内容
        
属性       
  attr() 和 prop 的区别 :
	prop()设置和获取的是dom对象中的原生的属性 (如className, checked)
    attr()设置和获取的是标签中的属性. (可以是原生的, 也可以是自定义的) 如果获取的属性, 在标签上没有设置, 则返回undefined.
    自定义属性,就用attr;原生属性,就用prop.
    
        attr('属性')  // 获取该属性的值
        attr('属性','属性值') // 设置自定义属性 参数 1属性 2属性值
		removeAttr('属性')  // 移除属性

		prop('属性')  // 获取元素选中状态
		prop('属性','属性值')  // 设置元素选中状态

		width()  // 设置和获取宽
		height()  // 设置和获取高

		offset().left  // 获取左偏移
		offset().top  // 获取右偏移
		offset({left:100, top:100})  // 设置偏移量

		position()
		scrollTop();  // 获取纵向滚动的距离 --> 数字类型
		scrollLeft();  // 获取横向滚动的距离

		bind('事件 事件',函数) 
		delegate('要绑定的元素', '要绑定的事件的名字',函数 )

		$('#btn').get(0)  // 获取第一个元素
		$('#btn')[0]  // 获取第一个数组

		index()  获取元素下标

		find(x)  查找x下的所有元素
            
		children()  直接子元素

		siblings()  所有的兄弟元素
        
        // jQuery对象就是一个维数组, 其中存的元素就是js对象, each()遍历方法
        each(function (index, element){})  遍历对象
		// index  索引
		// element 当前对象
```

​            

设置元素样式

```js
	.css()写法
    	css('width')  // 获取元素的css的属性值, 字符串类型
		

      	css('width':'200px', 'height':'200px');

	   \1. 普通

            \2. 链式编程

                对象.方法().方法().方法()......

                就是方法在执行结束时, 将调用方法的对象再原样返回

                .end 恢复到断链之前

            \3. 键值对
```

 

### 操作类样式

```js
	css()  获取或设置css的样式, 用来取代style属性

	addClass('cls cls2')  添加类样式, 多个用空格隔开

	removeClass('cls')  移除类样式cls, ()中什么也不写:移除所有类样式

	hasClass('cls')  判断元素是否拥有某个元素,返回T|F

	toggleClass('cls') 切换类样式,没有就添加,有就移除
```

​        

### 获得兄弟元素 

```js
	siblings() : 所有兄弟元素

	next() : 下一个兄弟元素

	nextAll() : 后面的所有兄弟元素

	prev() : 前一个兄弟元素

	prevAll : 前面的所有兄弟元素
```

​        

### 操作动画效果

```js
	hide(动画执行时间, 回调函数)  // 隐藏元素 

	show(动画执行时间, 回调函数)  // 显示元素

	sideDown()  // 滑下来

	slideUp()  // 滑上去

	slideToggle()  // 切换滑动状态

	fadeln()  // 淡入

	fadeOut()  // 淡出

	fadeToggle()  // 切换淡入淡出

	fadeTo()  // 透明度变化
    
    animate({css样式}, 时间, 回调函数);  // 把元素从当前的css样式, 变换到指定的css样式

	stop()  // 用来停止动画,停止当前元素上排队的动画

		属性

	动画执行的时间 : 数值类型--毫秒值, 字符串类型 : 'slow'--慢  'normal'正常  'fast'--快

	匿名函数 : 在动画执行结束后, 会自动调用回调函数arguments.callee 相当于递归


```



### 操作元素(创建/添加...)

##### DOM中创建元素

​         1.document.write("标签代码");缺陷:页面加载后创建元素,把页面中原有的内容全部的干掉

​         2.innerHTML, 每次设置值, 都会重新渲染页面, 效率比较低; innerHTML添加的元素, 比较难以绑定事件.

​         3.document.createElement("标签的名字"), 直接可以获取元素对象, 可以方便的绑定事件.

​       

##### jQuery中创建元素

​         1.**$("HTML的字符串");**

```js
// 点击按钮, 创建一个超链接
$(function () {
    $('#btn').click(function () {
      // 创建了一个jQuery对象
      var linkObj = $('<a href="http://www.baidu.com">百度</a>');
      // 添加到文档中  父元素.append(子元素) || 子元素.appendTo(父元素);
      $('#dv').append(linkObj);
      });
});
```

​         2.**对象.html("HTML的字符串");**

```js
// 相当于innerHtml
$(function () {
    $('#dv').html('<a href="http://www.baidu.com">百度</a>');
});
```



##### jQuery中添加元素

内部插入:

​	append() : 添加一个子元素, 追加到最后

​	appendTo()

​	prepend() : 添加一个子元素, 追加到最前

​	prependTo()

```js
// append方法把元素添加到另一个元素中的时候,有剪切的效果
// 父元素.append(子元素);
$("div").append($("p"));
// appendTo方法 子元素主动添加到父元素中
// 子元素.appendTo(父元素);
$("p").appendTo("div");
```

外部插入:

​	after() : 在每个匹配的元素之后插入内容

​	insertAfter()

​	before() : 在每个匹配的元素之前插入内容

​	insertBefore()

##### jQuery中移除元素

```js
// 清空div中的内容
// 第一种方式 清空 
$('#dv').html(''); 
// 第二种方式 清空
$('#dv').empty();
// 低三种方式 移除
$('#dv').remove();
```

##### jQuery中替换元素



##### jQuery中克隆元素

```js
// 克隆元素
$('#div').clone();
```



### 元素绑定多个事件

​	原生的js中, 可以为同一个对象添加多个不同的事件, 但不能添加多个同一事件.

​	jQuery中, 可以为一个独享添加多个同一个事件.



#### 绑定事件的方法 

​	1.jQuery对象调用事件方法绑定事件

```js
$('#btn').click(function () {});
```

​	2.使用**bind方法**绑定事件

```js
$('#btn').bind('事件名称不带on', function () {});
```

​	3.使用**delegate方法**绑定事件

​	父元素给子元素绑定事件

​	用途 ： 可以为当前不存在的子元素添加事件！

```js
父元素对象.delegate('子元素', '事件名称不带on', function () {});
$('#dv').delegate('p', 'click', function () {});
```

​	委托机制, 利用了事件冒泡(父元素可以接受到子元素发生的事件), 可以再父元素中获得事件对象, 从而判断是哪个子元素 (event.target) 发生了事件.

​	依赖于两个条件: 1. 冒泡事件 2. 事件对象中的 target 属性

​	4.使用**on方法**绑定事件 :

```js
取代bind的用法:
	jQuery对象.on('事件名称不带on', funciton () {})
	jQuery对象.on({'事件名称不带on':function () {}, '事件2':处理函数2})

取代delegate的用法:
	父元素对象.on('事件名称不带on', '子元素选择器', function () {})
```



#### 解绑事件的方法

​	1. 使用on绑定的事件

```js
解除绑定在当前元素上的所有当前事件的处理函数
	元素对象.off("事件名称不带on")
	 可以解绑绑定给自己的事件。使用方法名绑定的事件、解除bind绑定的事件、解除使用on第一种方式绑定的事件。
	 可以解绑当前元素的子元素绑定的事件，通过delegate方法和on的第二种方式给子元素添加的事件，可以被解除
```

​	2. 使用bind绑定的事件

```js
元素对象.unbind("事件名称不带on")
```

​	3. 使用delegate绑定的事件

```js
父元素对象.undelegate("子元素", "事件名称");
```





```js
<div>
	<p></p>
</div>
// 情况1
$("div").click(function(){}) // 无
$("p").click(function(){})  // 有
$("div").off("click");
// 情况2
$("div").click(function(){})    // 无
$("div").delegate("p", "click", function(){})  // 无
$("div").off("click");


给div绑定
$("div").click(function(){})
	$("div").off("click");
	$("div").off()
$("div").bind("click", function(){})
	$("div").unbind("click");
	$("div").off("click");
	$("div").off()
$("div").on("click", function(){})
	$("div").off("click");
	$("div").off()
给p绑定
$("p").click(function(){})
	$("p").off("click");
	// 不可以这么用$("div").off("click")
$("p").bind("click", function(){})
	$("p").unbind("click")
	$("p").off("click")
	// 不可以这么用$("div").off("click")
$("p").on("click", function(){})
	$("p").off("click");
$("div").delegate("p", "click", function(){})
	$("div").undelegate("p", "click")
	$("div").off("click", "p")
	$("div").off("click")
	$("div").off("click", "**")
	$("div").off()
$("div").on("click", "p", function(){})
	$("div").off("click", "p")
	$("div").off("click")
	$("div").off("click", "**")
	$("div").off()
```





### 事件触发的3种方式

```js
// 1.常用方法
	$("#btn1").click();

// 2. trigget()方法
	$("#btn1").trigger("click");  // 触发事件  

// 3.triggerHandler()方法
	$("#btn1").triggerHandler("click");//触发事件

区别:
	第一种和第二种触发事件的方式是相同的,都会触发浏览器默认的事件(光标在文本框中闪烁)
	第三种触发事件的方式不会触发浏览器的默认事件
```



### 事件对象

```js
$(function () {
    $('#dv').on('click', 'input', function (event) {
        event.delegateTarget;  // 调用deletage或on方法为子元素绑定事件的那个父元素
        event.currentTarget;  // 执行事件的元素
        event.target;  // 真正触发事件的元素
    });
});
```



### 事件冒泡

​	元素中有元素, 这些元素都有相同的事件, 一旦最里面的元素的事件触发了, 外面的所有的元素的相同的事件都会被触发

​	例 : 元素A中有一个元素B, A和B都有点击事件, B点击事件触发, A点击事件自动触发

取消事件冒泡

​	jQuery中  return false



each()方法

// jQuery对象就是一个维数组, 其中存的元素就是js对象, each()遍历方法
        each(function (index, element){})  遍历对象
		// index  索引
		// element 当前对象// jQuery对象就是一个维数组, 其中存的元素就是js对象, each()遍历方法
        each(function (index, element){})  遍历对象
		// index  索引
		// element 当前对象

### jQuery插件

​	就是实现一些功能的封装.

​	插件 : js代码, css代码, 页面的结构

**封装自己的插件**:

```js
// changeColor.css
.cls{
    width: 200px;
    height: 100px;
    background-color: pink;
    margin-top: 30px;
    margin-right: 20px;
    float: left;
}

// changeColor.js
// 固定语法, 为$添加一个方法
$.fn.changeBackgroundColor = function (color) {
    $('.cls').css('backgroundColor', color);
}

// index
<script>
        $(function () {
            //点击每个按钮改变每个div的背景颜色
            $("input[type=button]").click(function () {
                $(".cls").changeBackgrounColor($(this).val());
            });
        });
</script>

<body>
<input type="button" value="green"/>
<input type="button" value="red"/>
<input type="button" value="blue"/>
<div id="dv">
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
</div>
</body>

// 插件的使用
首先引入外部的css文件
//代码如下:
// <link rel="stylesheet" href="changeColor.css">
请复制下面的js的代码
// <script src="jquery-1.12.2.js"></script>
请复制下面的js的代码
// <script src="changeColor.js"></script>
请复制下面的代码
// $(function () {
//     //点击每个按钮改变每个div的背景颜色
//     $("input[type=button]").click(function () {
//         $(".cls").changeBackgrounColor($(this).val());
//     });
// });
请复制下面的代码到html中的body标签中
// <input type="button" value="green"/>
//     <input type="button" value="red"/>
//     <input type="button" value="blue"/>
//     <div id="dv">
//     <div class="cls"></div>
//     <div class="cls"></div>
//     <div class="cls"></div>
//     <div class="cls"></div>
//     <div class="cls"></div>
//     </div>
```



### jQueryUI

1. 引入jQueryUI的样式文件
2. 引入jQuery文件
3. 引入jQueryUI的js文件
4. 使用jQueryUI功能

