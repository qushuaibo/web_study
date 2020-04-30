## Echarts基础概念

### echarts实例

- 一个网页可以创建多个实例
- 用option进行描述
- 准备一个DOM节点

### series

​    系列(series)是常见的名词，在echarts里，系列是指：一组数值以及·他们映射成的图。

​    一个系列至少包含：

- 一组数值

-  图表类型 series.type

-  以及其他的关于这些数据如何映射成图的参数

​    **echarts里系列的类型**

​      line 折线图

​      bar 柱状图

​      pie 饼图

​      scatter 散点图

​      graph  关系图

​      tree  树图

​      。。。

​    一个系列可以声明多个系列类型

​    系列的数据是从dataset中抽取的

### 组件

​    echarts中各种内容被抽象为组件

   ![1587284389714](D:\software\Typora\all_pic\1587284389714.png)

  ![1587284410508](D:\software\Typora\all_pic\1587284410508.png)

### option

​	option表述了：数据、数据如何映射为图形、交互行为

可以直接给出数据

![1587284558315](D:\software\Typora\all_pic\1587284558315.png)

也可以从dataset中抽取数据

![1587284565582](D:\software\Typora\all_pic\1587284565582.png)

###  组件定位

​    基于top/right/down/left/width/height 类似于css的绝对定位

​    position:absolute    

​    \- 例如 bottom：54 表示距离echarts容器底边界54个像素

​    \- 或者 基于百分比 例如 right：'20%' 表示距离echarts容器

​      右边界距离是echarts容器的20%

![1587284577901](D:\software\Typora\all_pic\1587284577901.png)

### 坐标系

支持： [直角坐标系](https://www.echartsjs.com/zh/option.html#grid)、[极坐标系](https://www.echartsjs.com/zh/option.html#polar)、[地理坐标系（GEO）](https://www.echartsjs.com/zh/option.html#geo)、[单轴坐标系](https://www.echartsjs.com/zh/option.html#singleAxis)、[日历坐标系](https://www.echartsjs.com/zh/option.html#calendar) 等 

![1587284715030](D:\software\Typora\all_pic\1587284715030.png)

![1587284760893](D:\software\Typora\all_pic\1587284760893.png)

## 个性化图表样式

