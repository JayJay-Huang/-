
---
## 一元運算子 : `前置、後置`
---

    i++; // 先指派，再加 1。 
    ++i; // 先加 1，再指派。

    若 x = 0;
    x += 1; // 輸出:1 
    x = x++; // 輸出:0
    x= ++x; // 輸出:1

---
## 三元運算子: 「`? :`」 條件 ? True : False ;
---

    int a = 1;
	int b = 2;
	String result =  a>b ? "T": "F";
	System.out.println(result);

----
## 除數「`/`」、餘數「`%`」
----


----
## 「`==`」與「`equal()`」
----
>`==` : 比較記憶體空間。(stack)

>`equal()` : 比較記憶體空間內的值。(heap)

ex 1:

    String a = "OK";
    String b = "OK";
    System.out.println(a==b); // true
    System.out.println(a.equals(b)); // true

ex 2:

    String a = new String("OK");
    String b = "OK";
    System.out.println(a==b); // true
    System.out.println(a.equals(b)); // false

---
## 關係運算子 「`==、!=、>、<、>=、<=`」
---
>回傳值為 `boolean`。
---
## 邏輯運算子 「`&、|、^、!、&&、||`」
---

* & : and
* | : or
* ^ : xor
* ! : not
* && : and
* || : or

ex :

    boolean a = true;
    boolean b = false;
    
    boolean X = a&&b;
    boolean Y = a||b;
    boolean Z = a^b;
    
    System.out.println(!a); // false
    System.out.println(X); // false
    System.out.println(Y); // true
    System.out.println(Z); // true

---
## 「| 和 ||」，「& 和 &&」 
---

> |、& 會做 `雙邊` 運算。

> ||、&& 會先做 `左邊` ( 如果條件已滿足則不判斷右邊 )，再做 `右邊`。

---
## 位元運算子 「`&、|、^、~、>>、<<、>>>`」
---


➤ operand 運算元 (被運算的變數)
➤ operator 運算子 (用來計算的符號 )→ 特殊符號，可對operand執行特殊功能。
1. 指派 Assignment
2. 算數 Arithmetic 
3. 關係 Relational 
4. 邏輯 Logical 
5. 位元操作 Bitwise 

➤ 複合指派運算子 : 結合Assingment /Arithmetic /Relational /Logial /Bitwise
 
➤ 
一元運算子：
二元運算子：  
三元運算子：

➤ 前置後置
前置運算：++x >> 表示x先加1後再做指派，如int x = ++x; 輸出結果x=1;
後置運算：x++ >> 表示x先指派後才做++的動作，如int x = x++, 輸出結果x=0

➤ && | |
&& → 只要前面有一錯，就不執行 (全對才執行)
 |  |  → 只要前面 有一對，就執行 (全錯才不執行)