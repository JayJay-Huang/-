
# 安裝套件
A:
```
pip install opencv-python
```

# 查看版本? __version__
A:
```py
v = cv2.__version__
print(v) # 4.5.1
```

# 引入
A:
```py
import cv2
```

# 讀取 imread()
A:
cv2.imread(filename[,flags])

```py
da = cv2.imread("./imgs/dog.jpg")
print(da)
```

# 顯示 imshow()
A:
```py
cv2.imshow('lesson', img) # 在視窗內顯示影像
cv2.waitKey(0) # 等待按鍵(當使用者按下鍵盤，敘述就會發生)

cv2.destroyAllWindows() # 關閉所有視窗
cv2.namedWindow("lesson") # 建立指定名稱視窗
```

# 儲存 imwrite()
A:
```py
cv2.imwrite("./imgs/cv_Save.jpg", img) # 儲存

```

# waitKey()
retval = cv2.waitKey([等待時間])
回傳: ASCII碼
等待時間: 單位是ms (當值為 <= 0，為無限等待)


