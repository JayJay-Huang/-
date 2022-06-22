https://www.1keydata.com/css-tutorial/tw/border.php

---

# Cascading Style sheets

### 在html中套用css
1. 利用style屬性
```
<h3 style="color:darkorange;">This is H3 heading</h3>
```
2. 利用\<style>標籤
```
<head>
    <style>h2{color:cornflowerblue;}</style>
</head>
```
3. 載入css檔案
```
<head>
    <style>h2{color:cornflowerblue;}</style>
    等於
    <style>@import url(./index.css);</style>
</head>
```
ex:
```
<head>
    <meta charset="utf8">
    <title>demo</title>
    <style>h2{color:cornflowerblue;}</style>
    <link href="./index.css" rel="stylesheet" media="all">
</head>
<body>
    <h1>This is H1 heading</h1>
    <h2>This is H2 heading</h2>
    <h3 style="color:darkorange;">This is H3 heading</h3>
</body>
```

# css 語法
基本寫法: 選擇器 { 屬性 : 值; }

# 指定顏色
1. 16進位RGB值: #RRGGBB
    當 1、2或3、4或5、6重複時，可分別省略一碼。
    ex: #FF0000 > ex: #F00
2. 整數值: rgb(255,0,0)
3. 百分比值; rgb(100%,0%,0%)

以上不分大小寫。

# 單位
1. 絕對單位: 固定值
px: 像素點(pixel)。
pt: point(1/72吋)。
pc: picas(12 pt)。
mm: 公厘。
cm: 公分。
in: 英吋(2.54cm)。

2. 相對單位: 根據參照的尺寸值計算
%: 父元素px值的百分比。
em: 父元素px值的倍數。
rem: 根元素px值的倍數。

# 屬性的繼承
(查閱每屬性的規格文件)
大多情況:
1. 文字、段落有關的會被繼承。
2. 上述之外，大多不會繼承。

ex: 
```
section {
    border: 1px solid #f00;
    color: #73abe3;
    text-decoration: underline;
    text-align: center;
}
/* border沒繼承 */
```
```
<section>
    <h2>h2標題</h2>
    <p>文字內容文字內容文字內容</p>
</section>
```

# 屬性的覆寫
載入順序: 自上而下。
後者會覆蓋前者(如果同一屬性不同屬性值)。

# 元素設定名稱: id、class
id: 在一html之中只能被使用一次。
class: 沒有限制。

id選擇器: #id名稱 (用#)
```
#contents {
    background-color:darkgoldenrod;
}
```
class選擇器: .class名稱 (用.)
```
.more {
    text-align: right;
}
```
或可以加上元素名稱
```
p.more {
    text-align: right;
}
```
# 子孫選擇器

撰寫格式: 父元素 子元素 { }
```
.h-sub span {
    font-weight: normal;
}
```
class h-sub 中的 \<span>。