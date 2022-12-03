https://www.796t.com/category.php?cid=24
https://www.796t.com/category.php?cid=25

https://www.runoob.com/python/python-100-examples.html

https://zhuanlan.zhihu.com/p/54430650
https://www.796t.com/category.php?cid=27
https://www.796t.com/category.php?cid=24

https://shengyu7697.github.io/python-tutorial/
https://www.yiibai.com/interview/250

# python 版本檢查?
A:
python --version

# PEP 8
A:
Python Enhancement Proposal
Python 的程式碼風格，包括了程式碼的 編排、命名、註解 等風格指引。

# 列出python標準庫
A:
import os   # 作業系統相關
import sys  # 執行環境的變數和函數相關
import re  # 正則式
import math  # 數學運算
import datetime  # 日期時間

# CPython 直譯器
A:
是用C語言實作的Python直譯器。

# 說一下 python GLI (Global Interperter Lock)
A:
GIL 可以用於確保在 Python 運行時僅運行一個 Thread 來保證 Thread-safe。

GIL 在 Python 直譯器開始的時候會進行初始化。
GIL 對程式所造成的影響:
「當有一個執行緒在執行 Python，其他 N 個執行緒都在睡覺或是等待 I/O」。
Python 的執行緒們也可以因為 threading.Lock 或是其他來自 threading module 的同步物件而等待; 
這個狀況下的 thread 我們也可以稱之為「正在睡覺」。

進程 Processing
線程 thread
multi-threaded(多線程)

一個線程(thread)在運行 python 程序時，會霸佔 python 解釋器 (即GIL)。
目的: 使該進程(Process)內其它線程(thread)無法運行，等該線程結束，其它才可運行。
如遇到耗時操作，則GIL解鎖。所以多線程中，仍有先後順序。

多進程(MultiProcessing)中，因為每一進程都能被系統分配資源，(相當於每一進程都有一python解釋器)
所以可以實現多進程運行。(缺點是系統資源開銷大)

# GIL 切換 thread 的時機？
A:
什麼時候執行緒會切換呢？
https://blog.louie.lu/2017/05/19/%E6%B7%B1%E5%85%A5-gil-%E5%A6%82%E4%BD%95%E5%AF%AB%E5%87%BA%E5%BF%AB%E9%80%9F%E4%B8%94-thread-safe-%E7%9A%84-python-grok-the-gil-how-to-write-fast-and-thread-safe-python/

# fun(*args, **kwargs) 解釋 *args、 **kwargs 意思
A:
均是可變數量參數。
單 * : 傳入的為 list。(「非鍵值對」)
雙 ** : 傳入的 dict。(「鍵值對」)


# __new__ 和 __init__ 差別
A:
__init__ 負責物件的初始化。
至少要有一參數 self，代表 __new__ 返回的實例。

__new__ 負責物件的建立。
至少要有一參數 cls，代表當前類，此參數再實例化時，由python解釋器自動識別。
必須要有返回值。


# 在 Python 寫 main 函式
Python 中沒有所謂的 main 主程式入口函式，
Python 是腳本語言，執行時是從上往下逐步解析執行

Python 中基本的 main 函式
Python interpreter 執行 Python 腳本時會定義 name 變數為某個字串
寫 if __name__ == '__main__'，是希望只有在當前腳本被直接執行時才執行。


```py

def main():
    print("hello world")

if __name__ == '__name__':
    main()

```

# sys.argv 用法
A:
說明argv: 用來取得執行 Python 檔案時命令列參數(Common Lisp)的方法。
用法:
import sys
sys.argv

# logging 日誌用法
A:
五種等級
DEBUG：logging.debug()
INFO：logging.info()
WARNING：logging.warning() --> (預設)
ERROR：logging.error()
CRITICAL：logging.critical()

用法:
import logging
logging.debug('debug')
logging.info('info')
logging.warning('warning')
logging.error('error')
logging.critical('critical')

https://shengyu7697.github.io/python-logging/

# 回傳2數字最大者?
A:
max = lambda x,y: x if x > y else y 

# python: pass
A:
function 為空時，要加入 pass

# 變數儲存 (動態語言 & 靜態語言)
A:
python 與 c++
對於變除儲存的方式不同
```cpp
int a, b;
a = 10;
b = 10;
cout << &a << endl; // 000000786B91FAF4
cout << &b << endl; // 000000786B91FB14
```
```py
x = 10
y = 10
print(id(x)) # 2095859395152
print(id(y)) # 2095859395152
```
python 是動態語言
處理變數的觀念跟靜態語言不同

1.
c++ 宣告變數時，就會預留儲存空間
2.
python 變數所使用得是 參照位置(reference)的觀念，
當 x = 10 時，python會在記憶體儲存 10
x 則類似標誌，儲存 10 的記憶體位置
當 y = 10，則也指向同一記憶體位置。

# python : = 多重指定
A:
```py
x, y, z = 1, 2, 3 
x, y = y, x
```
```py
x = 2
y = 3
print(x,y) #23

x, y = y, x
print(x,y) #32
```
c++ C# node 均不行這樣使用

# 一次取 商數 餘數? divmod()
A:
divmod([被除數],[除數])
```py
print(divmod(6,3)) # (商數, 餘數)
```


# 10進位轉n進位
A:
```python
# 傳2進位
print(0b1101) # 13 
print(13) # 13
print(bin(13)) # 0b1101
# 轉8進位
print(oct(13)) # 0o15
# 轉16進位
print(hex(13)) # 0xd

```

# 三種輸入方式
1. python 互動式介面(直譯器)
```cmd
python
exit()
```
2. Python 主程式
```cmd
python hello.py
```
3. IDLE
Python的集成開發環境

# python 遞迴最大限度為 1000
A:
```py
sys.getrecursionlimit() # 1000
```

# 當 區域變數 與 全域變數 同名?
A:
python 會分別視之。

# python: global 關鍵字?
A:
將區域變數變全域變數
```py
def fun():
    global aaa
    aaa = 'local' # 宣告賦值要分開

fun() # 必須呼叫 global 才會奏效
print(aaa)
```


# 模組的搜尋路徑
Import 某一模組時

1. 模組名稱列在 sys.builtin_module_names 當中
2. 變數 sys.path 所給定的資料夾清單之中
        sys.path 從這些位置開始進行初始化：
            1. 輸入腳本所位在的資料夾（如未指定檔案時，則是當前資料夾）。
            2. PYTHONPATH（一連串和 shell 變數 PATH 的語法相同的資料夾名稱）。
            3. 與安裝相關的預設值（按慣例會包含一個 site-packages 資料夾，它是由 site 模組所處理）。

# 「編譯」Python 檔案

為了加快載入模組的速度，Python 將每個模組的編譯版本暫存在 __pycache__ 資料夾下，並命名為 module.version.pyc， 這裡的 version 是編譯後的檔案的格式名稱，且名稱通常會包含 Python 的版本編號。