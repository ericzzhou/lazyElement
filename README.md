# 描述

延迟加载页面元素中的内容，一般在耗时较久的元素渲染上比较适用。多用户元素出现在屏幕可视区域的时候做一些事情。



## 基本用法

默认情况下，lazyElement.js 不会处理任何元素，除非为某元素添加css样式 `class="lazy_element"` 此样式只用来检测需要 lazyElement 处理的元素，对您网页的视觉效果不会产生任何影响。

```html
<script src="./lazyElement.js"></script>

<div id="div8" class="lazy_element" data-lazy_event="aaa"></div>
<div id="div9"></div>
<div id="div10" class="lazy_element" data-lazy_event="bbb"></div>
```

引入 lazyElement.js 后，它将在 `window.onload` 事件触发时收集需要延迟加载的元素。
在 `window.onscroll` 事件触发时执行 `data-lazy_event` 属性指定的事件。

您要做的只是为您需要延迟加载的元素编写数据挂载事件，在元素没有出现在屏幕可视区域的时候，该事件不会呗调用。


# License

All code licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php). All images licensed under [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/deed.en_US). In other words you are basically free to do whatever you want. Just don't remove my name from the source.

