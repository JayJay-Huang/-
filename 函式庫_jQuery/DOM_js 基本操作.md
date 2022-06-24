
### 傳統js操作

js
```
window.onload = function(){
    document.querySelector('#msg').textContent = '使用js 顯示文字'
}
```
html
```
<p id="msg">wait..123</p>
```

### 使用 jQuery
js
```
$(function(){
    $("#msg").text("使用 jQuery 顯示!!")
})
```
html
```
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```
```
<p id="msg">wait..123</p>
```