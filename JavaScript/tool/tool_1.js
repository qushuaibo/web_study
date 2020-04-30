/*
 * @Descripttion: test
 * @Author: jushuaibo
 * @Date: 2020-03-30 19:56:19
 * @LastEditors: qushuaibo
 * @LastEditTime: 2020-04-28 07:45:09
 */
/* ------------------------------------------------------- */
/* -----------------------冒泡排序------------------------- */
/* ------------------------------------------------------- */
function bubbleSortAsc(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        // 每一轮比较的次数
        for (var j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;

}
/* ------------------------------------------------------- */
/* -----------------------冒泡排序------------------------- */
/* ------------------------------------------------------- */
function bubbleSortDesc(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        // 每一轮比较的次数
        for (var j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] < arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;

}
/* ------------------------------------------------------- */
/* ---------------------选择排序--------------------------- */
/* ------------------------------------------------------- */
function changeSortAsc() {
    for (var i = 0; i < arr.length - 1; i++) {
        // 被比较的数
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
/* ------------------------------------------------------- */
/* -----------------------选择排序------------------------- */
/* ------------------------------------------------------- */
function changeSortDesc() {
    for (var i = 0; i < arr.length - 1; i++) {
        // 被比较的数
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
/* ------------------------------------------------------- */
/* ----------------------随机生成数字---------------------- */
/* ------------------------------------------------------- */
function number(n) {
    var arr = []; // 存储数字
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 10);
        arr.push(num);
    }
    return arr.join("");
}
/* ------------------------------------------------------- */
/* -------------------随机生成数字字母--------------------- */
/* ------------------------------------------------------- */
function testCode(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 123);
        if (num >= 0 && num <= 9) {
            arr.push(num);
        }
        else if (num >= 97 && num <= 122 || num >= 65 && num <= 90) {
            arr.push(String.fromCharCode(num));
        }
        else {
            i--;
        }
    }
    return arr.join("");
}
/* ------------------------------------------------------- */
/* ------------------------自定义日期格式-------------------- */
/* ------------------------------------------------------- */
function showTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;  // 0~11
    var day = d.getDate();

    var week = numOfChinese(d.getDay());  // 0 是周日

    var hour = doubleNum(d.getHours());
    var min = doubleNum(d.getMinutes());
    var sec = doubleNum(d.getSeconds());

    var str = year + "年" + month + "月" + day + "日" + "  " + "星期" + week + "  " +
        hour + ":" + min + ":" + sec;
    return str;
}
/* ------------------------------------------------------- */
/* ------------------------数字转中文-------------------- */
/* ------------------------------------------------------- */
function numOfChinese(num) {
    var arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num];
}
/* ------------------------------------------------------- */
/* -------------------将时间按两位数显示------------------- */
/* ------------------------------------------------------- */
function doubleNum(n) {
    if (n < 10) {
        return "0" + n;
    }
    else {
        return n;
    }
}
/* ------------------------------------------------------- */
/* ------------------跨浏览器兼容获取当前样式---------------- */
/* ------------------------------------------------------- */
function getStyle(node, cssStyle) {
    // 三目运算符
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}

/* ------------------------------------------------------- */
/* ---------------ie8以下的浏览器获取指定tagName------------ */
/* ------------------------------------------------------- */

function elementsByClassName(node, classStr) {
    //1、获取node这个节点下所有的子节点
    var nodes = node.getElementsByTagName("*");
    var arr = []; // 存放符合条件的节点
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].className == classStr) {
            arr.push(nodes[i]);
        }
    }
    return arr;
}
/* ------------------------------------------------------- */
/* ---------------------随机产生一个颜色------------------- */
/* ------------------------------------------------------- */

function randomColor() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var str = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
    return str;
}
/* ------------------------------------------------------- */
/* --------------- 封装一个跨浏览器兼容的事件冒泡---------- */
/* ------------------------------------------------------- */
function stopBubble(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
}
/* ------------------------------------------------------- */
/* -----------------------拖拽函数-------------------------- */
/* ------------------------------------------------------- */
function limitdrag(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event;
        // 记录鼠标按下的位置和拖拽物体的相对距离
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;
        // 保持相对距离 
        document.onmousemove = function (ev) {
            var e = ev || window.event;
            var l = e.clientX - offsetX;
            var t = e.clientY - offsetY;

            // 限制出界
            if (l <= 0) {
                l = 0;
            }
            var windowWidth = document.documentElement.clientWidth ||
                document.body.clientWidth;
            if (l >= windowWidth - node.offsetWidth) {
                l = windowWidth - node.offsetWidth;
            }

            if (t <= 0) {
                t = 0;
            }
            var windowHeight = document.documentElement.clientHeight ||
                document.body.clientHeight;

            if (t >= windowHeight - node.offsetHeight) {
                t = windowHeight - node.offsetHeight;
            }
            node.style.left = l + "px";
            node.style.top = t + "px";
        }
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}
/* ------------------------------------------------------- */
/* -----------------------ajax封装-------------------------- */
/* ------------------------------------------------------- */
function $ajax({ method = "get", url, data, success, error }) {
    // 声明ajax
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (error) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // url拼接函数
    function querystring(obj) {
        var str = "";
        for (var attr in obj) {
            str += attr + "=" + obj[attr] + "&";
        }
        return str.substring(0, str.length - 1);

    }
    //判断数据是否存在
    if (data) {
        data = querystring(data);
    }


    // 如果有数据 并且是get的方法设置url 
    if (method == "get" && data) {
        url += "?" + data;
    }

    // open 
    xhr.open(method, url, true);

    // 如果是get执行send
    // 如果是post 设置请求格式 并且设置send(data)
    if (method == "get") {
        xhr.send();
    } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.send(data);
    }

    //等待数响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                /* 
                    如何去处理数据不确定
                    回调函数
                 */
                if (success) {
                    success(xhr.responseText);
                }
            } else {
                if (error) {
                    error("Error:" + xhr.status);
                }
            }
        }
    }
}

/* ------------------------------------------------------- */
/* -----------------------占位符-------------------------- */
/* ------------------------------------------------------- */
String.prototype.format = function() {
 if(arguments.length == 0) return this;
 var param = arguments[0];
 var s = this;
 if(typeof(param) == 'object') {
  for(var key in param)
   s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
  return s;
 } else {
  for(var i = 0; i < arguments.length; i++)
   s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  return s;
 }
}