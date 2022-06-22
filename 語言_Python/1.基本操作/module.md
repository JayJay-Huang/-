## import
ex
```
# calculator.py
def add(a, b):
    return a + b
```
### 從同資料夾 import 資料
```
from calculator import add
res = add(4, 5)
print(res)

```
### 從別資料夾 import 資料
```
import sys
from os.path import dirname, abspath
pjoPath = dirname(dirname(abspath(__file__)))
sys.path.append(pjoPath + "\\test\\project1\\")
print(pjoPath)
# sys.path.append("D:\\codeWork\\pycharm\\test\\project1\\") # 絕對路徑
from calculator import add

res = add(4, 5)
print(res)
```
----

## import時不被執行
```
# calculator.py
# 自我測試
if __name__ == '__main__':
    res = add(2, 5)
    print(res)
```
這裡該檔案 被import時
因為 \__name__ 不是 \__main__
所以不會被執行。
只有直接執行該檔案時，才會被執行。
