https://zhuanlan.zhihu.com/p/45599048

---

# Generator Function
是一可以控制 iterator (迭代器) 的函數。
可在任何時候 開啟/關閉。

```
function * f() {
     for (let i = 0 ; i < 5 ; i++) {
          yield console.log(i);
     };
};
let genf = f()
genf.next(); // 0 
genf.next(); // 1
genf.next(); // 2
genf.next(); // 3
genf.next(); // 4
```
## Generator語法
```
function * f();
let f = function * ();
```
中間有 * 就可以。
箭頭函式不行。

## yield
用 next() 調用，會回傳值。
與return不同:
1. 後面程式會執行
2. 只返回一次，下次調用next()，會執行到下一yield。

