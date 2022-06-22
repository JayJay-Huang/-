# Pseudo Class
虛擬類別。
指元素在特定情況下，才會產生效果。
使用方式: 使用單「:」。
```
a:hover {
    color: #ff755b;
    text-decoration: none;
}
```

# :link
未連結過的link。

# :visited
未訪問過的連結。

# :hover
滑鼠移入時。

# :active
點按滑鼠時。

# :focus
取得焦點。

---

# Pseudo Element
虛擬屬性。
不必透過html標記，只透過css就能插入。
使用方式: 使用雙「::」。

```
.more::after{
    content: url(img/arrow.png);
    width: 1px;
    margin-left: 3px;
    vertical-align: middle;
}
```