/* 
    传入id即可
    扩展性强
 */
function Drag(id) {
    this.oDiv = document.getElementById(id);
    var _this = this;
    this.oDiv.onmousedown = function (ev) {
        _this.funcDown(ev);
    };
    document.onmouseup = this.funcUp;
};
/*
    改造
        不能有函数嵌套
        可以有全局变量

    面向过程 =》 面向对象
        1、window.onload = 构造函数
        2、全局变量 =构造函数的属性
        3、全局函数 = 构造函数的方法
     */
Drag.prototype.funcDown = function (ev) {
    var e = ev || window.event;
    // 可以直接得到鼠标和节点的相对位置
    // alert(e.offsetX+","+e.offsetY);
    this.offsetX = e.clientX - this.oDiv.offsetLeft;
    this.offsetY = e.clientY - this.oDiv.offsetTop;
    var _this = this;
    document.onmousemove = function (ev) {
        _this.funcMove(ev);
    }
}
Drag.prototype.funcMove = function (ev) {
    var e = ev || window.event;
    this.oDiv.style.left = e.clientX - this.offsetX + "px";
    this.oDiv.style.top = e.clientY - this.offsetX + "px";
}
Drag.prototype.funcUp = function () {
    document.onmousemove = null;
}
