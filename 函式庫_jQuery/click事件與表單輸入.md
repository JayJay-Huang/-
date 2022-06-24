#### from
```
<p id="msg">wait...</p>
<div>
    <input type="text" id="text">
    <button id="btn">Click</button>
</div>
```
```
$('#msg').text('please input text here...');
$('#btn').click(function(){
    let str = $('#text').val();
    $('#msg').text('you type:'+ str +'.');
});
```
$('#text').val() : 擷取輸入的值。

$('#msg').text('...') : 顯示文字資料。

$('#btn').click() : click 事件。

js寫法 :
```
window.onload = () => {
    document.querySelector('#btn').addEventListener('click',
        () => {
            let str = document.querySelector('#text').value;
            document.querySelector('#msg').textContent = 'you type:'+ str +'.'
        }
    )
};
``` 










