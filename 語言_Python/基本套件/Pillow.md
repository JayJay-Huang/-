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