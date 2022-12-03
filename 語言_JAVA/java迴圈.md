
---
## `for`
---
>預先知道 `次數`。

    for(int i =1 ; i<=3 ; i++) {
        System.out.println(i);
    }

迴圈內，可以有多個控制變數。

    for(int i =1, k=1 ; i<=3 ; i++) {
        ...
    }

---
## `for-each`
---
>將 `集合/陣列` 資料一一帶出。

    int[] num = {1,2,3,4,5};
    for(int i:num) {
        System.out.println(i);
    }

java 的 for-each loop 依樣是用「for」。

---
## `while` / `do while`
---
>知道 `停止條件`。

    int a = 0;
    while(a<10) {
        System.out.println(a);
        a++;
    }
    System.out.println("do");
    // 當條件為 false 時，則跳出迴圈，往下執行。

do { ... } while ( 條件 );
		
    int a = 0;
    do {
        System.out.println(a);
        a++;
    } while(a<5);

>先執行一次，再判斷 true/false。

---
## 迴圈控制 `break、continue、return`
---

### break : 立即跳出迴圈 (中斷執行)。
### continue : 進行下一次迴圈 (跳過剩餘程式碼)。
### retuen : 離開，回傳值。

---
## 「`:`」迴圈命名Label標籤
---
>可幫迴圈命名，並指定呼叫。

>可以任意命名。前加冒號「:」。


    AAA:
    for(int i=1 ; i<=5 ; i++) {
        System.out.print("i="+i+" ");
        
        for(int j=1 ; j<=5 ; j++) {
            if(j==3) {break AAA;}
            System.out.print("j="+j);
        }
        System.out.print("\n");
    }