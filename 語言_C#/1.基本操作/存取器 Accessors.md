

Accessors 擁有 get、set 程式區塊

#### 唯讀屬性與自動屬性

自動屬性
當類別屬性 沒有特別控制敘述時
可以使用自動屬性來宣告建立屬性。
(讓 C# 編譯器自行實作屬性的 get、set 程式區塊)

```
public class Stock{
    public decimal price { get; set; }
}

public class Employee
{
    public string name { get; set; } = "黃聖傑";
}

public class Employee
{
    private string id = "A123456789";
    public string name {
        get { return "my:"+id; }
        set { id = value; } 
    }
}
```

