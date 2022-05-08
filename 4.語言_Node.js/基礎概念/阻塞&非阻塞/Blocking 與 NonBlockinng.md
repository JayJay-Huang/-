## Blocking : 
---
> 程式會 `等待I/O請求` 直到 `結果` 返回。

是無法處理多個請求，每個請求都會在上一個請求處理完才能處理。

對於web server來說，是必須要處理多個請求的。

解決的方法是啟用 `多執行緒` 處理。

ps:  
開啟多個執行緒處理的代價有點高（記憶體佔用，上下文切換），而且從圖中看到每個執行緒都有很多空餘時間在乾等著，無法充分利用時間。

---
## Non-blocking
---
> 請求後直接返回。

> 如果 `沒有資料` 可以返回，是直接返回一個 `預設` 的 `常量標識` 當前還沒資料可以返回。

## `Reactor Pattern`

Node.js 事件迴圈，基於 : `event demultiplexer` 和 `event queue`。

> 只有一個主執行緒執行JS程式碼，該執行緒也同是event loop執行的執行緒。（並不是主執行緒執行JS程式碼，然後又有一個執行緒在同時執行event loop）。

1. event demultiplexer 接收到I/O請求然後下發給對應的底層去處理。
2. 一旦I/O獲取到了資料，event demultiplexer會把註冊的回撥函式新增到event queue中等待event loop去執行。
3. event queue中的回撥函式依次被event loop執行，直到event queue為空。
4. 當event queue中沒資料了或者event demultiplexer沒有再接受到請求，程式即event loop就會結束，否則回到第一步。

---
## nodejs 的 Event Demultiplexer
---

> 不同的系統有不同的實現方式，如 Linux 的 `epoll`， MacOS 中的 `kqueue`，Windows 中的 `IOCP`。

nodejs 則通過 `libuv` 遮蔽了對不同系統的實現支援跨平臺，提供了針對多種不同I/O請求的具體處理方式的API（如File I/O，Network I/O，DNS處理等）。

> 可視為 libuv 把這一堆複雜的東西都結合在一起形成了nodejs中的 event demultiplexer。


---
https://www.itread01.com/content/1546535733.html