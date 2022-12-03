



https://mropengate.blogspot.com/2017/08/cc-c.html
https://dotblogs.com.tw/brian/2012/10/18/77588

# 什麼是傳值call by value、傳址call by address、傳參考call by reference
http://wp.mlab.tw/?p=176


# c語言有沒有call by reference(or call by address) ?
http://eportfolio.lib.ksu.edu.tw/~T093000170/blog?node=000000119

# 變數範圍和生命周期

# 關鍵字 const




# pointer 指標

指向某個儲存位址的變數。

```

```
# Address-of operator:「&」

# 指標變數:「*」
1.基礎指標判讀


# "#error"
預處理指令。
預處理階段只要遇到 #error 就會生成一個錯誤提示訊息並停止

# Call by Value, Call by Address, Call by Reference


# What is “const” ? 
常數，代表只可讀不可改。

# and what is the meaning of:
const int a; - 一個常數型整數
int const a; - 一個常數型整數
const int *a; - 一個指標，指向常數型整數 (整型數不可修改，但指標可以)
int * const a; - 一個常數型指標，指向整數  (指標指向的整數可以修改，但指標不可修改)
int const * a const; - 一個常數型指標，指向常數型整數 (指標指向的整數不可修改，同時指標也不可修改)

如果 const 在 * 之前，则 value 是常量。
如果 const 在 * 之后，则地址是常量。
如果 const 在 * 之前和之后都可用，则 value 和 address 都是常量。

const Type * myPtr : Pointer-to-const (yes reassign, no modify pointer)
Tyoe const * myPtr : Pointer-to-const (yes reassign, no modify pointer)
Type * const mtPtr : const pointer (no reassign, yes modify pointer)
const Type * const myPtr : const pointer-to-const (no reassign, no modify pointer)
Type const * const myPtr  : const pointer-to-const (no reassign, no modify pointer)

# Explain “struct” and “union” ?

struct 稱為結構體，可以包含數個不同資料型態的變數，所有變數佔用不同的內存。
union 稱為聯合體，也可以包涵不同資料型態的變數，但是所有辨識站又相同內存。


# 變數範圍和生命周期

local 變數: 僅活在該函式內，存放位置在 stack 或 heap 記憶體中。
static 變數: 生命周期 (life time) 跟程式一樣長，而範圍 (scope) 則維持不變。
global 變數: 所有區段皆可使用此變數。

除了範圍不同，static 變數只有宣告的檔案可以使用；
而 global 變數可加上 extern 關鍵字修飾，即可在其他檔案以 .h 標頭檔方式使用該變數 (也就是 internal linkage 和 external linkage 的不同)。

# 記憶體的配置
Stack: 存放函數的參數、區域變數等，由空間配置系統自行產生與回收。
(會稱作 stack 是由於其配置遵守 LIFO)

Heap : 一般由程式設計師分配釋放，執行時才會知道配置大小，如 malloc/new 和 free/delete。
(注意其資料結構不是 DS 中的 heap 而是 link-list)

Global : 包含 BSS (未初始化的靜態變數)、data section (全域變數、靜態變數) 和 text/code (常數字元)。

配置練習
```
int a=0;   //global 初始化區
char *p1;  //global 未初始化區
main(){
    int b;             // stack
    char s[]="abc";    // stack
    char *p2;          // stack
    char *p3="123456"; // 123456\0 在常量區，p3在stack。
    static int c=0;   // global (static) 初始化區
    p1 = (char*)malloc(10);
    p2 = (char*)malloc(20);  //分配得來得10和20位元組的區域在heap
    strcpy(p1,"123456");  
    //123456\0 在常量區，編譯器可能會將它與 p3 中的 123456\0 優化成一個地方。
}
```
static 練習
```
static int num_a;
// 專屬於整個檔案的全域變數，其他檔案不能存取

void func (int num_b) { // stack 區 
 int num_c; // stack 區

 static int num_d; 
 //scope不變，只能在函數 func 內呼叫，但 lifetime 是整支程式執行的時間。
}
```

# const
只可讀取不可寫入的變數。


# const vs define
1.編譯器處理方式 : define 在預處理階段展開；const 在編譯階段使用。
2.類型和安全檢查 : const 會在編譯階段會執行類型檢查，define 則不會。
3.存儲方式 : define 直接展開不會分配記憶體，const 則會在記憶體中分配。



# volatile


# Stream
串流
是指「將 被讀取 / 寫入，至某IO裝置」的一連串 characters (字元)。

cint: standard input
cout: standard output
cerr: standard error
clog

endl: 為 manipulator。輸出換行符號，並將輸出裝置 buffer 清空。


# namespace

ex: std::cout
表示 cout 被定義於 std 的 namespace 中。
namespace 可以避免與程式庫名稱衝突。

C++ 標準庫 定義名稱都定義於 namespace 內。
當使用時必須說明來自哪一 namespace 內。

# comment block
ex: 
```
/*
* 這是一個 comment block
* 通常在上方
* 作用: 描述演算法、說明參數、闡述程式片段
*/
```

# 嵌套式(nesting)註釋
註釋裡面有註釋。不建議使用。

# 基本內建型別
primitive built-in types

# STL
Standard Template Library
標準樣板函式庫
是一個 c++ 軟體庫

# C++ 中 .cc 和 .cpp 副檔名之間的區別

副檔名為 .cpp 的檔案是 C++ 原始碼檔案。
這些檔案也稱為實現檔案，因為它們具有標頭檔案中宣告的方法的定義。
該檔案旨在將 C++ 專案的介面與實現分開。這樣，成員函式的所有宣告都在標頭檔案中進行，並且相同的詳細資訊儲存在 .cpp 檔案中。

副檔名為 .cc 的檔案是 C++ 原始碼檔案。
這可以包含單個程式以及編譯成機器程式碼的函式。
這些檔案與 Mac、Linux 和 Windows 作業系統相容，並受到這些作業系統上的各種程式的支援。

相似之處:
    都用作 C++ 副檔名。對於編譯器，兩者之間沒有區別。
    (GNU GCC 編譯器將所有這些副檔名視為 C++ 檔案：.cc、.c、.c++、.cp、.cxx、.cpp、.CPP，並始終使用 C++ 編譯來編譯它們，而我們不必使用 GCC 呼叫它。)
相異之處:
    差異可以根據各種因素進行總結。其中包括工作環境、作業系統、舊約定以及這些副檔名的來源。(不同平臺和作業系統)
    1.
    不同的環境支援不同的副檔名
    2.
    作業系統: Unix 和 Linux，約定是 .cc，而對於 Windows，它是 .cpp
    ...

# Const Int 和 Int Const 之間的區別
```
int const a = 1000;
const int a = 1000;
```
複習: C++ 的 const 關鍵字有助於保持某些事物不變。(則這些變數、指標、方法的資料項的「值」在程式執行期間不能更改)

int const 與 const int 相同，但有一個問題。這對於變數來說是正確的，直到指標不進來。
```
int * const demo = &anyvalue;
const int * demo = &anyvalue;
```

---

# Q: 最後K行
## 寫一方法，列印出一個輸入檔最

????

# Q: 反轉字串
# 實作一個函式 void reverse(char* str)，功能是反轉一個以 null 結尾字串

1.
使用字串建構式
```
string str = "This string will be reversed";
cout << str << endl;
string tmp_s_reversed(str.rbegin(), str.rend());
cout << tmp_s_reversed << endl;
```

2.
使用 std::reverse()
```
string str = "123456789";
cout << str << endl;

string str_reversed(str);
reverse(str_reversed.begin(), str_reversed.end());
cout << str_reversed << endl;
```

3.
使用 std::copy()



Q: 雜湊表與 STL Map
比較兩者差異? 如何實作雜湊表? 如果輸入量少，可以使用那些替代雜湊表?

Q: 虛擬函式
解釋其如何工作?

Q: 深拷貝 淺拷貝
解釋二者差別? 解釋如何使用?

Q: Volatile
解釋此一關鍵字在 c++ 中為何?

Q: 虛擬基礎類別
為何麼基礎類中，解構函式需要宣告為虛擬?

Q: 複製節點
寫一方法，該方法以一個指向 Node 資料結構的指標作為參數，
並回傳傳入資料結構的完整副本。
Node 資料結構中，包含兩個指向其他 Node 的指標。

Q: SmartPointer
寫一個 SmartPointer 類別。
其 SmartPointer 是一種資料類型，通常用範本實作，它用起來像指標，而且同時具備自動垃圾收集功能。
它會自動參照 SmartPointer<T*> 物件的參照數量，並在參照數量為 0 時釋放類型為 T 的物件。

Q: Malloc
寫一個能對齊的 Malloc 和它對應的 free 函式。
此一 Maloc 函式能取得記憶體，並且回傳記憶體位置可以被 2 的特定降冪次方整除。

Q: 2D Alloc
寫一個 my2DAlloc 函式，其功用是建立一個二維陣列。
請用最少的 malloc 呼叫次數，並且確保可以透過 arr[i][j] 來存取記憶體



-----

# pointer 指標
A:
一個變數，其指向某一儲存位址。
(value 存取某一 address)

*: 表示是指標變數
&: 取變數記憶體位置

ex: 
int num = 1000;
int *num2 = &num;
cout << num << endl; // 1000
cout << &num << endl; // 000000FD904FF9D4
cout << *num2 << endl; // 1000
cout << &num2 << endl; // 000000FD904FF9F8

# functuion pointer 函式指標
A:
指向 Function 的指標。

在 C 語言中，不論是 variable、array、struct、或是 function(一段程式碼)，
都有所屬的起始記憶體位置。

變數的指標指向變數的位址，
同樣的，function pointer (函式指標) 也是指向函式的位址的指標。
而每個function 的啟始記憶體位置，即為 function 的名稱。

# Function Pointer：指向函數的指標。 
int (*pfunc)(int);

# Function return a pointer: 回傳指標的函數。
int* func(int);

# Function pointer return a pointer。 
int (pfunc)(int);


https://shengyu7697.github.io/cpp-tutorial/


# const 3 種用法與範例

1. const 加上變數前
ex:
const int n = 5;

const 字串指標
ex:
const char * name = "Amy";

表示指標指向的內容不可修改。
```c++
const char* name = "Amy";
name[0] = 'B'; // error
```
但是 name 指標本身是可以修改的(可以修改 name 指標指向別的地方)

```c++
const char *name = "Amy";
cout << &name << endl; // 00000082030FF718
name = "hank";
cout << &name << endl; // 00000082030FF718
```
ex:
const char * const name3
如此則指針跟值都不能修改，name = "hank" (會error)

如果換成整數指標的話:
```c++
const int * a = &b; // 指標指向的內容不可改變
int const * a = &b; // 同上
int * const a = &b; // 常數指標，即指標本身的值是不可改變的，但指向的內容是可改變的
const int * const a = &b; // 指向常數的常數指標，即指標本身與指向的內容都是不可改變的
```

綜合上述指標加上 const 的用法大致分成兩種情況，一種就是不可修改的指標，另一種則是指標指向的內容(記憶體區塊)不可修改，
不可修改的指標：即指標不可修改，代表該指標永遠指向某塊記憶體位置
指標指向的內容(記憶體區塊)不可修改：即指標指向的記憶體區塊不能修改，只能讀取 read-only

2. 加在成員函式前面
    希望回傳的東西不能被修改的話。

3. 加在成員函式後面
    表示不能在該成員函式裡修改類別成員變數。


# static 的 5 種用法
A:
C/C++ 使用 static 目的
    1.限制變數的作用域(scope)。
    2.讓變數生命週期變得跟程式一樣長。

1. 放在區域變數之前
    表示該變數離開該作用域(scope)後記憶體還保留著直到程式結束為止。
    在程式開始時就配置好記憶體，
    執行到這一行才進行實體化。

```c++
#include<iostream>
using namespace std;

void count() {
	static int counter = 0; // 如果沒有 static 則會重新宣告為 0
	counter++;
	cout << ":" << counter << endl;
}

int main() {
	count(); // 1
	count(); // 2
	count(); // 3
	return 0;
}
```
```c++
#include <iostream>
using namespace std;

class Counter {
public:
    Counter() {
        cout << "Counter::Counter()" << endl;
    }

    ~Counter() {
        cout << "Counter::~Counter()" << endl;
    }

    void add(int n) {
        c += n;
    }

    int getCounter() {
        return c;
    }
private:
    int c = 0;
};

void count() {
    cout << "count()" << endl;
    static Counter counter;
    counter.add(1);
    cout << "counter = " << counter.getCounter() << endl;
}

int main() {
    cout << "main()" << endl;
    count();
    count();
    count();
    return 0;
}
```
main()
count()
Counter::Counter()
counter = 1
count()
counter = 2
count()
counter = 3
Counter::~Counter()

程式執行到 static Counter counter; 這一行才開始建構實例化，而且初始化只會有第一次的那一次，一直到程式結束時 Counter 才解構。
所以實際上它是跟全域變數的生命週期有點不一樣，全域變數的生命週期是程式開始到程式結束。
函式內的 static 變數的生命週期是執行到那一行才初始化然後一直到程式結束。

2. 放在全域變數之前 / 放在函式之前
    表示在 c/cpp 檔裡該變數無法被其他 c/cpp 檔用 extern 來使用。
    因為在別支檔 extern 該變數後，就可以在別支檔裡修改這個變數，所以 static 放在全域變數是預防其它人把竄改你的變數。
    static 放在函式之前的用意是希望該函式只能在這支原始檔裡使用，不想給別人呼叫，有點像 class 裡的 private function。

3. 放在 class 的 member variable 之前
    static 放在 class 的 member variable 之前，稱為靜態成員變數 (static member variable)。
    靜態成員變數是不屬於任何一個實體 (instance)，即所有的實體共享這個變數。

4. 放在 class 的 member function 之前
```c++
#include <iostream>
using namespace std;

class Object {
public:
    Object() {
        ++counter;
        cout << "counter = " << counter << endl;
    }
    static int getCounter() { return counter; }
    static void getCounter_2();
private:
    static int counter;
};

int Object::counter = 0; // initializing the static int
void Object::getCounter_2() {
    cout << "hello" << endl;
}

int main() {
    cout << Object::getCounter() << endl;
    Object obj1;
    Object obj2;
    Object obj3;
    cout << Object::getCounter() << endl;
    return 0;
}
```


# c++ .h 和.cpp

1.
標頭檔案(.h):
類的宣告（包括類裡面的成員和方法的宣告）
函式原型
#define常數
...等
但一般來說不寫出具體的實現。

開頭和結尾，必須加上預編譯語句
```.h
#ifndef CIRCLE_H
#define CIRCLE_H

// 程式碼位置

#endif
```
為了防止重複編譯，不這樣做就有可能出錯。

至於CIRCLE_H這個名字實際上是無所謂的，
原則上來說，非常建議把它寫成這種形式，因為比較容易和標頭檔案的名字對應。

2.
https://iter01.com/205707.html



# C++ 資料型態

A:

C++資料型態
    基本資料
        整數: int short long
        浮點數: float double
        字元: char
        邏輯值: bool
    衍生資料
        與位置相關的資料型態: 指標 參照
        有結構的資料型態: string
                         enum
                         array
                         struct
                         union
                         class

# C 標頭檔

```c
#include<stdio.h>
```


# C printf()
A:

#include <stdio.h>

printf 時要指定 format specifier
    %c：以字元方式輸出
    %d：10 進位整數輸出
    %o：以 8 進位整數方式輸出
    %u：無號整數輸出
    %x、%X：將整數以 16 進位方式輸出
    %f：浮點數輸出
    %e、%E：使用科學記號顯示浮點數
    %g、%G：浮點數輸出，取 %f 或 %e（%f 或 %E），看哪個表示精簡
    %%：顯示 %
    %s：字串輸出
    %lu：long unsigned 型態的整數
    %p：指標型態

# c puts

```c
puts("請輸入:");
```

# cast 運算子
A:
用以型別轉換
()

```c
int no1 = (int)(12.123);
printf("%d", no1); // 12
float no2 = (float)(12.123);
printf("%f", no2); // 12.123000
```

# C 語言中 宏 define的使用方法
A:
只做替換，不做計算

```c
#define PI 3.14
cout << PI; // 3.14
```
```c
#define f(x) x*x
cout << f(4+4)/(2+2); // 21
```
解析:

f(4+4) --> 4 + 4 * 4 + 4  // 只做替換，不做計算
--> 4 + 16 + 4 
--> 24/(2+2) --> 24/4 --> 21

ex:
```c
#define f(x) 2*x*x
cout << f(4+4)*2; // 32
// 2*4 + 4*4 + 4*2 = 32
```

# vector 預設值
A:
```c++
vector<int> v(10, 1); // 10元素 初始值1

```

# vector<int> v[5] 與 vector<int> v(5) 差異?

# sizeof() 檢視位元組數
A:
```c
cout << sizeof(int) << endl;
cout << sizeof(long) << endl;
cout << sizeof(char) << endl;
```

# C 建立常數方式?
A:
#defind -- 前置處理器(preprocessor)
const -- 常數修飾子

# static、extern的用法與區別
A:
static和extern全域性變數的區別


1.
extern可以使變數在不同檔案共享
static限制了變數的作用域，只能在本檔案使用。

extern和static不能同時修飾一個變數

2.
extern是宣告變數，最好是在標頭檔案中做宣告
static是定義變數，一般定義static全域性變數時，都把它放在原cpp檔案中而不是標頭檔案

3.
全域性函式宣告預設是extern

4.
函式或變數可以宣告多次，但定義只能有一次

5.如果使用extern在標頭檔案中定義變數，包含此標頭檔案的多個檔案編譯連線時，會出現該變數被定義多次，因而出錯；

如果使用static在標頭檔案中定義變數，包含此標頭檔案的多個檔案編譯連線時，不會出現重定義錯誤，每個編譯單元都會有一個獨立的屬於該變數的儲存空間，但由此會對其他編譯單元造成不必要的資訊汙染。

# 陣列的傳遞
A:
1.傳入

參數寫 int a[] / int *a
ex:
```c++
int fun(int *a, int b[]) {
	return a[0]+b[1];
};
```

2.傳出
要使用 vector

# 字串字面量 string literal
A:
"" 引號內之字元。

"" \0 --> 有1字元
"ABC" ABC\0 --> 有4字元
```c
char str[] = { 'a','b','c','\0'};
char str[] = "abc";
printf("%s", str);
```

# printf() 字串格式化輸出
A:
```c
char str[] = "12345";
printf("[%6s]\n", str); // [ 12345] 不少於n位，遍右
printf("[%-6s]\n", str); // [12345 ] 不少於n位，偏左
printf("[%.3s]\n", str); // [123] 不多於n位
```

char str[] = "12345";
printf("[%6.3s]\n", str); // [   123]
6個空位，3個輸出，靠右

# 字串陣列
A:
```c
char str[][6] = {"apple","dog"};
char sss[] = "hello";
printf("%s", str[0]); // apple
printf("%s", sss); // hello
```

# 字元轉大寫
A:
```c
char ss = toupper('h');
printf("%c", ss); // H
```

# 數字int 轉 字元char

```c
int i = 97;
char ch = static_cast<char>(i); // a
std::cout << ch << std::endl;
```

# 數字int 轉 字串string
A:
要用 #include <sstream>

```c
#include <sstream>
using namespace std;

int main(){
    std:stringstream ss;
	int da = 123;
	ss << da;
	cout << ss.str(); // 123
	return 0;
}
```

# printf 列印 address
A:
%p
```c
int no = 10;
printf("%p\n", no); //000000000000000A
printf("%p\n", &no); //0000008AF278FB34
```

# 指標函數 傳址
A:
```c
// c
void fun1(int *x, int *y) {
	int buf = *x;
	*x = *y;
	*y = buf;
}

// 傳址(c++) c無法
void fun2(int &x, int &y) {
	int buf = x;
	x = y;
	y = buf;
}

int main()
{
	int a, b;
	a = 10;
	b = 99;

	fun1(&a,&b);
	cout << "a:" << a << endl; // a:99
	cout << "b:" << b << endl; // b:10
	fun2(a,b);
	cout << "a:" << a << endl; // a:10
	cout << "b:" << b << endl; // b:99

	return 0;
}
```

# c 表示平方?
A:
需用標頭 math.h
pow(x,2); //x的平方
```c
#include <cmath>
int main()
{
	double no = pow(2,3);
	cout << no; // 8
	return 0;
}
```

# 「<<」 insertion operator
A: 插入運算符
意指:寫入串流 (writing to stream)

# 「endl」
A:
將輸出裝置的緩衝區 (buffer) 清空。

# 「cerr」
A:
用於打印錯誤訊息。

# 「clog」
A:


