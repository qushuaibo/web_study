## 子代操作符

```html
>
     div>div>p
结果

<div>
    <div>
        <p></p>
    </div>
</div>

```

## 兄弟操作符

```html
+
    div>div+p

 <div>
     <div></div>
     <p></p>
 </div>
```

## 返回上一级操作符

```html
^
	div>div+p^div
    
  <div>
      <div></div>
      <p></p>
  </div>
  <div></div>
```

## 乘法操作符

```html
*
	ul>li*5

<ul>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
</ul>
```



## 分组操作符

```html
()
	html>(head>title+meta+script)+body

<html>
<head>
    <title></title>
    <meta >
        <script></script>
</head>
<body>
    
</body>
</html>
```



## 属性操作符

```html
ID和class
	    div#header>p.new*3

 <div id="header">
     <p class="new"></p>
     <p class="new"></p>
     <p class="new"></p>
 </div>
```



## 定制属性

```html
[]
	a[target="" title="hello world"*3]

  <a href="" target="" title="hello world"></a>
  <a href="" target="" title="hello world"></a>
  <a href="" target="" title="hello world"></a>
```



## 数值操作

```html
$
      div>ul>li.item_$*3
      div>ul>li.item_$@4*2

   <div>
       <ul>
           <li class="item_1"></li>
           <li class="item_2"></li>
           <li class="item_3"></li>
       </ul>
   </div>
   <div>
       <ul>
           <li class="item_4"></li>
           <li class="item_5"></li>
       </ul>
   </div>
```



##     文本操作符

```html
{}
	    div.news>p{hello world!}

    <div class="news">
        <p>hello world!</p>
    </div>
```

