JavaScript



**ECMAScript - JavaScript的核心** 

定义了JavaScript 的语法规范

JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关

**BOM - 浏览器对象模型**

一套操作浏览器功能的API

通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等 

**DOM - 文档对象模型**

一套操作页面元素的API

DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作



## ECMAScript

javascript 和 jscript遵守ECMAscript.

### 知识补充

#### 计算机

​	最初的目的:运算数据.

​	摩尔定律:计算机的运算性能每隔18个月会翻一倍.

​	最核心的内容是**数据**!

​	编写程序来按照人的思想对数据进行加工处理.

​	本质: 程序操作数据.

**组成:**

​	输入  输出  运算  临时存储  永久存储

​	键盘鼠标  显示器打印机  CPU(中央处理单元)  内存  硬盘



#### JavaScript

​	JavaScript,一种运行在**客户端**的脚本语言.

​	脚本语言：  不需要编译，-运行过程中由js解释器(js引擎）**逐行**来进行解释 并执行



**JavaScript的组成:**

> - **ECMAScript**  是一套JS语言设计标准，描述 JavaScript 语言基本语法和数据类型，以及其它实现标准。
>
> 1995-2003: 第一个版本  3.0版本  JS是ECMAScript标准的具体实现
>
> 2003年: 4.0版本  太激进
>
> 2015年: ECMAScript 5.0  (ECMAScript 2015 , ES5)
>
> 2016年: ECMAScript 6.0  (ES6) 里程碑版本  (阮一峰的ES6)
>
> http://es6.ruanyifeng.com
>
> - **BOM**:  Browser Object Model ,浏览器对象模型,用来操作浏览器.
> - **DOM**:  Document Object Model ,文档对象模型,用来操作HTML页面.



#### 解释型语言和编译型语言

> *计算机不能直接理解任何除机器语言以外的语言*，所以必须要把程序员所写的程序语言翻译成机器语言，计算机才能执行程序。*程序语言翻译成机器语言的工具，被称为编译器*
>
> 编译器翻译的方式有两种：一个是*编译*，另外一个是*解释*。两种方式之间的区别在于*翻译时间点的不同*。
>
> 编译器是在代码执行之前进行编译，生成中间代码文件。
>
> 解释器是在运行时进行及时解释，并立即执行。(当编译器*以解释方式运行的时候*，也称之为*解释器*)



#### JS关键字、保留字、标识符

> - 标识符：就是指开发人员为 变量、属性、函数、参数 取的名字。
>   标识符不能是 `关键字` 或 `保留字`
> - 关键字：是指 JS本身已经使用了，不能再用它们充当变量名啊方法名啊什么的。
>   包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with 等。
> - 保留字：实际上就是预留的“关键字”，意思是现在虽然现在还不是关键字，但是未来可能会成为关键字的，你一样是不能使用它们当变量名或方法名。
>   包括：boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile 等。
> - 注意：如果将保留字用作变量名或函数名，那么除非将来的浏览器实现了该保留字，否则很可能收不到任何错误消息。当浏览器将其实现后，该单词将被看做关键字，如此将出现关键字错误。
> - **name 是 window 的自带全局属性, 值 = '' ,string类型.**



#### 面向对象和面向过程



​	**面向过程**的编程：面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。

​		封装：封装就是把处理数据的所有步骤封装到一个函数或其他结构中，方便代码的调用和管理，方便重用。



​	**面向对象**的编程:  面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。 



​	面向对象和面向过程的**主要区别**就是**数据是单独存储还是与操作存储在一起**。

​	对面向过程而言，数据是独立的。而在面向对象中，对象本身就提供了存储数据的空间（类的数据成员），这样就是函数的参数传递简单多了，而且提供了数据封装后，数据的访问也变可靠了。

\---------------------------------------------------

两句话：

面向过程是一种自顶向下的编程.

面向对象是将事物高度抽象化,自下先建立抽象模型然后再使用模型 .





#### **ES6新增**

块级作用域  使用 let 声明的变量不会进行预解析(变量提升).



#### 知识补充

Unix： 1970发布

​	Minix：

​	Linux：    linus

C语言：1969发布

C++：70年代末

C#： C++++

linux：操作系统1990 1w行代码。

​	2018年9月  2500w行代码。 新提交了4600w行代码，删除了2100万行代码。



### JS书写位置

1.行内js(不推荐使用)

```javascript
<input type="button" value="点我试试" onclick="alert('Hello World')" />  //写在标签内部 
```

2.内部js

```javascript
<head>	
	<javascript>
		//代码书写的位置
	</javascript>
</head>
```

3.外部js(工作中推荐使用)

​	写在外部的js文件中,使用script标签的src属性引入.

```html
<script src="outdoor.js"></script>
```



### 变量

**1.用于存放数据的容器,通过变量名来获取数据,存放的数据可以修改.**

```javascript
//var uName : 声明变量名字,分配内存空间
var uName = "pink老师";

// age = 18 : 把18赋给age这个变量
var age = 18;

// 重新赋值81,18会被覆盖
age = 81;

// 控制台输出uName和age
console.log(uName,age);
```

**2.报错信息**

- 已声明未赋值  undefiend
- 未声明未赋值  报错
- 未声明已赋值  语法宽松,可以使用,但尽量避免

**3.变量命名规范**

- 由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号( $ )组成，如：`var usrAge, num01, _name
- **不能**以数字开头
- **不能**是关键字或保留字
- 变量名**严格区分大小写**
- 建议使用**驼峰命名法**  userName

**4.交换两个变量**

```javascript
		var num1 = 10;
        var num2 = 20;
        console.log('交换前' + num1,num2);
        var temp = num1;
        num1 = num2;
        num2 = temp;
        console.log('交换后' + num1,num2);
```



### 数据类型

数据是有不同类型的,他们的存储和使用方式也不同.

JavaScript属于**弱数据类型**的语言.   

​	Java **强数据类型** 

```java
		int num = 10;  //必须声明数据类型
		float num2 = 1.1; 
```

​	JavaScript数据类型不固定,给什么值就是什么数据类型.    

```javascript
		var num = 10;  //数值类型
		num = "pink";  //文本类型
```



#### 字面量

是一个固定值的表示方法, 从 = 右边看上去就知道它是什么数据类型.

```javascript
		var num = 66;   //  66  数值型的字面量 
```



#### 数据类型

##### Number  数值型

​	1. js只有一种数值型,不区分整数和浮点数

​	2. 不要用浮点数进行计算

​	3. Infinity  正无穷大  (Number.MAX_VAKUE + 1) 

4. NaN   not a number 不是一个数值

```JavaScript
isNaN();  // 返回 不是数值 true| 是数值false
```

##### Boolean  布尔型  

​	True (真) | False (假)

##### String  字符型

​	带有引号的就是字符型.

​	字符型里内容的引号,采用内双外单,外双内单.

​	变量名一定不要加引号.

​	转义字符

> - **\n  换行**
> - \\ \   斜杠\
> - \\ \'   单引号 ' 
> - \\''   双引号
> - **\t   Tab**
> - \b   空格
> - \\r   回车

###### 字符串的长度

```javascript
var str = 'abcdef';
// 输出字符串的长度
console.log(str.length);
```

###### 字符串的拼接

只要有字符型的进行了相加,本质就是相连.

```javascript
var str1 = 'pink老师';
var str2 = '18';
var str3 = '岁';
// 输出 'pink老师18岁'
console.log(str1 + str2 + str3);
```

##### undefined未定义型

```javascript
	var num;   // undefined  声明变量未给值
```



#### 判断数据类型

```
isNaN();  // 返回 不是数值 true| 是数值false
```

```javascript
var num = 10;
console.log(typeof num); // 输出num的
```



#### 数据类型转换

##### 转换为字符型

- **toString()**,可把一个逻辑值转换为字符串，并返回结果.

```javascript
// 布尔类型的 toString() 只会输出 "true" 和 "false"

var num = 10;

console.log(num);  // 输出数值型的  10 

console.log(num.toString());  // 输出字符型的  '10'
```

- **String()**，强制转换,有些值没有toString()，这个时候可以使用String()。

```javascript
var  timer = null;

console.log(String(timer));  //  输出"false"
```

- **加号拼接字符串(重点)**

  当 + 两边 一个是 `字符串类型`，另一个是 `其它类型` 的时候，会先把 `其它类型` 转换成 `字符串` 再进行**字符串拼接**，最后返回字符串.

  ```javascript
  alert(21 + "小白");  // 输出"21小白"
  
  alert(false + "小白");  // 输出"false小白"
  ```

  

##### 转换为数值(重点)

- **parseInt(string)** 
  - 将 数值字符串 转换为 整数数值.

```javascript
// 规则1.永远记住它是取整函数
var numLove = parseInt(18.08); // 18
var numLove = parseInt(18.88); // 18

// 规则2.如果第一个字符不是数字符号或者负号，返回NaN
var numLove = parseInt("aboard211"); // NaN

// 规则3.如果第一个字符是数字，则继续解析直至字符串解析完毕 或者 遇到一个非数字符号为止
var numLove = parseInt("520littlecat"); // 520
```

- **parseFloat(string)** 
  - 将 浮点数值字符串 转成 浮点数值.

```javascript
var num = parseFloat("12.3abc"); // 12.3

//parseFloat函数如果用来转换 整型数值字符串，则也是返回 整型数值
var num = parseFloat("12"); // 12，而不是 12.0
```

- **Number()** 
  - 强制转换函数,要转换的字符串中不可以有字母.
  - 里面如果只要出现非数字字符或者undefined， 则就返回	 NaN
  - 如果该值是空字符串、数字0、或null、false   则返回 0      如果是 true  则返回 1 
- **利用js隐式转换**
  - 利用了js的弱类型的特点，进行算术运算，实现了字符串到数字的类型转换.

```javascript
var   str= '123 ';  // - * /
var   x   =   str-0;  // 输出数值型 123
var   x   =   x*1;   // 输出数值型 123
```

##### 转换为布尔值

- **Boolean()** 

  - 代表 空、否定的值 会被转换为 **false** 有五种  **“ ''、0、NaN、null、undefined**  
  - 非空字符串  非0数字  true 任何对象都会被转换为 true

  ```javascript
  var res = Boolean(''); // false
  res = Boolean(0); // false
  res = Boolean(NaN); // false
  res = Boolean(null); // false
  res = Boolean(undefined); // false
  
  var res2 = Boolean('小白'); // true
  var res2 = Boolean(12); // true
  ```

- **布尔类型的隐式转换**

```js
	if('哈哈' && 12 )  等同于  if(true && true )
```



### 基础输入输出

1.弹出警示框 

```javascript
	alert();
```

2.输出到控制台

```javascript
	console.log();
```

3.提示用户输入框,接收用户输入信息.

​	用户输入的 **任何内容** 都是一个 **字符串**

```javascript
	prompt("提示文字");  // 从键盘接收用户的输入
```



### 运算符

#### 算数运算符

```javascript
var res = 15 + 6;  // + 加  还可以字符串拼接
res = 21 - 15;  // - 减
res = 3 * 5;  // * 乘
res = 10 / 20;  // / 除
res = 9 % 2;  // 取余数(取模),返回除法的余数 9 % 2 = 1 先取余后加减乘除
```



#### 一元运算符

> ​	一些**只需要一个操作数**的运算符称为一元运算符
>
> ​	比如 +15    -15  正负    ! 取反  还有  ++  和   --  

**前置运算(理解)**

- ++num  **前置自增** ：先自加   后返回值 

```
var num = 7;
alert(++num); // 8
alert(num);   // 8
```

**后置运算(重点)**

- num++  **后置自增**：先 返回原值     后 自加 

```javascript
var num = 7;
alert(num++); // 7
alert(num);   // 8
```

**自增自减运算符** **小结**

- `++` 和 `--` 运算符目的可以简化代码的编写，让变量的值 `+ 1` 或者 `- 1`；
- 只能用于变量;
- 单独使用时，运行结果相同；
- 与其他代码联用时，执行结果会不同 
- **后置**：先  原值运算    后 自加     ---先人后己 
- **前置**：先自加  后运算  
- **开发时**，**大多使用后置自增/减，并且代码独占一行**，例如：`num++;` 或者 `num--;`。
- 开发时，和其他代码联用 —— 会降低代码的**可读性**
- 开发的时候，我们更喜欢用 num++



#### 关系(比较)运算符

​	 用来 两个数据 进行比较的运算符，会 返回 一个 布尔值（`true / false`），作为比较运算的结果.

| 运算符名称    | 说明                                           | 案例        | 结果  |
| ------------- | ---------------------------------------------- | ----------- | ----- |
| <             | 小于号                                         | 1 < 2       | true  |
| >             | 大于号                                         | 1 > 2       | false |
| >=            | 大于等于号 (大于或者等于)                      | 2 >= 2      | true  |
| <=            | 小于等于号 (小于或者等于)                      | 3 <= 2      | false |
| ==            | 判等号（会隐式转换）                           | 37 == '37'  | true  |
| !=            | 不等号                                         | 37 != 37    | false |
| ===       !== | 全等于  要求值和 数据类型都一致 (不会隐式转换) | 37 === '37' | false |

**=总结**

| 符号 | 作用 | 用法                                     |
| ---- | ---- | ---------------------------------------- |
| =    | 赋值 | 把右边给左边                             |
| ==   | 判断 | 判断两边值是否相等（注意此时有隐式转换） |
| ===  | 全等 | 判断两边的值和数据类型是否完全相同       |



#### 逻辑运算符

​	用来进行若干个布尔值 运算的 运算符，返回值也是布尔值。

| 逻辑运算符 | 说明                      | 案例           |
| ---------- | ------------------------- | -------------- |
| &&         | "逻辑与"，简称 "与"   and | exp1 && exp2   |
| \|\|       | "逻辑或"，简称 "或"   or  | exp1 \|\| exp2 |
| ！         | "逻辑非"，简称 "非"  not  | ! exp1         |

- **逻辑与 &&**：** 两边都为 `true `才返回 `true `，否则返回 `false`。 

```javascript
var res1 = 2 > 1 && 3 > 1; // 读作： 2 > 1 且 3 > 1
console.log(res1); // true

var res2 = 2 > 1 && 3 < 1; // 读作： 2 > 1 且 3 < 1
console.log(res2); // flase
```

- **逻辑或 ||**：** 两边都为 `false `才返回 `false`     否则都为true.

```javascript
var res1 = 2 > 1 || 3 > 1; // 读作： 2 > 1 或 3 > 1
console.log(res1); // true

var res2 = 2 > 1 || 3 < 1; // 读作： 2 > 1 或 3 < 1
console.log(res2); // true

var res3 = 2 < 1 || 3 < 1; // 读作： 2 < 1 或 3 < 1
console.log(res3); // flase
```

- **逻辑非 !** ：** 也叫作 取反 符。用来取一个布尔值相反的值，如 true 的相反是 false.

```javascript
var isOk = !true;
console.log(isOk); // false
```



#### 赋值运算符

​	用来把数据赋值给变量, 返回值 是 =右边的 .

```js
var age = 10;  // 把10 赋值给变量 age  
```

| 赋值运算符 | 说明                    | 案例                                               |
| ---------- | ----------------------- | -------------------------------------------------- |
| =          | 直接赋值                | var usrName = '我是值';                            |
| +=、-=     | 加、减 一个 数 后在赋值 | var age = 10;   age+=5;  // 15    age  = age + 5   |
| *=、/=、%= | 乘、除、取模 后在赋值   | var age = 2; age*=5; // 10          age  = age * 5 |

```javascript
var age = 10;
age += 5;  // 相当于 age = age + 5;
age -= 5;  // 相当于 age = age - 5;
age *= 10; // 相当于 age = age * 10;
```



#### 运算符优先级

优先级从高到底

```js
1. ()  优先级最高 
2. 一元运算符  ++   --   !
3. 算数运算符  先*  /  %   后 +   -
4. 关系运算符  >   >=   <   <=
5. 相等运算符   ==   !=    ===    !==
6. 逻辑运算符 先&&   后||
7. 赋值运算符

规律：
先一元   后  二元 
先 算数  后 关系
```



### 流程控制

#### 顺序结构

概念： 由上至下的执行代码就是顺序结构。



#### 分支结构

##### if...else...结构

1. **if  语法:**

```js
// 条件成立执行代码，否则什么也不做。
if (条件表达式) {
    // [如果] 条件成立执行的代码语句
}

// 判断年龄进入网吧
var age = prompt('请输入年龄');
if (age >= 18) {
    alert('您的年龄合法,欢迎来到七号网吧上网!');
}
```

2. **if-else 语法:**

```js
// if 如果  else 否则 
// 条件成立执行代码，否则执行另外的代码。
if (条件表达式) {
    // [如果] 条件成立执行的代码
} else {
    // [否则] 执行的代码
}

//判断是否为闰年 能被4整除且不能被100整除 或者 能被400整除
var year = prompt('请输入年份');
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert(year + '年是闰年!');
} else {
    alert(year + '年不是闰年!');
}
```

3. **if-else-if 语法:**

```js
//适合于检查多重条件。
if (条件1表达式) {
    // [如果] 条件1 成立执行的代码
} else if (条件2表达式)  {
    // [否则] [如果] 条件2 成立执行的代码
    // 注释：条件1 不成立，但是条件2 成立
} else if (条件3表达式)  {
    // [否则] [如果] 条件3 成立执行的代码
    // 注释：条件1 2 不成立，但是条件3 成立
} else {
    // 上述条件都不成立执行的代码
}

// 判断学生成绩
var score = prompt('请输入你的成绩');
if (score >= 90) {
    alert('优秀');
} else if (score >= 60) {
    alert('及格');
} else {
    alert('补考吧');
}
```



##### 三元表达式  ?  :**

​	如果表达式1为true ，则整个表达式的结果就是表达式2的**值**，如果表达式false，则整个表达式的结果就是表达式3的值.

```js
var a = 10;
var result = 0;
if(a > 7){
    result = 21;
}else{
    result = 12
}
alert(result); // 21

表达式1 ? 表达式2 : 表达式3

var a = 10;
var result = (a > 7) ? 21 : 12;  // 21
```



##### switch...case...结构

​	使用结果表达式 的值 和 各个 case 中的值 进行相等比较.

​	switch 比较适合有限个值,并且值不连续的情况.

​	if 更适合值是在一个范围内的情况.

```js
switch( 变量 ){ 
    case value1:
        //表达式结果 等于 value1 时 要执行的代码
        break;
    case value2:
        //表达式结果 等于 value2 时 要执行的代码
        break;
    // default 可以省略
    default:
        //表达式结果 不等于任何一个 value 时 要执行的代码
}
```

> 执行顺序：
>
> 1. 先 从变量中 获取一个 `值`，随后 `表达式的值` 会与结构中的 `case 的值` 做比较。
> 2. 如果存在匹配 **全等(===)  即（ 变量值  ===  value 值） ** ，则与该 case 关联的 `代码块` 会被执行，
>
> 并在遇到 `break ` 时停止，整个 switch 代码执行结束。
>
> 3. 如果所有的 `case 的值` 都和 `表达式值` 不匹配，则 执行 `default `里的代码。
> 4. 我们case 后面的值 通常都是一个常量。

#### 循环结构

##### for循环

for循环小括号中的内容,是利用一个变量作为计数器控制循环次数.

for循环大括号的内容,是每次循环要执行的代码.

大括号中可以使用计数器变量的值.

```js
//for 循环一般 用来 根据次数 循环 
for(初始化; 条件表达式; 自增表达式 ){
    //循环体
}
//如：
for(var i = 0; i < 10; i++){
    console.log('i='+i);
}
```

执行顺序 

​	1.初始化

​	2.条件表达式 -> 3.循环体 -> 4.自增表达式 

```js
// 求1-100之间所有偶数的和
var sumNum = 0;
for(var i = 1;i <= 100; i++){
    if(i % 2 == 0){ // 如果 i 取模2 等于0，则 i 为 偶数
        sumNum += i;
    }
}
console.log('1-100之间所有偶数的和 = ' + sumNum);
```



##### 双重 for 循环

```js
for (外循环的初始; 外循环的条件; 外循环的增量) {

for (内循环的初始; 内循环的条件; 内循环的增量) {  

   需执行的代码;

   }

}
```

> 1. 内层循环可以看做外出循环的语句。 
> 2. 内层循环执行的顺序也要遵循for循环的执行书序。 
> 3. 外层循环执行一次，则内层循环要执行全部次数（跑完毕）。

- 使用 `for循环` 打印 `倒` 三角形（9行 * 9列）

```js
var str = '';
// 外层循环控制行数 1-9
for (var i = 1; i <= 9; i++) {
    // 内层循环控制每行的星星数  1:9-i(1) 2:9-i(2)  
    for (var j = 9; j >= i; j--) {
        str += '☆';
    }
    // 内层循环每执行完一次就换行,代表一行
    str += '\n';
}
console.log(str);
```

- 使用 for循环 打印 九九乘法表

```js
var str = '';
// 外层控制行数  1-9
for (var i = 1; i <= 9; i++) {
    // 内层控制列数  1-i  1:1-1 2:1-2 3:1-3
    for (var j = 1; j <= i; j++) {
        str += ( j + '*' + i + '=' + (i*j) + '\t');
    }
    // 每行执行完成后加换行
    str += ('\n');
}
console.log(str);
```



##### while 循环

```js
//条件表达式为 true 时重复执行循环体代码
//条件表达式为 false 退出循环
while (条件表达式) {
    // 循环体代码 
}
```

​       **条件表达式** 的结果是一个 `布尔值` ，为 true 时，执行循环体代码，为 false 时，退出循环，执行后面代码。

- **执行顺序：** 先判断，再执行循环体

  1.先执行 `条件表达式` ，结果为 true，则 执行循环体代码，如果为 false，则退出 循环，进入后面代码执行

  2.然后执行 `循环体代码` ，只要 条件表达式 为真，则会一直执行。

```js
// 在控制台打印 10 遍 'Hi，有空吗？'
var numCount = 1; // 用来记录循环次数
while(numCount <= 10){ // 判断循环的次数是否达到我们的条件
    console.log('Hi,有空吗？'); // 要执行的循环体 业务代码
    numCount++; // 做条件改变，否则 循环会出现【死循环】
}
```

> - while 语句就是**当条件满足**时**重复执行相同的代码**；
> - 无论是循环结构还是分支结构，在执行完成后，都会执行后续代码；
> - 在循环体内部，**需要修改循环条件**，否则会造成**死循环**。



##### do...while 循环

```js
do{
    // 循环体代码 - 条件表达式为 true 时重复执行循环体代码
} while(条件表达式);
```

- **执行顺序** 先执行一次循环体代码，再判断 循环条件

  1.先执行一次 `循环体代码` 

  2.再执行 `条件表达式` ，结果为 true，则 继续执行循环体代码
  ​                                        如果为 false，则退出 循环，进入后面代码执行

```js
// 输出你喜欢我吗？(y/n):"，直到输入y退出，否则继续询问。
do {
   var ask = prompt('你喜欢我吗？ y/n');
} while (ask !== 'y');
alert('我也喜欢你啊');
```

> - do..while 循环和 while 循环非常像，二者经常可以相互替代，但 do..while 的特点是不管条件成不成立，都会执行一次。
> - do...while 语句就是先执行一遍，后面才根据 **条件是否满足** 决定执行次数；
> - 和 while 循环一样，在循环体内部，**需要修改循环条件**，否则会造成**死循环**。



##### continue 跳出本次循环

- **概念：**立即`跳出本次循环`，继续下一次循环（本次循环体 continu 之后的 代码 就都少执行这一次）
- **通俗：** 吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子。



##### break 退出整个循环

- **概念：**理解`跳出整个循环`（循环结束），开始执行 循环后面的代码
- **通俗：** 吃5个包子，吃到第3个吃饱了，就不再吃后面的包子。



### 代码调试

- alert()
- console.log()
- 断点调试

> 断点调试是指自己在程序的某一行设置一个断点，调试时，程序运行到这一行就会停住，然后你可以一步一步往下调试，调试过程中可以看各个变量当前的值，出错的话，调试到出错的代码行即显示错误，停下。

**断点调试步骤**

```javascript
浏览器中按F12-->sources-->找到需要调试的文件-->在程序的某一行设置断点
```

- 调试中的相关操作

```javascript
Watch: 监视，通过watch可以监视变量的值的变化，非常的常用。
F11: 程序单步执行，让程序一行一行的执行，这个时候，观察watch中变量的值的变化。
F8：跳到下一个断点处，如果后面没有断点了，则程序执行结束。
```

tips: ***监视变量，不要监视表达式，因为监视了表达式，那么这个表达式也会执行。***

- 1.先到 console 控制台 tab 页 去看 是不是 有 报错！（JS语法错误）
- 2.如果 没有语法错误，就应该 resource  资源 tab页 去页面js代码中设置断点，并 f11 逐句调试。



### 数组

- 一组有序的数据

#### **创建数组**

​	1. 通过new 方式 创建

```js
    var  数组名  =   new Array() ；
```

​	2. 通过字面量的形式

```js
    var arrStus02 = ['小白','小黑','大黄','瑞奇'];
```

​	3. 数组中可以**存放任意类型**的数据

```js
	var arrStus03 = ['小白',12,true,28.9];
```

- **元素**：数组中每个空间里存放的数据

- **下标 (索引) ：**用来访问数组空间的 **序号** （数组下标从 0 开始）

  数组可以通过 下标 来 访问、设置、修改 **对应下标空间** 里的元素。

  格式： 数组名[下标]

  ```js
   var arrStus = [1,2,3];
   alert(arrStus[1]); // 2
  ```

- **数组.length**   用来访问数组里空间的数量（数组长度）

- **遍历数组所有成员**

  遍历**就是把每个元素从头到尾都访问一次  （类似我们每天早上学生的点名）

  通过for循环下标遍历

```js
 for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
}
```

- **新增数组元素**

  JS 里的数组可以通过直接 访问 下标来实现扩容的目的

  **一定 要用 数组加下标的方式 追加数组元素， 不能直接给数组名赋值， 否则会覆盖掉以前的数据。**

  

#### 数组去重

```js
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
// 声明新的空数组
var newArr = [];
// 空数组的默认的长度为 0 
console.log(newArr.length);

// 定义一个变量 用来计算 新数组的索引号
for (var i = 0; i < arr.length; i++) {
    // 找出 大于 10 的数
    if (arr[i] != 0) {
        // 给新数组
        // 每次存入一个值， newArr长度都会 +1  
        newArr[newArr.length] = arr[i];
    }
}
console.log(newArr);
```



#### 数组反转

```js
var arr = ['red', 'green', 'blue', 'pink', 'purple'];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    // newArr 一定是接受方    arr 是 输送方
    newArr[i] = arr[arr.length - i - 1];
}
console.log(newArr);
```



#### 冒泡排序

```js
   var arr = [5, 4, 3, 2, 1];
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
 console.log(arr);
```



### 函数

#### 声明 

就是 封装了 一段 可被**重复调用执行**的 代码块。 可以实现大量代码的重复使用。

```js
// 带参数的函数声明
function 函数名(形参1,  , 形参3...) { // 可以定义任意多的参数，用 逗号 分隔
  // 函数体
}

// 带参数的函数调用
函数名(实参1, 实参2, 实参3); 
```



#### 参数

**  在函数内部某些值不能固定，只有在调用的时候才能确定这个值**

| **参数** | 定义                                                         |
| -------- | ------------------------------------------------------------ |
| **形参** | **形式上的参数  函数定义的时候 传递的参数  当前并不知道是什么 ** |
| **实参** | **实际的参数  函数调用的时候传递的参数 这个参数我们知道 给形参赋值** |



#### 返回值

** 函数执行完后，可以把执行的结果 通过 return 语法 返回给 调用者**

```js
// 语法：
function 函数名（）{
    return  需要返回的值；  // return后面的值不会被执行
}
// 函数调用
函数名（）;    //   此时 调用 函数就可以得到   函数体内return  后面的值  
```



#### arguments

> JavaScript中，arguments对象是比较特别的一个对象，实际上是当前函数的一个内置属性。也就是说所有函数都内置了一个arguments对象，**arguments对象中存储了传递的所有的实参**。arguments是一个**伪数组**，因此及可以进行遍历

**当我们不确定有多少个参数传递的时候，可以用arguments 来获取**

```js
//求任意个数数字的和

 function sumFun() {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }
console.log(sumFun(1, 3, 5));
console.log(sumFun(2, 4, 6));
```



#### 函数声明的两种方式

1. 函数声明方式

   会在预解析阶段,把函数声明提升到所在作用域的最前面.

   ```js
   // 命名函数   有函数名 为  fn 
   function fn() { ....}
   // 调用  那个地方调用都可以
   fn()  
   ```

   

2. 函数表达式方式

   在预解析阶段,只提升变量声明,不提升变量的赋值.

   ```js
   // 这是 函数表达式 写法   匿名函数后面跟分号结束
   var  fn =  function () { ....  }；
   // 调用的方式  但是这个方式，函数调用必须写到函数体下面
   fn();
   ```



#### 匿名函数	

​	没有名字的函数. **调用**匿名函数时,必须放在**函数声明语句之后** (与普通函数的区别).

​	因为匿名函数声明之后,在预解析时,只会提升用于接收函数体的变量名的声明,不会把函数体赋值给变量名.

```js
// 使用匿名函数表达式创建
// 将 fun () {} 赋值给 变量名
var fun = function () {
	// 函数体
}
// 输出fun会输出整个函数, 
cosole.log(fun);
// 
// fun() 会调用这个函数得到返回值
fun();
```

**匿名函数起名的作用域问题** //一般不会这样干

```js
// 函数表达式声明的函数 , b为函数标识符, 只在函数内部可以访, 并且匿名函数也用非要起个函数名.
var a = function b() {
	console.log(b);
}
a(); // 输出  function b() {console.log(b);}
b(); // b is not defined   b去哪了?

// 以下  正常函数声明, b为函数名, 是可以在函数外部正常访问的
function c() {
    console.log(c);
}
c();
```



#### 自执行函数

​	不需要调用,函数初始化时就会执行的函数.

```js
// 自执行函数的三种写法
! function () {
	console.log('1. 使用！开头，结构清晰，不容易混乱，推荐使用');
}();

(function() {
	console.log('2. 能够将匿名函数与调用的()为一个整体，官方推荐使用');
}())

(function () {
	console.log('3. 无法表明函数与之后的()的整体性，不推荐使用');
})();
```



#### 函数的数据类型

```js
function fn() {
   console.log('11');
 }
 console.log(typeof fn); // 输出 function
```



#### 函数作为参数

```js
function getFn() {
    console.log('我也是一个函数')
 }
 // 声明函数
 function fn(fun) {  // 此时 fun = getFn = function getFn() {console.log('我也是一个函数')}
     // 调用传递过来的 函数
     fun();  // 相当于调用getFn()
}
// 调用函数
fn(getFn);
```



#### 函数作为返回值

```js
function fn() {
    return function() {  // 直接把函数作为返回值返回
        console.log('函数可以作为返回值');
    }
}

var ff = fn();  // fn函数返回了 function(){console.log(''函数可以作为返回值);}

ff();  // ff 里面是 fn 中的匿名函数  输出 '函数可以作为返回值'

```



#### 作用域

**JS中没有块级作用域（在ES5之前）**  if else  for 等大括号

在**ES6 中是有块级作用域的**,使用 **let 声明**,只在**当前大括号中有效**.

- 全局作用域

  供所有代码执行的环境(整个script标签内部)  或者一个独立的js文件中  

- 局部作用域（私有作用域）

  在调用函数的时候，会形成一个执行函数内代码的新环境。

- 全局变量

  - 在全局作用域下声明的变量叫做全局变量（在函数外部定义的变量）
  - 全局变量在代码的任何位置都可以使用
  - 特殊情况， 再函数内 不var 声明 的 变量  也是全局变量 （不建议使用）

- 局部变量

  - 在局部作用域下声明的变量叫做局部变量（在函数内部定义的变量）
  - 局部变量只能在该函数内部使用

- ```js
  var scope = 12; // 全局变量
  function demo() {
      var local = 1; // 局部变量
      console.log(scope) // 12
      console.log(local) // 1
  }
  console.log(scope) // 12
  console.log(local) // 报错 local is not defined
  ```

- 函数的形参实际上就是局部变量

- 局部变量当其所在的代码块被执行时，会被初始化，当代码块运行结束后，就被销毁了，节省内存空间。

- 全局变量因为任何一个地方都可以使用，只有再浏览器关闭才会销毁，比较占内存。



#### 作用域链

​	**变量的一个查找的顺序.**

​	**就近原则, 当前有就用当前作用域逇变量,当前没有,就去上一级找.**

- 只要是代码，就至少有一个作用域
- 写在函数外部的是全局作用域
- 写在函数内部的局部作用域
- 如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域。
- 根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问。 就称作作用域链。



#### 预解析

JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候，分为两步：预解析和代码执行

**在正式执行代码之前, 要对代码进行一次扫描,提升变量和函数,就是预解析.**

**为了解决函数的定义和调用的顺序问题.**

- 预解析过程

  - JavaScript解析器会在全局环境下查找 var、function关键字，**变量只声明不赋值，函数声明不调用。**
  - 预解析只发生在**当前作用域下**   *函数作用域 ( let 大括号)*

- 预解析也叫做变量、函数提升  (**函数的提升会在变量的前面**)

  - 变量提升

    定义变量的时候，变量的**声明会被提升**到当前作用域的最上面，变量的**赋值不会提升**。

  - 函数提升

    JavaScript解析器首先会把当前作用域的**函数声明提前**到整个作用域的最前面

    

- 执行过程代码演示

  - 变量赋值、函数调用、表达式运算等等。

```js
		var a = 1;
        function fn(a) {
            console.log(a);
            var a = 2;
            function a() {}
            console.log(a);
        }
        fn(1);
        // 等价于 
		var a = 1;
        function fn(a) {  // 1
            var a;  // undefined
            function a() {}  // function a() {}
            console.log(a);  // 输出function a() {}
            a = 2;  // 2
            console.log(a);  // 输出 2
        }
        fn(1);
```



```js
		var a = 3;
        function getA() {
            if (false) {
                var a = 1;
                this.a = 2;
            }
            console.log(a);
        }
        getA();
		// 等价于
		var a = 3;
        function getA() {
            var a; // undefined
            if (false) {  // if条件为false,大括号里的代码不执行
                a = 1;
                this.a = 2;  // 如果执行,Wdindow.a = 2;
            }
            console.log(a);  // 输出 undefined
        }
        getA();
```



#### 输出斐波那契数列

```js
		// 斐波那契数列 1 1 2 3 5 8 13 21 34
		// 输出斐波那契数列 前9位
        var a = 1;
        var b = 1;
        var c;
        for (var i = 3; i <= 9; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        console.log(c);

        // 输出斐波那契数列 第n位 的值
		// 递归写法  公式 fn(n-1)+fn(n-2)
        function fn(n) {
            if (n == 1 || n == 2) {
                return 1;
            }
            return fn(n - 1) + fn(n - 2);
        }
        console.log(fn(9));
```



#### 判断质数

```js
		// 质数，只能被1和自身整数的数

        function isZhi(num) {
        
            var count = 0;
            
            // 循环取余  只有因子是两个的才是素数
            for (var i = 1; i <= num; i++ ) {
                if (num % i == 0) {
                    count++;
                }
            }
            
            if(count == 2) {
                return '是素数';
            } else {
                return '不是素数';
            }
        }
        console.log(isZhi(10));
```



### 对象

#### 对象

- 用 `对象` 封装 相关的 `属性` 和 `方法
- 因为可以为对象扩展属性和方法，我们现在 **可以用对象把 一组相关的 变量 和 函数 关联 起来**，访问和作为参数传递起来方便。



##### 创建对象

对象就是一组 无序的 **相关属性和方法** 的 **集合**

注意： `函数` 用来按功能 **封装代码**，`对象` 用来按功能 **封装方法和属性**，都起到复用代码和数据的作用

- ##### **对象字面量 方式创建**

  - 对象字面量：**是封闭在花括号对 `{}` 中的一个对象的0个或多个 `键:值` 无序列表
  - **键：**相当于属性名
  - **值：**相当于属性值，可以是任意类型的值（数值类型、字符串类型、布尔类型，甚至 函数类型）

  ```js
  		var stu1 = {
              name: '杜东轩',
              age: 20,
              gender : '男',
              study : function() {
                  console.log('学习');
              }
          };
  ```

- **new Object 创建对象**

  - 跟我们前面学的  new Array()  一样。
  - Object()   是构造函数   第一个字母大写   
  - new Object()  是调用构造函数   因为构造函数需要new 来调用   同时再内存中创建一个对象

  ```js
  		var stu = new Object();
  		stu.name = '杜东轩';
          stu.age = 20;
          stu.gender = '男';
  		stu.study = function() {
      		console.log('学习');
  		}
  ```



##### 对象调用

- 对象里面的属性调用 :   **对象.属性名 **        这个小点 就理解为 的  
- 对象里面的属性另外调用方式 :   **对象['属性名'] **   注意  方括号里面的属性 必须加 引号   我们后面会用      
- 对象里面的方法调用： **对象.方法名()   **    注意这个方法名字后面一定加括号

```json
console.log(stu.name)  // 调用 名字属性
console.log(stu.age)  // 调用 年龄属性
star.study();  // 调用 study 方法  
```

**函数和方法的区别：**

- 函数是单独存在的，  调用的时候 函数名()  就可以了   
- 方法是在对象里面，  调用的时候，对象.方法名()     



##### 自定义构造函数

> 构造函数 ，是一种特殊的函数。主要用来**在创建对象时初始化对象**， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。

1. 构造函数用于创建某一大类对象，**首字母要大写**。
2. 构造函数要和**new**一起使用才有意义。

```js
		// 声明一个构造函数
		function Student(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.study = function() {
                console.log('学习');
            }
        }
        // 使用构造函数创建对象
		var stu = new Student('杜东轩',20,'男');
        var stu = new Student('杜慧妍',12,'女');
```

**构造函数和对象**

1. Student() 是构造函数,主要是 **初始化对象** 用的. 泛指某一大类.
2. new Student() 是 **创建对象** 用的. 特指某一个.
3. 通过new 关键字创建对象的过程也叫 **对象实例化** .



##### new关键字

```js
		var stu = new Student('杜东轩',20,'男');
        var stu = new Student('杜慧妍',12,'女');
```

new在执行时会做四件事情

```js
1. new会在内存中创建一个新的空对象
2. new 会让this指向这个新的对象
3. 执行构造函数里面的代码  目的：给这个新对象加属性和方法
4. new会返回这个新对象 （所以构造函数里面不需要return）
```



##### this关键字

```
1. 函数在定义的时候this是不确定的，只有在调用的时候才可以确定
2. 一般函数直接执行，内部this指向全局window
3. 函数作为一个对象的方法，被该对象所调用，那么this指向的是该对象（谁调用指向谁）
4. 构造函数中的this  对象的实例  
```

```js
// 1. 普通函数
function fn() {
    console.log(this); // this 指向 window
 }
fn();
 // 2 对象方法
var obj = {
    name: 'zs',
    dance: function() {
         console.log(this);
         that = this;
	}
}
obj.dance(); //  this 指向 obj (对象)
console.log(that === obj); // true
// 3 构造函数
function Fn() {
    this.age = '18';
    console.log(this)
    self = this;
}
var demo = new Fn(); // this  指向 demo (构造函数当前所创建的对象)
console.log(self === demo); // true
```



```js
		// 面试题
        var x = 3;
        var foo = {
            x: 2,
            baz: {
                x: 1,
                bar: function () {
                    return this.x;
                }
            }
        }
        var go = foo.baz.bar;
        // 相当于
        var go = function () {
                // go是普通函数, this指向window   window.x = 3
                    return this.x;  
                }
        console.log(go()); // 3
        // 对象方法里的this  指向其对象  baz.x = 1
        console.log(foo.baz.bar()); // 1 
```



##### 遍历对象的属性

> for...in 语句用于对数组或者对象的属性进行循环操作。

```js
for (变量 in 对象名字) {
    在此执行代码
}
// 创建一个对象
var stu = {
            name: '杜东轩',
            age: 20,
            gender : '男'
        };
// 遍历这个对象中的属性和方法
for (var k in stu) {
        console.log(k);
        console.log(stu1[k]);
		}
```



##### 遍历 JSON格式

**JSON**(JavaScript Object Notation) 是一种轻量级的数据交换格式。 易于人阅读和编写。

1. JSON 数据的书写格式是：名称/值对。
2. 里面的属性和值**都要**用 **双引号** 括起来

```js
		// 创建JSON格式的数据
		var json = {
            "name" : "杜东轩",
            "age" : 20,
            "gender" : "男"
        };
        // 遍历JSON格式的数据
        for (var k in json) {
            console.log(k);
            console.log(json[k]);
        }
```



// 查看对象中的属性和值

console.dir(obj);



#### 内置对象

##### Math对象

**Math** 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。

###### Math常用方法

```js
Math.PI						// 圆周率
Math.floor() 	              // 向下取整
Math.ceil()                   // 向上取整
Math.round()				// 四舍五入版 就近取整   注意 -3.5   结果是  -3 
Math.abs()					// 绝对值
Math.max()/Math.min()		 // 求最大和最小值
Math.sin()/Math.cos()		 // 正弦/余弦
Math.pow()/Math.sqrt()	 // 求指数次幂/求平方根
```



###### Math.random 生成随机数

随机返回一个小数 ，  取值范围 是  范围**[0，1)**        左闭右开     0  <= x  < 1   

```
console.log(Math.random()); // 0.40645855054029756
```



- 求10-20（包含10和20）之间的随机整数

```
function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandom(10, 20))
```



- 随机生成颜色RGB

```js
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRGB(min, max) {
    var c1 = getRandom(min, max);
    var c2 = getRandom(min, max);
    var c3 = getRandom(min, max);
    return 'rgb(' + c1 + ', ' + c2 + ', ' + c3 + ')';
}
console.log(getRGB(0, 255));
```



- 随机生成十六进制颜色

```js
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getColor() {
	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	var str = '#';
	for (var i = 0; i < 6; i++) {
    	str += arr[getRandom(0, 15)];
	}
	return str;
}
console.log(getColor());
```



- 利用对象 模拟 max  和  min  

```js
var myMath = {
    PI: 3.141592653,
    max: function() {
        var max = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function() {
        var min = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            if (min > arguments[i]) {
                min = arguments[i];
            }
        }
        return min;
    }
};
console.log(myMath.max(1, 6, 8, 9));
console.log(myMath.min(1, 6, 8, 9));
```



##### Date对象

###### Date() 的使用

```js
// 创建日起对象,获取当前时间
var now = new Date();
console.log(now);	// 返回 Fri Mar 29 2019 13:12:16 GMT+0800 (中国标准时间)

Date构造函数的参数
// 括号里面时间 ，就返回 参数里面的时间
日期格式字符串 '2015-5-1'	 
new Date('2015-5-1')
new Date('2015/5/1') 
```

- 如果Date()不写参数，就返回当前时间
- 如果Date()里面写参数，就返回 括号里面输入的时间



###### 获取日期的毫秒形式

​	Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

```js
// 创建一个日期对象
var now = new Date();
// 1. valueOf()
console.log(date.valueOf());

// 2. getTime()
console.log(date.getTime());

// 3. + new Date()
var now = + new Date();  // new Date()返回对象, + new Date() 返回1970年起的毫秒数

// 4. HTML5中提供的方法，有兼容性问题
var now = Date.now();
```



###### 日期格式化方法

- 获取日期指定部分

| 方法名        | 说明                                           | 代码               |
| ------------- | ---------------------------------------------- | ------------------ |
| getFullYear() | 获取当年                                       | dObj.getFullYear() |
| getMonth()    | 获取当月（0-11）使用时 +1                      | dObj.getMonth()    |
| getDate()     | 获取当天日期                                   | dObj.getDate()     |
| getDay()      | 获取星期几 （周日0 到周六6） // 使用时利用数组 | dObj.getDay()      |
| getHours()    | 获取当前小时                                   | dObj.getHours()    |
| getMinutes()  | 获取当前分钟                                   | dObj.getMinutes()  |
| getSeconds()  | 获取当前秒钟                                   | dObj.getSeconds()  |

注意 月份 和星期  取值范围是从  0开始的。



- 2019年3月24日 星期二     请写出这个格式

```js
	function getMyDate() {
    	// 创建日起对象,声明存储年月日的变量
        var now = new Date();
        var year, month, day, zhou;
    
        year = now.getFullYear();
        month = now.getMonth() + 1;  // 月份从0开始 需要 +1
        day = now.getDate();
    
        var zhouArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        zhou = zhouArr[now.getDay()];  // 星期数从0开始
        return  year + '年' + month + '月' + day + '日 ' + zhou;
	}

    console.log(getMyDate());  // 输出 2019年3月29日 星期五
```



- 格式化日期对象，HH:mm:ss 的形式   比如  00:10:45

```js
function getTimer() {
    var date = new Date();
    var h, m, s;
    
    h = date.getHours();
    m = date.getMinutes();
    s = date.getMinutes();
	// 如果时间小于 10 , 在前面补一个 0
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    return h + ':' + m + ':' + s;
}
console.log(getTimer());
```



- 倒计时效果

```js
function getCountTime(endTime) {
            var d, h, m, s;
            var countTime = parseInt((new Date(endTime) - new Date()) / 1000);

            d = parseInt(countTime / 60 / 60 / 24);  // 天数
            d = d < 9 ? '0' + d : d;
            h = parseInt(countTime / 60 / 60 % 24);  // 小时数
            h = h < 9 ? '0' + h : h;
            m = parseInt(countTime / 60 % 60);  // 分钟数
            m = m < 9 ? '0' + m : m;
            s = parseInt(countTime % 60);   // 秒数
            s = s < 9 ? '0' + s : s;
            
            return '还剩下' + d + '天' + h + '时' + m + '分' + s + '秒';
        }

        console.log(getCountTime('2019-3-30 8:00'));
```



##### 基本包装类型

​	为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：String/Number/Boolean

​	基本包装类型就是 **把简单数据类型包装成为复杂数据类型**。 这样 基本数据类型就**有了属性和方法**.

```js
// 
var str = 'andy';
console.log(str.length);
// 按道理 基本数据类型 是 没有属性和方法的 对象才有属性和方法的
// 这个原因是因为， js 会把 基本数据类型包装为复杂数据类型

//  等同于如下代码

// 1.生成临时变量 把简单类型包装为复杂数据类型
var temp = new String('andy');
// 2. 赋值给 我们声明的 字符变量
str = temp;
// 3. 销毁给临时变量
temp = null;
```



##### String对象

###### 字符串的不可变性

​	指的是里面的值不可变, 看上去可以改变内容，其实只是地址变了，新开辟了一个内存空间把新地址赋值给变量。

```js
var str = 'abc';
str = 'hello';
// 当重新给str赋值的时候，常量'abc'不会被修改，依然在内存中
// 重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
// 由于字符串的不可变，在大量拼接字符串的时候会有效率问题
var str = '';
for (var i = 0; i < 100000; i++) {
    str += i;
}
console.log(str); // 这个结果需要花费大量时间 来 显示 因为需要不断的开辟新的空间
```



###### 创建字符串对象

```js
var str = 'andy';
console.log(str); // 看不到常见的属性和方法
var str1 = new String('andy');
console.log(str1); // 可以看到常见的属性和方法
// 但是字符串经过基本包装类， 是可以使用 常见的属性和方法
```



字符串对象的常用方法

​	字符串所有的方法，都不会修改字符串本身(**字符串是不可变的**)，操作完成会返回一个新的字符串.



###### 根据位置获取字符

| 方法名            | 说明                                      | 使用                           |
| ----------------- | ----------------------------------------- | ------------------------------ |
| charAt(index)     | 返回指定位置的字符(index 字符串的索引号)  | str.charAt(0)                  |
| charCodeAt(index) | 获取指定位置处字符的ASCII码 (index索引号) | str.charCodeAt(0)              |
| str[index]        | 获取指定位置处字符                        | HTML5，IE8+支持 和charAt()等效 |

```js
var str = 'andy';
console.log(str.charAt(0));  // a

// 可以遍历的方法 得到所有的字符串
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
```



###### 字符串拼接截取方法

| 方法名                    | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| concat(str1,str2,str3...) | concat() 方法用于**连接**两个或多个字符串。拼接字符串，等效于+，+更常用 |
| substr(start,length)      | **截取字符串**  从start位置开始（索引号） ， length  取的个数   重点记住这个 |
| slice(start, end)         | 从start位置开始，截取到end位置，end取不到 (他们俩都是索引号) |
| substring(start, end)     | 从start位置开始，截取到end位置，end取不到   基本和slice 相同 但是不接受负值 |

```js
var str1 = 'andy';
var str2 = 'red';
console.log(str1.concat(str2));  // 输出 andyred

var s = "我爱中华人民共和国";
s = s.substr(2,2);  // 从索引第2个开始截取2个字符
console.log(s);  // 输出 '中华'
```



###### 获取字符串位置方法

| 方法名                              | 说明                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| indexOf('要查找的字符', 开始的位置) | 返回指定内容在元字符串中的位置， 如果找不到就返回 -1，开始的位置是index 索引号 |
| lastIndexOf()                       | 从后往前找，只找第一个匹配的                                 |

"abcoefoxyozzopp"查找字符串中所有o出现的位置

```js
var str = 'abcoefoxyozzopp';
// 因为里面 index 要加1 所以这里是 -1
var index = -1;
do {
    // 这里判断是否能取到 o
    index = str.indexOf('o', index + 1);
    // 如果不是-1 就返回这个位置
    if (index != -1) {
        console.log(index);
    }
} while (index !== -1)
```



###### replace() 替换

​	replace(被替换的字符串， 要替换为的字符串)；

```js
// 把字符串中所有的 o 替换成 ! 
var s = 'abcoefoxyozzopp';
while (s.indexOf('o') !== -1) {
    s = s.replace('o', '!');
}
console.log(s);
```



###### 转换大小写

toUpperCase() 	//转换大写
toLowerCase() 	//转换小写

```js
var str = 'ANDY';
console.log(str.toLowerCase()); // andy
var str = 'andy';
console.log(str.toUpperCase()); // ANDY
```



###### split 切割字符串

​	注意，切割完毕之后，返回的是一个新数组

```js
var str = 'a,b,c,d';
console.log(str.split(',')); //返回的是一个数组 [a, b, c, d]
```



##### Array对象

数组常用方法

​	push()、shift()、unshift()、reverse()、sort()、splice()、indexOf()

###### 数组添加删除方法

| 方法名            | 说明                                                | 返回值               |
| ----------------- | --------------------------------------------------- | -------------------- |
| push(参数1....)   | 修改原数组，末尾添加一个或多个元素                  | 并返回新的长度       |
| pop()             | 删除 数组的最后一个元素，把数组长度减 1 无参数      | 返回它删除的元素的值 |
| unshift(参数1...) | 向数组的开头添加一个或更多元素                      | 并返回新的长度       |
| shift()           | 把数组的第一个元素从其中删除，把数组长度减 1 无参数 | 并返回第一个元素的值 |

```js
// 工资的数组[1500, 1200, 2000, 2100, 1800],把工资超过2000的删除

var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
        newArr.push(arr[i]);  // 在末尾压入一个元素
    }
}
console.log(newArr);
```



###### 数组排序方法

| 方法名    | 说明                        | 是否修改原数组         |
| --------- | --------------------------- | ---------------------- |
| reverse() | 颠倒数组中元素的顺序,无参数 | 该方法会改变原来的数组 |
| sort()    | 对数组的元素进行排序        | 该方法会改变原来的数组 |



```js
// reverse() 反转数组
var arr = ['red', 'andy'];
console.log(arr.reverse()); // 返回翻转之后的数组
console.log(arr); // 原先数组也被修改

// 反转数组函数实现
function reverseArr(arr) {
 	var newArr = [];
 	for (var i = arr.length; i >= 0;i--) {
    	   newArr[newArr.length] = arr[i];
 	}
 	return newArr;
 }
console.log(reverseArr(['a', 'b', 'c']));
```



sort  如果调用该方法时没有使用参数，按照字符编码的顺序进行排序。 

```js
var arr = [1, 64, 9, 6];
arr.sort(function(a, b) {
    return a - b;  // 升序
    // return b - a;  // 降序
});
console.log(arr);


```



```js
// 模拟 Sort() 方法
function mySort(arr, f) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
		
			var x = f(arr[j], arr[j + 1]);
            // 当x大于0时，说明第一个参数比第二个参数大
            // 当x等于0时，说明相等
            // 当x小于0时，说明第一个参数比第二个参数小

            if (x > 0) { // 排序中最关键的一句话，判断谁先谁后
            	var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
         }
    }
    return arr;
 }

// 比较数值大小排序
var arr = [5, 4, 3, 2, 1];
function numberSort(a, b) {
	return a - b;
}
mySort(arr, numberSort);
console.log(arr);

// 比较字符串长度排序
var arr1 = ["pink", "abc", "po", "push1"];
function stringLengthSort(a, b) {
	return a.length - b.length;
}
mySort(arr1, stringLengthSort);
console.log(arr1);

// 比较 stu对象 的年龄 排序
var stu1 = new Student('zs', 20);
var stu2 = new Student('ls', 18);
var stu3 = new Student('ww', 30);
var arr2 = [stu1, stu2, stu3];
function Student(name, age) {
	this.name = name;
	this.age = age;
}
mySort(arr2, studentAgeSort);
console.log(arr2);
```



###### 数组拼接截取方法

| 方法名   | 说明                                  | 返回值                                         |
| -------- | ------------------------------------- | ---------------------------------------------- |
| concat() | 连接两个或多个数组                    | 返回一个新的数组                               |
| slice()  | 数组截取slice(begin, end)             | 返回被截取项目的新数组                         |
| splice() | 数组删除splice(第几个开始,要删除个数) | 返回被删除项目的新数组  注意，这个会影响原数组 |



###### 清空数组的三个方法

```js
// 1. 赋一个空数组  
arr = [];

// 2. 数组长度 = 0 
arr.length = 0;

// 3. 从 0 开始删除数组 , arr.length 可以不写
arr.splice(0, arr.length);
```



###### 数组位置方法

| 方法名        | 说明               | 返回值                 |
| ------------- | ------------------ | ---------------------- |
| indexOf()     | 连接两个或多个数组 | 返回一个新的数组       |
| lastIndexOf() | 如果没找到返回-1   | 返回被截取项目的新数组 |

**数组去重**

```js
var arr = ['red', 'green', 'blue', 'pink','red'];
// 判断数组中的元素在新数组中有没有出现过,有就添加,否则不添加
function deleteRepeat(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) == -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(deleteRepeat(arr));
```



###### join连接成字符串

| 方法名         | 说明                                         | 返回值         |
| -------------- | -------------------------------------------- | -------------- |
| join('分隔符') | 方法用于把数组中的所有元素转换为一个字符串。 | 返回一个字符串 |

```js
var arr = ['red', 'green', 'blue', 'pink'];
console.log(arr.join()); // 跟toString() 一样， 转换为字符串
console.log(arr.join('-')); //red-green-blue-pink
```



###### filter迭代方法

| 方法名   | 说明             | 返回值 |
| -------- | ---------------- | ------ |
| filter() | 按照条件筛选数组 |        |

```js
语法 : arr.filter(callback[, thisArg])
```

```js
// 使用 filter 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。
function isBigEnough(element) {
  return element >= 10;
}
var arr = [12, 5, 8, 130, 44];
var filtered = arr.filter(isBigEnough);
// filtered is [12, 130, 44]
```



**综合案例 分割字符串**

var url = 'http://www.itheima.com/login?name=zs&age=18';

```js
function getParams(url) {
    // 1. 首先把 网址分为2部分  用 ? 分割 
    // 2. 得到 ？+ 1 的索引位置
    var index = url.indexOf('?') + 1;
    // 3. 得到 ？ 后面的字符串
    var params = url.substr(index);
    console.log(params); // name=zs&age=18
    // 4. 把 得到 这串字符 继续用 & 分隔开
    var arr = params.split('&');
    // console.log(arr);
    var o = {};
    // 5. 把 数组里面的每一项，继续用 = 分割
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        // console.log(newArr);
        // 完成赋值 操作
        o[newArr[0]] = newArr[1];
    }
    return o;
}
console.log(getParams(url));
```



#### 简单类型和复杂类型

> 简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型
>
> 值类型：简单数据类型/基本数据类型，在存储时，变量中存储的是值本身，因此叫做值类型。
>
> 引用类型：复杂数据类型，在存储是，变量中存储的仅仅是地址（引用），因此叫做引用数据类型。



##### 堆 和 栈

堆栈空间分配区别：
　　1、栈（操作系统）：由操作系统自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈；
　　2、堆（操作系统）： 存储复杂类型(对象)，一般由程序员分配释放， 若程序员不释放，由垃圾回收机制回收。



##### 值类型内存分配

- 值类型（简单数据类型）： string ，number，boolean，undefined，null
- **值类型变量** 的 数据 直接存放在变量（栈空间）中



##### 引用类型内存分配

- 引用类型（复杂数据类型）：通过 new 关键字创建的对象（系统对象、自定义对象）
- **引用类型变量**（栈空间）里存放的是**地址**，真正的对象实例存放在堆空间中
- 我们通过变量 usrObj 访问 Object对象实例 里的内容时，实际是通过 栈空间里存放的堆地址来找到对象实例，再调用对象实例里的成员。



##### 值类型传参

```js
function fn(a) {
    a++;
    console.log(a);  // 11
}
var x = 10;
fn(x);
console.log(x)；  // 10
```

- 结论：函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值 复制 了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量



##### 引用类型传参

```js
function Person(name) {
  this.name = name;
}
function f1(x) {
  x.name = "ls";
}
var p = new Person("zs");
console.log(p.name);  // 'zs'
f1(p);
console.log(p.name);  // 'ls'
```

- 结论：函数的形参也可以看做是一个变量，当我们把 引用类型变量 传给 形参时，其实是把 变量在栈空间里保存的 堆地址 复制给了 形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象

