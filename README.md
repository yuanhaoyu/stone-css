#Stone
---
Stone 项目包括(JS/CSS)2个部分

stone.js
>这里收录了一些我常用的JS函数，以及算法学习中的算法

stone.css
>这里收集了我常用的css属性和搭配

使用
>将你所需的文件直接引入你的项目即可

>【详细可查看下面的说明文档】

---

## stone.js

 * use S start stone.js
 * you can use [S.property] to use it！
 * -------
 * version: 0.1
 * getUrl(paramName): 获取url中指定paramName的值
 * sentry(des,arr): 哨兵模式的顺序表查找
 * binarySearch(des,arr): 折半查找
 * bubbleSort(arr): 冒泡排序
 * selectSort(arr): 简单选择排序
 * quickSort(arr): 快速排序
 * swap(arr,a,b): 交换数组的a,b的值
 * time{
 *  getSimpleDate(): 获取GMT时间
 *  getWeekday(): 获取weekday
 *  getYear():  获取年
 *  getMonth(): 获取月
 *  getDay():   获取日
 *  getHour():  获取小时
 *  getMin():   获取分钟
 *  getSec():   获取秒
 *  }



---

## stone.css

1. margin/padding 强制为0
``` 
.m0 / .p0
```
2. margin-left/right/top/bottom | padding-left/right/top/bottom 强制为0
```
.ml0/.mr0/.mt0/.mb0 | .pl0/.pr0/.pt0/.pb0
```
3. 左/右浮动
```
.l/.r
```
4. 清除浮动
```
.cl
```
5. 文字超出省略
```
.omit
```
6. 文字居左/居右/居中
```
.tl/.tr/.tc
```
7. 按钮样式（基础）
```
.S_btn  : 简写=> .Sb
```
8. 按钮样式扩展 （要基于基础的按钮样式）
```
.S_btn_success  : 简写=> .Sbs  【用于关于成功】
.S_btn_danger   : 简写=> .Sbd  【用于关于警告】
.S_btn_info     : 简写=> .Sbi  【用于关于提示】
```