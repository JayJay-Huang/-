# \<p> paragraph
```
<p>This is paragraph</p>
```
# \<section>
```
<section>
    <h1>h1 h1 h1</h1>
    <p>ppppppp...</p>
</section>
```
# \<div>
適用於區塊內還有其他元素時。

# \<span>
適用於指定文字內容的範圍。

# \<article>

# \<br>
強行換行。
```
txt.txt.txt.txt.<br>txt.txt.txt.txt...
```

# \<strong>
粗體。與\<b>同。
```
<p>字文字字<strong>文字</strong>文字文字文字</p>
<p>文字文字<b>文字</b>文字文字文字</p>
```
# \<em>
斜體。與\<i>同。
```
<p>文字文字<em>文字</em>文字文字文字</p>
<p>文字文字<i>文字</i>文字文字文字</p>
```
# \<samll>
縮小。
```
<p>字文字字<small>文字</small>文字文字文字</p>
```

# \<a> anchor
建立超連結。
href: 路徑。
1. 同一網頁內: #id名稱 (# 表示同一網頁)
2. 同一網站內: 相對路徑
3. 外網站(不同Domain): 絕對路徑。(完整網址)

```
<nav>
    <ul>
        <li><a href = "#info1">標題1</a></li>
        <li><a href = "#info2">標題2</a></li>
        <li><a href = "#info3">標題3</a></li>
        <li><a href = "./demo.html">Go to demo.html</a></li>
        <li><a href = "https://www.google.com.tw/">Go to Google</a></li>
    </ul>
</nav>

<section id = "info1">
    <h2>標題1</h2>
    <p>文字文字文字文字文字文字文字文字文字文字</p>
</section>
<section id = "info2">
    <h2>標題2</h2>
    <p>文字文字文字文字文字文字文字文字文字文字</p>
</section>
<section id = "info3">
    <h2>標題3</h2>
    <p>文字文字文字文字文字文字文字文字文字文字</p>
</section>
```


# \<img> image
插入圖片。
src: 路徑
withd: 寬度
height: 高度
alt: 無法顯示時，所顯示之文字。
```
<img src = "./img/dog.jpg" width = "500" height="450" alt="這是圖片">
```
如果原本尺寸，則 width、height非必填。(只填其一，則比例不會變)