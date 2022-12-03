https://www.infoq.cn/article/qbjxf0413reeca2exgwd

---

# Node.js 與 JavaScript 差異?

Node 在 Server 運行的 JavaScript 的環境，
以Google Chrome V8 引擎為核心，
加上一系列C/C++ 的套件，讓Server 端也可以執行JavaScript。

引擎方面:
Node 在 V8 引擎


# Node 特性

異步
事件驅動
單線程

因為 JavaScript 是一個事件驅動的語言，透過事件迴圈，能讓執行緒幾乎不會被卡住；
而這樣的特性，非常適合用來接收高併發（High Concurrency）的請求。

CUP密集狀況下 不適合

# stub 是什麼?


# yarn 和 npm？


# Node.js 的 Event Loop
Node.js 之所以高效，是因為
1.採取單執行緒
2.Event Loop

將所有需要等待結果、請求外部資源的函式，全部丟到 Event Loop 中等待。
Event Loop 的邏輯是 Node.js 底層用 C 語言撰寫的 libuv 庫來運行的。

# Event Loop 執行的邏輯
## MacroTask Queue
1.Timers
    等計時器（setTimeout、setInterval）的時間一到，會把他們的 callback 放在這裡等待執行。
2.Pending callbacks
    作業系統層級使用（ex：TCP errors、sockets 連線被拒絕）。
3.Idle, Prepare
    內部使用。
4.Polling
    如果 Queue 不為空，依次取出 callback 函數執行，直到 Queue 為空或是抵達系統最大限制。
    如果 Queue 為空但有設置「setImmediate」就進入 Check 階段。
    如果 Queue 為空但沒有設置「setImmediate」就會在 Polling 階段等待，直到 Queue 有東西或是 Timer 時間抵達。
5.Check
    處理 setImmediate 的 callback。
6.Close callbacks
    處理關閉連線、檔案的 callback。
## NextTick Queue
優先層級最高
「process.nextTick()」的 callback 可以隨意插隊；只要這個 Queue 有東西就會優先執行。
## MicroTask Queue
優先層級次高
「Promise」的狀態從 pending 轉變為 resolve 或 reject 時，執行的 callback 會進入這個 Queue。
(Promise 在創建時是同步的，不會進入 Event Loop。)

# Node.js 跟 JavaScript 的差異
JavaScript 是程式語言，可以在合適的瀏覽器中運行。
Node.js 是一個能執行JavaScript 的環境，它以 Chrome V8 引擎為核心，再加上 C/C++套件，讓 Sever 端也可以執行 JavaScript。

# readFile 和 createReadStream 函式的差異
fs module。
fs.readFile()
fs.createReadStream()

readFile 函式會將讀取到的完整內容 "存在記憶體" 後傳給使用者。
createReadStream 函式則是逐塊讀取檔案，不是全部存在記憶體中。( 讀取較大的檔案時適用 )

# REPL
Read Eval Print Loop
一個用來 "執行程式語言的虛擬環境" 。
就像是我們在瀏覽器的 Console 可以執行 JavaScript 程式碼。
安裝完 Node.js 後，新增一個 JavaScript 檔，在終端機輸入node xxx.js便可以執行它。

# Node.js 檔案系統 fs

# 流 Stream
流是一種有效方式處理讀寫文件。
傳統方式: 將文件一次全部讀取到儲存器。
Stream: 逐塊讀取

# 流 4種類型

1.Readable(可讀)
2.Writable(可寫)
3.Double(雙工)
4.Transform(轉換)

每個流也是一個  EventEmitter。

# EventEmitter
eventEmitter 就是一個自訂事件觸發。

瀏覽器中，js 事件綁定通常使用 addlistener，通常觸發事件範圍會有限。
所以當要 自定義觸發事件，就必須自訂定義其函式。所以便有 EventEmitter。



# NPM & Yarm


# package-lock.json ?
A:
紀錄其他 dependency 的版本。
因為 package.json 僅記錄當前最新版本。

package-lock.json 為 npm 5 以後新增了。

# Callback Hell 回調地獄
A:
1.因為javascript是單線程的，所以有些需要等待的地方，需要使用回調函數。
2.由於某些業務的問題，在代碼中會一次性寫會多層的回調嵌套，回調嵌套後的代碼的維護難度，和無法排除bug。
這個就被稱作回調地獄。

缺點:
    代碼耦合，一旦修改，原地爆炸。
    無法使用try catch，就無法排錯，也是原地爆炸。

解決方法:

1.
promise
```javascript
let eat = ()=>{
    return new Promise((resolve, reject) => {
    resolve('俺吃好啦,給你盤子')
    })
}
eat.then( res => {
    let washResult = washDishes(res); return washResult;
})
.then(res => {
    eatIceCream(res)
})

```
2.
async/await
其實就是一層語法糖，加上async命令的函數，會return出一個promise。
```javascript
async function eat(){
    let washResult = await washDishes();
    let eatIceCream = await buyIceCream(washResult);
    let eatCake = await buyCake(eatIceCream);
}
```

# node 表示平方?
A:
用數學函式 Math.pow()
```js
no = Math.pow(2,3)
console.log(no) // 8
```