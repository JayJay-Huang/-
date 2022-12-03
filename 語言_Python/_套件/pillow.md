
# PIL & Pillow ?
A:
PIL(Python Imaging Library)是Python一個强大方便的影像處理函式庫。
只支援到 Python 2.7。

Pillow 是 PIL 的一个衍生的分支專案，
但如今已经發展成為比 PIL 本身更活躍的影像處理函式庫。

安裝:
pip install Pillow

引用:
from PIL import Image

img = Image.open("lena.jpg")
img.show()

# 圖片模糊化 blur
A:
ImageFilter

from PIL import Image, ImageFilter

```python
from PIL import Image, ImageFilter
img = Image.open('./img/dog.jpg')
new_img = img.filter(ImageFilter.BLUR)
new_img.save('./img/dog_fulter.jpg')
```

# PIL ImageFilter Module 其他的參數?
A:
ImageFilter.BLUR --> 模糊
ImageFilter.CONTOUR --> 輪廓
ImageFilter.DETAIL --> 
ImageFilter.EDGE_ENHANCE --> 邊界加強
ImageFilter.EDGE_ENHANCE_MORE --> 邊界加強(更)
ImageFilter.EMBOSS --> 浮雕
ImageFilter.FIND_EDGES --> 邊界
ImageFilter.SMOOTH --> 平滑
ImageFilter.SMOOTH_MORE --> 平滑(更)
ImageFilter.SHARPEN --> 銳化

```python
detail = img.filter(ImageFilter.DETAIL)
print(detail) 
# <PIL.Image.Image image mode=RGB size=275x183 at 0x141F5E76790>
```
```
from PIL import Image
from PIL import ImageColor
import os

res = Image.new("RGB", (300, 300), "Yellow")

for x in range(50, 251):
    for y in range(50, 151):
        res.putpixel((x, y), (0, 255, 255, 255))

for x in range(50, 251):
    for y in range(151, 251):
        res.putpixel((x, y), ImageColor.getcolor("Blue", "RGB"))
res.show()

```