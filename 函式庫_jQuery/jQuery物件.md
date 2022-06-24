
取得jQuery物件，再使用其方法。

```
var demo1 = jQuery(選擇器);
var demo2 = $(選擇器);
```

#### selector 選擇器
作為jQuery物件被提取出來之html元素。

#### $(function(){ })
```
$(function(){ .... })
```
等於
```
$(()=>{ .... })
```

$('#msg')
並非直接取得 DOM 元素，
而是將 jQuery物件 對應操作對象的html元素。







