## 創建Buffer

---
### 方法1. 長度為 10 字節的 Buffer 實例

    var buf1 = new Buffer(10);

### 方法2. 給定數組創建

    var buf2 = new Buffer([10, 20, 30, 40, 50]);

### 方法3. 給定字串創建 Buffer 實例

    var buf3 = new Buffer("www.google.com","utf-8");

---

## Buffer.alloc() / Buffer.allocUnsafe()

---

    buf = new Buffer.alloc(100);

---

## Buffer.from()

---

    buf = new Buffer.from('www.runoob.com');

---

## 寫入Buffer

---

    buf.write(string[, offset[, length]][, encoding])

* string - 寫入緩衝區的字串。
* offset - 開始寫入的索引值，默認為0。
* length - 寫入的字節數，默認為 `buffer.length`。
* encoding - 使用的編碼，默認為 `utf8`。

### 返回值

若 buffer 空間不足， 則只會寫入部分字符串。

    Buffer.alloc(100).write('AAA'); // 為Buffer長度
    Buffer.from('AAA'); // 為Buffer內容

---

## 從緩衝區讀取數據

---

    buf.toString([encoding[, start[, end]]]);

* encoding - 使用的編碼，默認為 `utf8`。
* start - 開始讀取的索引位置，默認為0。
* end - 結束位置，默認為緩衝區的末尾。

ex :

    buf = new Buffer.alloc(26);
    for(var i =0 ; i < 26 ; i++ ){
    buf[i] = i + 97;
    };
    
    console.log(buf.toString()); // abcdefghijklmnopqrstuvwxyz
    console.log(buf.toString('utf8',0,5)); // abcde
    console.log(buf.toString('ascii',0,5)); // abcde