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
stone.js

1. 获取url中的指定值
``` 
S_getUrl(paramName) : 返回 查询当前url中你指定的参数paramName对应的值 
```
2. 有序表查找（顺序查找哨兵模式）
```
S_sentry(des, arr) : arr为有序数组，des是你要查找的目标 返回查找目标下标 
```
3. 有序表查找 （折半查找）
```
S_binarySearch(des, arr) : arr为有序数组，des是你要查找的目标 返回查找目标下标 
```
4. 冒泡排序(改进)
```
S_bubbleSort(arr) :arr 为数组，返回一个从小到大的有序数组
```
5. 简单选择排序
```
S_selectSort(arr) :arr 为数组，返回一个从小到大的有序数组
```
6. 快速排序
```
S_quickSort :arr 为数组，返回一个从小到大的有序数组
```





---

stone.css

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