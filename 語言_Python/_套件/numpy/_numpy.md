https://blog.techbridge.cc/2020/08/24/numpy-zen-intro-tutorial/
https://ithelp.ithome.com.tw/articles/10247302

---
Numpy 可以產生一維、二維陣列進行向量（vector）和矩陣（matrix）運算，其在大量運算時有非常優異的效能。

# 引入
A:
```py
import npmpy as np
```

# np.array()
A:
產生一個ndarray ( NumPy的陣列 )
n-dimension (n維)的意思
```py
a = np.array([1, 5, 3, -1])
```

# 建立重複元素
np.zeros() # 0
np.ones() # 1
```py
np.zeros(6) # [0. 0. 0. 0. 0. 0.]
np.ones(10) # [1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
```

# 查看維度 shape
A:
每個維度的元素個數(以Tuple型式呈現)
```py
arr = np.zeros(6)
arr.shape # (6, )
```

# 查看長度 size
A:
總個數
```py
arr = np.zeros(6)
arr.size # 6
```

# 查看 ndim
A:
維度數(rank)
```py
arr = np.zeros(6)
arr.ndim # 1
```

# 建議隨機像素
A:
10~99，尺寸:5X5
ex:
[[65 56 89 69 17]
[55 97 93 73 94]
[71 10 48 67 82]
[26 26 97 90 24]
[76 16 47 54 26]]
```py
img = np.random.randint(10, 99, size=[5, 5], dtype=np.uint8)
```

# 存取像素 .item()
```py
img = np.random.randint(10, 99, size=[5, 5], dtype=np.uint8)
print("修改前\n", img)
da = img.item(0, 0)
print("da:", da)
```

# 修改像素 .itemset()

```
img = np.random.randint(10, 99, size=[5, 5], dtype=np.uint8)
print("修改前\n", img)
img.itemset((0, 0), 255)
print("修改後\n", img)
```

# 給定初始值
A:

```py
arr = np.zeros((300, 300, 3))
arr[:, :, 0] = 255
```

# 內積 @
A:
點積乘法
```py
a = np.array([2,1])
b = np.array([-3,2])
c = a @ b # -4  (2*-3)+(1*2)
```
x乘x，y乘y，再相加

# numpy.linalg.norm
A:
linalg = linear + algebra 線性代數
norm 範圍

np.linalg.norm(data, ord=None, axis=None, keepdims=False)
data：資料矩陣（一維或者二維）
ord：求解的範數型別（預設為二範數）
        ord=1：列和的最大值
        ord=2：|λE-ATA|=0，求特徵值，然後求最大特徵值得算術平方根
        ord=∞：行和的最大值
axis：處理型別
        axis=1表示按行向量處理，求多個行向量的範數
        axis=0表示按列向量處理，求多個列向量的範數
        axis=None表示矩陣範數。
keepding：是否保持矩陣的二維特性
        True 保持
        False 不保持

```py
a = np.array([3, 4])
v = np.linalg.norm(a) # 5.0
```