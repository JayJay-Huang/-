
https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/598186/

# [程式原理]

# NET和C#有什麼區別

A: 
C# 是一個程式語言， .NET 則是平台框架。

認識 C#:
    由微軟主導開發的語言，是一型別安全的物件導向語言。
    延續 C/C++語言架構
    參考 java 採用直譯器編譯，實行記憶體回收功能。
認識 .Net
    .NET 則是平台框架。其中包含了 CLR 與大量的類別庫(class library)。
    目前有 
    1. Windows 平台專屬的 .NET Framework 
    2. 跨平台的 .NET Core 
    兩種

# 類別庫（Class library）
A:
類別的集合。
    
# 通用語言運行庫 Common Language Runtime (CLR)
A:
是一VM。
微軟為.NET的虛擬機的名稱。
微軟對通用语言架构（CLI）的實作版本。

一個包含執行.NET程式的引擎，以及一堆符合公共語言基礎(CLI)結構的類別庫集合。
CLR是一份規範的實現，幾乎所有的.NET程式都是基於CLR的類別庫來實現，並且在CLR提供的執行引擎上執行。所謂的.NET框架就是指CLR。

CLR的主要功能如下:
    基礎類別庫支援 Base Class Library Support
    記憶體管理 Memory Management
    執行緒管理 Thread Management
    垃圾回收 Garbage Collection
    安全性 Security
    類型檢查 Type Checker
    異常管理 Exception Manager
    除錯管理 Debug Engine
    中間碼(MSIL)到機器碼(Native)編譯
    類別裝載 Class Loader

# CTS、CLS、CLR 解釋？
A:
CTS：通用語言系統。 Common Type System
    微軟公司向ECMA提出一份語言和資料格式規格。
    包括了CTS、公共中間語言(CIL)、底部檔案格式以及中繼資料格式等。
CLS：通用語言規範。 Common Language Specification
CLR：公共語言執行庫。 Common Language Runtime

# .Net Framework 由 "CLR" 和 "類別函式庫" 所組成。

# CLR: 
Common Language Runtime
通用語言執行環境。

# JIT
Just In Time
編譯器。

# MSIL
Microsoft Intermediate Language
當 .Net編譯器 編譯時，不是直接編譯成CPU可執行的機器語言。
而是一種中間程式語言 MSIL。
等到執行程式時，CLR 使用 JIT 編譯器，
將 MSIL 轉換成機器語言。

# 釐清 CLR、.NET、C#、Visual Studio、ASP.NET 各版本之間的關係
https://blog.miniasp.com/post/2015/07/28/Clarify-the-versions-between-CLR-NET-CSharp-Visual-Studio-and-ASPNET

# [演算法]

# 一列數的規則如下: 1、1、2、3、5、8、13、21、34…… 求第30位數是多少，用遞迴演算法實現
A:
遞迴 Fun(n-1) + Fun(n-2)

```
public class Selution
{

    public static int Fun(int num)
    {
        if(num ==1 || num == 2)
        {
            return 1;
        }
        else
        {
            return Fun(num - 1) + Fun(num - 2);
        }
    }
}
```

# 實現一個氣泡排序演算法
A:
```
int[] arr = { 1, 3, 5, 7, 9, 2, 4, 6, 8 };
int temp = 0;
for (int i = 0; i < arr.Length; i++)
{
    for (int j = i; j<arr.Length; j++)
    {
        if (arr[j] < arr[i])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

```
[語言基礎-特色]

# C#中的委託是什麼？事件是不是一種委託？ # delegate 委派
A: 
Delegate。委派，委託。
事件，是一種特殊的委託。

1.Delegate。所有的委託都派生自 System.Delegate 類。
2.允許將方法當做參數傳遞。
3.可用於定義回呼方法。
4.與 C++ 函式指標相似，但委派完全為物件導向，而且不像 C++ 指標之於成員函式，會同時委派封裝物件執行個體與方法。
3.一般用於實現事件和回調方法。

委託可以把一個方法作為引數代入另一個方法。委託可以理解為指向一個函式的引用。

所有的 Delegate 都派生自 System.Delegate

```
public delegate void Del(string message);

public static void DelegateMethod(string message)
{
    Console.WriteLine(message);
}

public static void Main(string[] args)
{
    Del handler = DelegateMethod;
    handler("Hello World");
}
```

# C#事件（Event）
A:
是一用戶操作，或提示訊息，應用程序響應事件。

1.用C#自訂事件

public class ClassName
{
    //宣告委派
    delegate void EventPrototype(object sender, EventArgs e);
    //宣告事件
    public event EventPrototype eventName;
}

public class ClassName
{
    //宣告委派
    delegate void EventPrototype(object sender, EventArgs e);
    //宣告事件
    public event EventPrototype eventName;
    
    //自訂方法
    void function(){
        //宣告object Type變數
        object obj = new object();
        //在類別中未註冊事件時,可避免觸發時的null錯誤
        //事件名稱?.Invoke(事件參數);
        eventName?.Invoke(obj,new EventArgs()); 
    }
}

//實體化類別
ClassName obj = new ClassName();
//註冊事件,定義當事件觸發時要處裡事件的函式
obj.eventName += new ClassName.EventPrototype(functionName);

private void functionName(object sender, EventArgs e)
{
    //當觸發事件時要處理的函式
}

# 什麼是裝箱(boxing)和拆箱(unboxing)?
A:
Boxing:
    從值型別介面轉換到引用型別
    int val = 100;
    object obj = val; // boxing
Unboxing:
    從引用型別轉換到值型別
    int num = (int)obj; // unboxing

C#中 值類型跟引用類型，最終基類都是Object類型。(它本身是一引用類型)
所以，值類型也可以作為引用類型使用。
其底層就是利用 boxing / unboxing 來處理。

# C#可否對記憶體進行直接的操作?
A:
C#構建了一個託管世界，在這個世界裡，只要不寫不安全程式碼，不操作指標，那麼就能獲得.Net至關重要的安全保障。
該如何編寫程式碼支援來自任意區域的記憶體呢？這個時候就需要寫不安全程式碼，使用指標了。

# C#操作任何型別的記憶體
1. 託管記憶體（managed memory）
    var mangedMemory = new Student();
    只需使用 new 操作符就分配了一塊託管 堆 記憶體，而且還不用手工釋放它，因為它是由垃圾收集器（GC）管理的，GC會智慧地決定何時釋放它，這就是所謂的託管記憶體。

1. 棧記憶體（stack memory）
   unsafe{
    var stackMemory = stackalloc byte[100];
    }
    使用 stackalloc 關鍵字非常快速地就分配好了一塊 棧 記憶體。
    也不用手工釋放，它會隨著當前作用域而釋放，比如方法執行結束時，就自動釋放了。

2. 本機記憶體（native memory）

使用span

1. 託管記憶體（managed memory）
   var managedMemory = new byte[100];
   Span<byte> span = managedMemory;

2. 棧記憶體（stack memory）
    var stackedMemory = stackalloc byte[100];
    var span = new Span<byte>(stackedMemory, 100);

3. 本機記憶體（native memory）
    var nativeMemory = Marshal.AllocHGlobal(100);
    var nativeSpan = new Span<byte>(nativeMemory.ToPointer(), 100);

在.Net的世界裡，Span 就是所有型別記憶體的抽象化身，表示一段連續的記憶體，它的API設計和效能就像陣列一樣 ，所以我們完全可以像使用陣列一樣地操作各種記憶體。

# Overloaded 可否改變回傳值型別?
A:
可以

# abstract class 和 interface有什麼區別?
A:
介面（interface）是抽像類的變體。
在介面中，所有方法都是抽像的。多繼承性可通過實現這樣的介面而獲得。
介面只可以定義static final成員變數。

# asp.net 內聯運算式 aspx <%@,<%#, <%$, <%= 
asp 動態伺服器網頁擴充(Active Server Page Extended，簡稱ASP)的檔案，
專用於 Microsoft ASP.NET framework。

<%@ 引用
<%# 绑定
<%$ 脚本标识
<%= 取值


<% @ ...% > 指令運算式
<% # ...% > 資料繫結運算式
<% $ ...% > 運算式建立器
<% = ...% > 顯示運算式
伺服器端批註區塊 <%--...--% >

# C＃中，string str = null 與 string str = “”
null是沒有空間引用的
” 是空間為0的字串

# C# 檢視字串是否為null
string.IsNullOrEmpty()

# 試問 0、""(空字串)、Null、Empty、與 Nothing 有何區別？
A:

# why在.Net託管程式碼中我們不用擔心記憶體漏洞?
A:
因為GC

# 委託宣告的關鍵字是?
A:
delegate

# 用sealed修飾的類有什麼特點？
A:
密封，不能繼承

# .net的錯誤處理機制是什麼?
A:
try->catch->finally結構
發生錯誤時層層上拋，直到找到匹配的Catch為止。

# Asp.net中所有的自定義使用者控制元件都必須繼承?
A:
Control

# .NET 的序列化
A:
.NET 具有下列序列化技術：
    二進位序列化
    XML 和 SOAP 序列化只會串列
    JSON 序列化只會串列

可序列化的類都被標記為[serializable]

# const不能用static修飾?
A:
不能
ex: public static const int A=1; //(x)

# 當整數a賦值給一個object物件時，整數a將會被?
A:
inboxing(裝箱)

# 類成員訪問方式?
A:




# MVC模式分層
A:
資料訪問層，業務層，表示層。

# C# 表示平方
```c#
double no = Math.Pow(2, 3);
Console.WriteLine(no); // 8
```

# CTS 共通型別系統

# 存取子 與 支援存放
A:
C# Property(屬性)
1. 支援存放 backing store: 利用屬性來存取欄位
2. 存取子 accessor: 擁有 get、set 程式區塊

```cs
// 在資料內加入 get{} set{}
public int no
{
    get
    {
        return 10;
    }
    set
    {
        no = value;
    }
}
```

# Accessors 唯讀屬性與自動屬性
A:
自動屬性
當類別屬性 沒有特別控制敘述時
可以使用自動屬性來宣告建立屬性。
(讓 C# 編譯器自行實作屬性的 get、set 程式區塊)

```cs
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


# C#: 抽象類別 與 介面
A:
抽象類別: 讓類別繼承
介面: 讓類別實作

1. 抽象方法
可以宣告成抽象方法、一般方法
2. 介面
只有抽象方法(一定不會有實作)

一個類別只會有一個抽象方法，但可以多介面。
介面或抽象方法，都要全部實作。(抽象方法要用 override，介面不用)

# [資料]

# const 常數
宣告之時一定要指定型別。

# var
不馬上指定型別，賦值決定型別。


# [其他]

# Razor Pages
https://docs.microsoft.com/zh-tw/aspnet/core/mvc/views/tag-helpers/built-in/?view=aspnetcore-3.1
https://docs.microsoft.com/zh-tw/aspnet/core/razor-pages/?view=aspnetcore-3.1&tabs=visual-studio

# MVC 路由
https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/204042/

# ASP.NET支援三種開發模式
A:
Web Pages(單頁面模型)
Web Forms(事件驅動模型)
MVC(Model View Controller)

# MVC
A:
Model主要負責：business logic、DataBase資料；
View則是UI的呈現，主要透過HTML+CSS+JavaScript語法撰寫；
Controller功能在於取得 Model資料 ，丟給 View 呈現網頁內容。