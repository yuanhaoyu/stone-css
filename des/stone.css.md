# stone.css

✊stone.css是一款在normalize.css基础上，结合autoprefixer，再次深度定制的css库。

为了你更好的使用体验，stone.css扩展了以下几个方面：

- Color
- Flex
- Font
- Icon
- Outline
- Ex

如果你在使用移动布局，并且需要rem的时候这里强烈建议使用

<a href="https://github.com/yuanhaoyu/h-auto">**h-auto.js**</a>

## Quick start

1. clone 当前项目下的dist/stone.css.
2. 引入到你的项目中.
3. happy start 🚗.

## Usage

### Color

我们对字体颜色做了以下扩展

- .text-grey
- .text-black
- .text-blue
- .text-red
- .text-white

当然还有背景颜色

- .grey
- .white
- .red

上面的所有颜色都是精心配置，并且普遍适用于各种场景的

### Flex

由于Flex 比较难写尴尬的兼容，所以这里我们也把它提了出来，使用autoprefixer的小伙伴可以无视这段。

初始化 flex

- .flex

水平排列 justify-content

- .flex-justify-center
- .flex-justify-start
- .flex-justify-end
- .flex-justify-space-between

垂直排列 align-items

- .flex-align-start 
- .flex-align-end
- .flex-align-center
- .flex-align-stretch
- .flex-align-baseline

纵向排列

- .flex-column

强制换行

- .flex-wrap 

flex

- .flex-1
- .flex-2
- .flex-3

grow

- .flex-grow-1
- .flex-grow-2
- .flex-grow-3

### Font

文字这里主要涉及文字的省略

- .text-omit
- .text-omit-2
- .text-omit-3
- .text-omit-n

注意省略n行的时候，请手动设置-webkit-line-clamp: n

同时省略1行 不建议使用.text-omit-n 将n设置成1，强烈建议使用.text-omit，因为这里的省略的机制不一样。

### Icon

四个方向的箭头(依次上下左右)

- .arrow-t
- .arrow-b
- .arrrow-l
- .arrow-r

等待loading

- .loading

更多的图标我们将持续更进

### Outline

outline 主要是解决0.5px的线的问题，这里暂时支持的颜色是#e5e5e5

- .outline-t
- .outline-b
- .outline-l
- .outline-r

注意由于这里是用的before 和 after 实现的 所以同时在一个元素上设置的时候，只支持t和b同时出现或者l和r同时出现，要想实现全部的0.5px
的线，可以考虑嵌套元素。

### Ex

这里是一些扩展

浮动相关(下面依次是左浮动/右浮动/清除浮动)

- .l
- .r
- .cl


遮罩

- .shade


合适的边距

- .p-l-10
- .p-l-15
- .p-l-20
- .m-b-20

粘性布局 （实验阶段，不推荐）

- .sticky

盒模型

- .border-box

居中容器

- .container

row 行容器扩展

这里主要是给没有ui的同学使用。

下面的容器依次是适合（首页/列表/其他/头部/表单/清除浮动）使用的

- .row-index
- .row-list
- .row-other
- .row-header
- .row-form
- .row-cl

## BTW

当然你也可以访问<a href="https://yuanhaoyu.github.io/stone/test/index.html">传送门</a>，看看部分css在html中的表现


