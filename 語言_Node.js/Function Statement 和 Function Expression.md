https://pjchender.blogspot.com/2016/05/javascriptiifesimmediately-invoked.html


### Immediately Invoked Functions Expressions (IIFEs)

### Functions Expressions
建立 function 的 兩種方式

```
// function statement
function sayHello(name) {
  console.log('Hello ' + name);
}
sayHello('PJCHEN');

// function expression
var sarHi = function(name) {
  console.log('Hello, ' + name);
}
sarHi('PJCHEN');
```
### Invoked 調用

```
// function expression
var sarHi = function(name) {
  return('Hello, ' + name);
}
console.log(sarHi); // 會印出 尚未調用的 function
```

於尾部加上()
函式建立之時，便會立刻被調用
```
// Immediately Invoked Functions Expressions (IIFEs)
var sarHiIIFEs = function(name) {
  return('Hello ' + name);
}(); // 放入參數
```
ex
```
var sarHi = function(name, num=777777) {
    return('Hello,'+ name +'! My number is: '+ num);
}("JoJo")
console.log(sarHi)
// Hello,JoJo! My number is: 777777
```

