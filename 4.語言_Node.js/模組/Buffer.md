# Buffer
專門用來儲存二進位資料的快取區。

## 字元編碼與轉換

```
let buf = Buffer.from('runoob','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
```